const initalState = {
    number: 0,
};

const userReducer = function (state = initalState, action) {
    switch (action.type) {
        default:
            return {
                ...state,
            };
    }
};

export default userReducer;
