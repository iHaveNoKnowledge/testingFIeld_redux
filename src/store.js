import { createStore } from "redux";

const initialState = {
  count: 0,
  item1: { id: 0, title: "s" },
  part: [
    { id: 0, title: "s", category: "sword" },
    { id: 1, title: "s2", category: "shield" }
  ]
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "CHANGE":
      return {
        ...state,
        item1: { id: action.payload.id, title: action.payload.title }
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
