import axios from "axios";

const API_URL = "http://localhost:3002/employee";

export const addEmployeeData = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    console.log("Error while calling addEmployeeData", error.massage);
  }
};

export const getEmployees = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("Error while calling getEmployees", error.massage);
  }
};

export const getEmployee = async (data) => {
  try {
    return await axios.get(`${API_URL}/${data}`);
  } catch (error) {
    console.log(error.massage);
  }
};

export const editEmployee = async (data, id) => {
  try {
    return await axios.put(`${API_URL}/${id}`, data);
  } catch (error) {
    console.log("Error while calling editEmployee API");
  }
};

export const deleteEmployee = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log("Error while calling delete API", error.massage);
  }
};
