import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
//import { Link } from "react-router-dom";
import "./styles.css";
function DevItem({ dev, onDeleteDev }) {
  async function handleRemoveDev() {
    await onDeleteDev(dev._id);
  }

  return (
    <li className="dev-item">
      <div className="delOrUpdate">
        <button type="submit" /* onClick={() => handleUpdate(dev._id)} */>
          <FaEdit />
        </button>
        <button type="submit" onClick={() => handleRemoveDev()}>
          <FaTrashAlt />
        </button>
      </div>
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar Perfil no GitHub
      </a>
    </li>
  );
}

export default DevItem;
