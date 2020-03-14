import React, { useEffect } from "react";
import "./Content.css";
import { connect } from "react-redux";
import {
  fetchSuccess,
  fetchRequest,
  openAddNoteForm,
  deleteItem,
  handleSortUp,
  handleSortDown
} from "./../../actions/actions";
import DataService from "./../../service/DataService";
import Spinner from "./../Spinner/Spinner";
import AddNoteForm from "../AddNoteForm/AddNoteForm";
import Table from "./../Table/Table";

const Content = ({
  visibleItems,
  fetchSuccess,
  loading,
  fetchRequest,
  openAddNoteForm,
  openModal,
  deleteItem,
  handleSortUp,
  handleSortDown
}) => {
  useEffect(() => {
    fetchRequest();
    const dataService = new DataService();
    dataService.getData().then(data => fetchSuccess(data));
  }, [fetchRequest, fetchSuccess]);
  if (loading) return <Spinner />;
  return (
    <div className="contain">
      <div className={openModal ? " modal" : ""}>
        <button onClick={openAddNoteForm} className="btn btn-primary">
          Добавить запись
        </button>
        <Table
          visibleItems={visibleItems}
          deleteItem={deleteItem}
          handleSortUp={handleSortUp}
          handleSortDown={handleSortDown}
        />
      </div>
      <div>
        {" "}
        {openModal ? (
          <AddNoteForm
            fetchRequest={fetchRequest}
            fetchSuccess={fetchSuccess}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ items, visibleItems, loading, openModal }) => {
  return {
    visibleItems,
    loading,
    openModal,
    items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSuccess: data => dispatch(fetchSuccess(data)),
    fetchRequest: () => dispatch(fetchRequest()),
    deleteItem: idx => dispatch(deleteItem(idx)),
    openAddNoteForm: () => dispatch(openAddNoteForm()),
    handleSortUp: param => dispatch(handleSortUp(param)),
    handleSortDown: param => dispatch(handleSortDown(param))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
