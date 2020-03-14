import React from "react";

const Table = ({ handleSortUp, visibleItems, deleteItem, handleSortDown }) => {
  return (
    <table className="table table-hover ">
      <thead>
        <tr className="table-info">
          <th scope="col">#</th>
          <th scope="col">
            Имя персонажа
            <button
              className="badge badge-light"
              onClick={() => handleSortUp("name")}
            >
              ∨
            </button>
            <button
              className="badge badge-light"
              onClick={() => handleSortDown("name")}
            >
              ∧
            </button>
          </th>
          <th scope="col">
            Описание персонажа{" "}
            <button
              className="badge badge-light"
              onClick={() => handleSortUp("descrip")}
            >
              ∨
            </button>
            <button
              className="badge badge-light"
              onClick={() => handleSortDown("descrip")}
            >
              ∧
            </button>
          </th>
          <th scope="col">
            Причина смерти
            <button
              className="badge badge-light"
              onClick={() => handleSortUp("reasonDeath")}
            >
              ∨
            </button>
            <button
              className="badge badge-light"
              onClick={() => handleSortDown("reasonDeath")}
            >
              ∧
            </button>
          </th>
          <th scope="col">
            Кем убит
            <button
              className="badge badge-light"
              onClick={() => handleSortUp("killer")}
            >
              ∨
            </button>
            <button
              className="badge badge-light"
              onClick={() => handleSortDown("killer")}
            >
              ∧
            </button>
          </th>
          <th scope="col">
            Орудие убийства
            <button
              className="badge badge-light"
              onClick={() => handleSortUp("weapon")}
            >
              ∨
            </button>
            <button
              className="badge badge-light"
              onClick={() => handleSortDown("weapon")}
            >
              ∧
            </button>
          </th>
          <th scope="col">действие</th>
        </tr>
      </thead>
      <tbody>
        {visibleItems.map((item, idx) => {
          const { name, descrip, reasonDeath, killer, weapon } = item;
          return (
            <tr className="table-primary" key={idx}>
              <th scope="row">{idx + 1}</th>
              <td>{name}</td>
              <td>{descrip}</td>
              <td>{reasonDeath}</td>
              <td>{killer}</td>
              <td>{weapon}</td>
              <td>
                <button
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={() => deleteItem(idx)}
                >
                  Удалить
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
