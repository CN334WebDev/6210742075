import { API_DATA } from '../types'

const initialState = {
    data: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case API_DATA:
            return {
                ...state,
                data: [...action.payload],
            }
        
        default:
            return state;
    }
}