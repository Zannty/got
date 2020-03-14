const initialState = {
  items: [],
  visibleItems: [],
  loading: false,
  openModal: false,
  selectFilterValue: "def",
  inputFilterValue: "",
  name: "",
  descrip: "",
  weapon: "",
  reasonDeath: "",
  killer: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REQUEST": {
      return {
        ...state,
        loading: true
      };
    }
    case "FETCH_SUCCESS": {
      return {
        ...state,
        visibleItems: action.payload,
        items: action.payload,
        loading: false
      };
    }
    case "OPEN_ADD_NOTE_FORM": {
      return {
        ...state,
        openModal: !state.openModal
      };
    }
    case "DELETE_ITEM": {
      console.log(action.payload);
      return {
        ...state,
        items: state.items.filter((el, idx) => idx !== action.payload),
        visibleItems: state.visibleItems.filter(
          (el, idx) => idx !== action.payload
        )
      };
    }
    case "HANDLE_CHANGE_NAME": {
      return {
        ...state,
        name: action.payload
      };
    }
    case "HANDLE_CHANGE_REASON_DEATH": {
      return {
        ...state,
        reasonDeath: action.payload
      };
    }
    case "HANDLE_CHANGE_KILLER": {
      return {
        ...state,
        killer: action.payload
      };
    }
    case "HANDLE_CHANGE_WEAPON": {
      return {
        ...state,
        weapon: action.payload
      };
    }
    case "HANDLE_CHANGE_DESCRIP": {
      return {
        ...state,
        descrip: action.payload
      };
    }
    case "HANDLE_CHANGE_SELECT_FILTER": {
      return {
        ...state,
        selectFilterValue: action.payload
      };
    }
    case "HANDLE_CHANGE_INPUT_FILTER": {
      return {
        ...state,
        inputFilterValue: action.payload
      };
    }
    case "HANDLE_APPLY_FILTER": {
      const { items, selectFilterValue, inputFilterValue } = state;
      const arr = items.slice();

      const newArr = arr.filter(el => {
        // eslint-disable-next-line default-case
        switch (selectFilterValue) {
          case "def": {
            return (
              el.name.toLowerCase().includes(inputFilterValue.toLowerCase()) ||
              el.descrip
                .toLowerCase()
                .includes(inputFilterValue.toLowerCase()) ||
              el.weapon
                .toLowerCase()
                .includes(inputFilterValue.toLowerCase()) ||
              el.reasonDeath
                .toLowerCase()
                .includes(inputFilterValue.toLowerCase()) ||
              el.killer.toLowerCase().includes(inputFilterValue.toLowerCase())
            );
          }
          // eslint-disable-next-line no-fallthrough
          case "name": {
            return el.name
              .toLowerCase()
              .includes(inputFilterValue.toLowerCase());
          }
          // eslint-disable-next-line no-fallthrough
          case "descrip": {
            return el.descrip
              .toLowerCase()
              .includes(inputFilterValue.toLowerCase());
          }
          // eslint-disable-next-line no-fallthrough
          case "reasonDeath": {
            return el.reasonDeath
              .toLowerCase()
              .includes(inputFilterValue.toLowerCase());
          }
          // eslint-disable-next-line no-fallthrough
          case "weapon": {
            return el.weapon
              .toLowerCase()
              .includes(inputFilterValue.toLowerCase());
          }
          // eslint-disable-next-line no-fallthrough
          case "killer": {
            return el.killer
              .toLowerCase()
              .includes(inputFilterValue.toLowerCase());
          }
        }
      });

      return {
        ...state,
        visibleItems: newArr
      };
    }
    case "HANDLE_ADD_ITEM": {
      let newObj = {
        reasonDeath: state.reasonDeath,
        killer: state.killer,
        weapon: state.weapon,
        name: state.name,
        descrip: state.descrip
      };

      return {
        ...state,
        items: [...state.items, newObj],
        visibleItems: [...state.visibleItems, newObj],
        name: "",
        descrip: "",
        weapon: "",
        reasonDeath: "",
        killer: "",
        openModal: false
      };
    }

    case "HANDLE_SORT_UP": {
      let newArr = state.visibleItems.sort((a, b) =>
        a[action.payload] > b[action.payload] ? 1 : -1
      );

      return {
        ...state,
        visibleItems: [...newArr]
      };
    }
    case "HANDLE_SORT_DOWN": {
      let newArr = state.visibleItems.sort((a, b) =>
        a[action.payload] > b[action.payload] ? -1 : 1
      );

      return {
        ...state,
        visibleItems: [...newArr]
      };
    }
    default:
      return state;
  }
};
