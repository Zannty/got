import React from "react";
import "./Header.css";
import SearchPanel from "../SearchPanel/SearchPanel";

const Header = () => {
  return (
    <div className="header navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="logo">
        Интерфейс просмотра и управления данными по смертям в сериале "Игра
        престолов"
      </div>
      <SearchPanel />
    </div>
  );
};

export default Header;
