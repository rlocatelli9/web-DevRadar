import React from "react";
import logoDevRadar from "../../assets/DevRadar-logo.png";
//import { FaBeer } from "react-icons/fa";
import "./styles.css";

export default function Header() {
  return (
    <header className="main">
      <img src={logoDevRadar} alt="Logo Punk Beer" />
    </header>
  );
}
