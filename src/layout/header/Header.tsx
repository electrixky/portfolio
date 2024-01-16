import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const items = ["Home", "Skills", "Projects", "Testimony", "Contacts"]
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`