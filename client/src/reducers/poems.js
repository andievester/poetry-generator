const defaultPoem = {
  title: String,
  author: Object({
    first: String,
    last: String,
  }),
  lines: [String],
  stanzas: [[String]],
  isLoading: Boolean,
};

defaultPoem.title = "";
defaultPoem.author.first = "";
defaultPoem.author.last = "";
defaultPoem.lines = [""];
defaultPoem.stanzas = [[""]];
defaultPoem.isLoading = false;

const reducer = (state = defaultPoem, action) => {
  if (action) {
    switch (action.type) {
      case "FETCH_ALL":
        return action.payload;
      case "FETCH":
        return action.payload;
      case "LOADER":
        return {
          ...state,
          isLoading: action.payload,
        };
      default:
        return state;
    }
  } else {
    return state;
  }
};

export default reducer;
