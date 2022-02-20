import { API_DATA, API_DATA_SKILL } from '../types'

const initialState = {
    data: [],
    dataSkill: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case API_DATA:
            return {
                ...state,
                data: [...action.payload],
            }
        case API_DATA_SKILL:
            return {
                ...state,
                dataSkill: [...action.payload],
            }

        default:
            return state;
    }
}