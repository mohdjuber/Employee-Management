import { Stack, Avatar, Typography, Button, styled } from "@mui/material";
import { getEmployees, deleteEmployee } from "../Api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllEmployee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployeeData();
  }, []);

  const getEmployeeData = async () => {
    let response = await getEmployees();
    // console.log(response);
    setEmployees(response.data);
  };

  const deleteEmployeeData = async (id) => {
    await deleteEmployee(id);
    getEmployeeData();
  };

  const OuterStack = styled(Stack)`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  `;

  return (
    <>
      <Stack direction={"raw"} flexWrap={"wrap"} justifyContent={"center"}>
        {employees.map((employee) => {
          return (
            <OuterStack
              spacing={1}
              width={250}
              margin={3}
              padding={2}
              alignItems={"center"}
            >
              <Avatar src="/broken-image.jpg" />
              <Typography variant="h6">{employee.id}</Typography>
              <Typography variant="h5">{employee.name}</Typography>
              <Typography>{employee.email}</Typography>
              <Typography>{employee.jobrole}</Typography>
              <Typography variant="h6">${employee.salary}</Typography>
              <Stack direction={"row"} spacing={1}>
                <Link to={`/editemployee/${employee.id}`}>
                  <Button sx={{ backgroundColor: "#1e90ff", color: "#fff" }}>
                    UPDATE
                  </Button>
                </Link>
                <Button
                  sx={{
                    backgroundColor: "#ff4500",
                    color: "#fff",
                  }}
                  onClick={() => deleteEmployeeData(employee.id)}
                >
                  REMOVE
                </Button>
              </Stack>
            </OuterStack>
          );
        })}
      </Stack>
    </>
  );
};
export default AllEmployee;
