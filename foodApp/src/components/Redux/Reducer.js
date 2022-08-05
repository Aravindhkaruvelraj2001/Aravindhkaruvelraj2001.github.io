const initial = [];
const quantity = 1;

const reducer = (state = initial, action) => {
  let { payload, type } = action;
  let flag = true;

  switch (type) {
    case "ADDITEM": {
      if (state.length === 0) {
        payload = { ...payload, quantity };
        state.push(payload);
      } else {
        state = state.filter((item) => {
          if (item.name === payload.name) {
            flag = false;
            item.quantity = item.quantity + 1;
            return item;
          }
          return item;
        });
        if (flag) {
          payload = { ...payload, quantity };
          state.push(payload);
        }
      }
      // console.log(state);
      return state;
    }

    case "REMOVEITEM": {
      state = state.filter((item) => {
        if (item.name !== payload.name) return item;
      });
      return state;
    }

    default:
      return state;
  }
};

export default reducer;
