import React from "react";
import { connect } from "react-redux";
import {
  handleChangeSelectFilter,
  handleChangeInputFilter,
  handleApplyFilter
} from "./../../actions/actions";
import "./SearchPanel.css";

const SearchPanel = ({
  selectFilterValue,
  handleChangeSelectFilter,
  inputFilterValue,
  handleChangeInputFilter,
  handleApplyFilter
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    handleApplyFilter();
  };
  return (
    <form
      className="search-panel form-inline my-2 my-lg-0"
      onSubmit={handleSubmit}
    >
      <span className="se"> Поиск: </span>
      <select
        className="select-filter custom-select"
        value={selectFilterValue}
        onChange={e => handleChangeSelectFilter(e.target.value)}
      >
        <option value="def">По умолчанию</option>
        <option value="name">По имени</option>
        <option value="descrip">По описанию персонажа</option>
        <option value="reasonDeath">По причине смерти</option>
        <option value="killer">По убийце</option>
        <option value="weapon">По орудию убийства</option>
      </select>
      <input
        type="text"
        className="input-search form-control mr-sm-2"
        value={inputFilterValue}
        onChange={e => handleChangeInputFilter(e.target.value)}
        placeholder="поиск"
      />
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">
        Применить
      </button>
    </form>
  );
};

const mapStateToProps = ({ selectFilterValue, inputFilterValue }) => {
  return { selectFilterValue, inputFilterValue };
};
const mapDispatchToProps = dispatch => {
  return {
    handleChangeSelectFilter: val => dispatch(handleChangeSelectFilter(val)),
    handleChangeInputFilter: val => dispatch(handleChangeInputFilter(val)),
    handleApplyFilter: () => dispatch(handleApplyFilter())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
