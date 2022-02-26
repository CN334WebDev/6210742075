import { API_DATA, API_DATA_SKILL, API_DATA_PROJECT } from '../types'

const initialState = {
    data: [],
    dataSkill: [],
    dataProject: []
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
        case API_DATA_PROJECT:
            return {
                ...state,
                dataProject: [...action.payload],
            }

        default:
            return state;
    }
}