export function counter(state = { count: 0 }, payload) {
  let count;

  switch (payload.type) {
    case 'INCREMENT':
      count = { count: state.count + 1 };
      return { ...state, ...count };

    case 'DECREMENT':
      count = { count: state.count - 1 };
      return { ...state, ...count };

    default:
      return state;
  }
}

export function test(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}
