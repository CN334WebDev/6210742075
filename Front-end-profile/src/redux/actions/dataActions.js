import { API_DATA, API_DATA_SKILL } from "../types";

export const getData = () => async (dispatch) => {

    console.log("test get product data");

    const url = "http://127.0.0.1:8000/api/portfolio";
    
    await fetch(url)
        .then((res) => res.json())
        .then((result) => {
            console.log(result.data)
            dispatch({ type: API_DATA, payload: result.data });
        })
        .catch(console.error());
};

export const getDataSkill = () => async (dispatch) => {

    console.log("test get product data Skill");

    const url = "http://127.0.0.1:8000/api/portfolioskill";
    
    await fetch(url)
        .then((res) => res.json())
        .then((result) => {
            console.log(result.data)
            dispatch({ type: API_DATA_SKILL, payload: result.data });
        })
        .catch(console.error());
};