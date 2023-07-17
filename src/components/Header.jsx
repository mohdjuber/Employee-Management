import React from "react";
import { Box, AppBar, Toolbar, Typography, Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 22px;
`;
const Logo = styled(Typography)`
  font-size: 28px;
`;

const Header = () => {
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <Logo>Employee-Management</Logo>
          <Stack direction={"row"} spacing={10} paddingLeft={50}>
            <NavItem to="/allemployee">All Employee</NavItem>
            <NavItem to="/addemployee">Add Employee</NavItem>
            <NavItem to="/about">About</NavItem>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
