export const fetchRequest = () => {
  return {
    type: "FETCH_REQUEST"
  };
};
export const fetchSuccess = data => {
  return {
    type: "FETCH_SUCCESS",
    payload: data
  };
};
export const deleteItem = idx => {
  return {
    type: "DELETE_ITEM",
    payload: idx
  };
};

export const openAddNoteForm = () => {
  return {
    type: "OPEN_ADD_NOTE_FORM"
  };
};
export const handleChangeName = text => {
  return {
    type: "HANDLE_CHANGE_NAME",
    payload: text
  };
};
export const handleChangeDescrip = text => {
  return {
    type: "HANDLE_CHANGE_DESCRIP",
    payload: text
  };
};
export const handleChangeReasonDeath = text => {
  return {
    type: "HANDLE_CHANGE_REASON_DEATH",
    payload: text
  };
};
export const handleChangeKiller = text => {
  return {
    type: "HANDLE_CHANGE_KILLER",
    payload: text
  };
};
export const handleChangeWeapon = text => {
  return {
    type: "HANDLE_CHANGE_WEAPON",
    payload: text
  };
};
export const handleChangeSelectFilter = val => {
  return {
    type: "HANDLE_CHANGE_SELECT_FILTER",
    payload: val
  };
};
export const handleChangeInputFilter = val => {
  return {
    type: "HANDLE_CHANGE_INPUT_FILTER",
    payload: val
  };
};
export const handleApplyFilter = () => {
  return {
    type: "HANDLE_APPLY_FILTER"
  };
};
export const handleAddItem = () => {
  return {
    type: "HANDLE_ADD_ITEM"
  };
};
export const handleSortUp = param => {
  return {
    type: "HANDLE_SORT_UP",
    payload: param
  };
};
export const handleSortDown = param => {
  return {
    type: "HANDLE_SORT_DOWN",
    payload: param
  };
};
