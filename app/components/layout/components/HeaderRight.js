import React, { useContext } from "react";
import styled from "styled-components";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { App } from "../Layout";
import Wallet from "./Wallet";

const HeaderRight = () => {
  const ThemeToggler = useContext(App);
  return (
    <HeaderRightWrapper>
        <Wallet />
      <ThemeToggle onClick={ThemeToggler.changeTheme}>
        {ThemeToggler.theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </ThemeToggle>
    </HeaderRightWrapper>
  );
};

const HeaderRightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  height: 50%;
`;
const ThemeToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgDiv};
  height: 100%;
  padding: 5px;
  width: 45px;
  border-radius: 12px;
  cursor:pointer;
`;
export default HeaderRight;
