import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Socials} from "../../components/socials/Socials";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper align={"center"}>
                <Logo/>
                <Name>Tanya Tkachuk</Name>
                <Socials/>
            </FlexWrapper>
            <Copyright>2024 Tetiana Tkachuk, All Rights Reserved</Copyright>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
  background-color: #6051a1;
  min-height: 20vh;
`
const Name = styled.h5`

`

const Copyright = styled.small`
  display: block;
  max-width: 80vw;
  margin: 0 auto;
  text-align: center;
`