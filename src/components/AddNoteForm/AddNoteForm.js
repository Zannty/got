import React from "react";

import { connect } from "react-redux";
import {
  handleAddItem,
  openAddNoteForm,
  handleChangeDescrip,
  handleChangeKiller,
  handleChangeReasonDeath,
  handleChangeWeapon,
  handleChangeName
} from "./../../actions/actions";
import "./AddNoteForm.css";

const AddNoteForm = ({
  openAddNoteForm,
  name,
  descrip,
  weapon,
  reasonDeath,
  killer,
  handleChangeDescrip,
  handleChangeKiller,
  handleChangeReasonDeath,
  handleChangeWeapon,
  handleChangeName,
  handleAddItem
}) => {
  const sub = e => {
    e.preventDefault();
    handleAddItem();
  };
  return (
    <div className="note-form form-group row">
      <form onSubmit={sub}>
        <div className="form-group">
          <label>Имя персонажа</label>
          <input
            type="name"
            className="form-control"
            value={name}
            onChange={e => handleChangeName(e.target.value)}
            placeholder="Введите имя"
          />
        </div>
        <div className="form-group">
          <label>Описание персонажа</label>
          <input
            type="name"
            className="form-control"
            value={descrip}
            onChange={e => handleChangeDescrip(e.target.value)}
            placeholder="Введите описание"
          />
        </div>
        <div className="form-group">
          <label>Причина смерти</label>
          <input
            type="name"
            className="form-control"
            value={reasonDeath}
            onChange={e => handleChangeReasonDeath(e.target.value)}
            placeholder="Введите причину смерти"
          />
        </div>
        <div className="form-group">
          <label>Кем убит</label>
          <input
            type="name"
            className="form-control"
            value={killer}
            onChange={e => handleChangeKiller(e.target.value)}
            placeholder="Кем убит"
          />
        </div>
        <div className="form-group">
          <label>Орудие убийства</label>
          <input
            type="name"
            value={weapon}
            onChange={e => handleChangeWeapon(e.target.value)}
            className="form-control"
            placeholder="Орудие убийства"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-secondary" onClick={openAddNoteForm}>
            Закрыть
          </button>
          <button type="submit" className="btn btn-primary">
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = ({ name, descrip, weapon, reasonDeath, killer }) => {
  return { name, descrip, weapon, reasonDeath, killer };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAddItem: () => dispatch(handleAddItem()),
    openAddNoteForm: () => dispatch(openAddNoteForm()),
    handleChangeDescrip: text => dispatch(handleChangeDescrip(text)),
    handleChangeKiller: text => dispatch(handleChangeKiller(text)),
    handleChangeReasonDeath: text => dispatch(handleChangeReasonDeath(text)),
    handleChangeWeapon: text => dispatch(handleChangeWeapon(text)),
    handleChangeName: text => dispatch(handleChangeName(text))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddNoteForm);
