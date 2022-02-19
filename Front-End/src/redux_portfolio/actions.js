import {
    CREATE_DATA,
    RETRIEVE_DATA,
    UPDATE_DATA,
    DELETE_DATA,
  } from "./actionTypes";
  
  import dataService from "./dataService";
  
  export const createData =
    (name, age, gender, email, phone_number, address, nation, photo, gpa, about_me, skill, project, viedolink, experience) => async (dispatch) => {
      try {
        const res = await dataService.create({
          name,
          age,
          gender,
          email,
          phone_number,
          address,
          nation,
          photo,
          gpa,
          about_me,
          skill,
          project,
          viedolink,
          experience
        });
        
        dispatch({
          type: CREATE_DATA,
          payload: res.data,
        });
        console.log("Create")
        return Promise.resolve(res.data);
      } catch (err) {
        return Promise.reject(err);
      }
    };
  
  export const retrieveData = () => async (dispatch) => {
    try {
      const res = await dataService.getAll();
  
      dispatch({
        type: RETRIEVE_DATA,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const updateData = (id, data) => async (dispatch) => {
    try {
      const res = await dataService.update(id, data);
  
      dispatch({
        type: UPDATE_DATA,
        payload: data,
      });
      console.log("Update")

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const deleteData = (id) => async (dispatch) => {
    try {
      await dataService.delete(id);
  
      dispatch({
        type: DELETE_DATA,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  