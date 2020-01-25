import React, { useEffect, useState } from "react";
import DevForm from "../../components/DevForm";
import DevItem from "../../components/DevItem";
import "../../Main.css";
import api from "../../services/api";
import "../../Sidebar.css";

function Main() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);

    setDevs([...devs, response.data]);
  }

  async function handleDestroy(data) {
    await api.delete(`/devs/${data}`);
    const filterDevs = devs.filter(dev => dev._id !== data);

    setDevs(filterDevs);
  }

  async function handleUpdate(params) {}

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem
              key={dev._id}
              dev={dev}
              onDeleteDev={handleDestroy}
              onUpdateDev={handleUpdate}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Main;
