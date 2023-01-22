import SECTIONS_DATA from "./sections.data"


const INITIAL_STATE = SECTIONS_DATA;

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;