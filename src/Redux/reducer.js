function reducer(state = "general", action) {
  switch (action.type) {
    case "NEWS":
      return (state = action.payload);
    default:
      return state;
  }
}

export default reducer;
