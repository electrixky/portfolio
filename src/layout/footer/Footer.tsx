import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";

export const Footer = () => {
    return (
        <StyledFooter>
            <Logo/>
            <Name>Tanya Tkachuk</Name>

        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
  
`