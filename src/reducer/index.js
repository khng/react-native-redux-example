export const reducer = (state={text: "initial"}, action) => {
    switch (action.type) {
        case "UPDATE_LABEL":
            return { ...state, text: action.text };
        default:
            return state;
    }
};
