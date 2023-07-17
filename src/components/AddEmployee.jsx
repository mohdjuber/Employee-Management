import React from "react";
import {
  TextField,
  FormGroup,
  FormControl,
  Stack,
  Button,
} from "@mui/material";
import { Select, MenuItem, InputLabel } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployeeData } from "../Api";
import image from ".../public/image.jpg";

/* const Wrapper = styled(FormGroup)`
 margin: 0% 30% 0 30%;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const FormDiv = styled(FormControl)`
  padding: 10px 50px 0 50px;
`;
const LabelDiv = styled(InputLabel)`
  padding: 10px 50px;
`;
const NewButton = styled(Button)`
  margin: 30px 50px;
`;
?*/
const initialValue = {};

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState(initialValue);
  const navigate = useNavigate();

  const getData = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  const addEmp = async () => {
    await addEmployeeData(employeeData);
    navigate("/allemployee");
  };

  return (
    <Stack sx={{ display: "grid", placeItems: "center" }}>
      <FormGroup
        sx={{
          width: "33vw",
          padding: "20px",
          boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        }}
      >
        <Stack spacing={2}>
          <PersonAddAlt1Icon sx={{ fontSize: 80, alignSelf: "center" }} />
          <FormControl>
            <TextField
              label="Employee ID"
              onChange={getData}
              name="employeeid"
            />
          </FormControl>
          <FormControl>
            <TextField label="Name" onChange={getData} name="name" />
          </FormControl>
          <FormControl>
            <TextField label="Email" onChange={getData} name="email" />
          </FormControl>
          <FormControl>
            <InputLabel>Job-Role</InputLabel>
            <Select
              value={employeeData.jobrole}
              label="Job-Role"
              onChange={getData}
              name="jobrole"
            >
              <MenuItem value="FullStack Developer">
                FullStack Developer
              </MenuItem>
              <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
              <MenuItem value="Backend Developer">Backend Developer</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <TextField label="Salary" onChange={getData} name="salary" />
          </FormControl>
          <Button variant="contained" color="secondary" onClick={addEmp}>
            Add Employee
          </Button>
        </Stack>
      </FormGroup>
    </Stack>
  );
};

export default AddEmployee;
