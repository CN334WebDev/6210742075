import { API_DATA, API_DATA_SKILL, API_DATA_PROJECT } from "../types";

export const getData = () => async (dispatch) => {

    console.log("test get product data");

    const url = "https://pure-scrubland-43049.herokuapp.com/api/portfolio";
    
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

    const url = "https://pure-scrubland-43049.herokuapp.com/api/portfolioskill";
    
    await fetch(url)
        .then((res) => res.json())
        .then((result) => {
            console.log(result.data)
            dispatch({ type: API_DATA_SKILL, payload: result.data });
        })
        .catch(console.error());
};

export const getDataProject = () => async (dispatch) => {

    console.log("test get product data Project");

    const url = "https://pure-scrubland-43049.herokuapp.com/api/project";
    
    await fetch(url)
        .then((res) => res.json())
        .then((result) => {
            console.log(result.data)
            dispatch({ type: API_DATA_PROJECT, payload: result.data });
        })
        .catch(console.error());
};