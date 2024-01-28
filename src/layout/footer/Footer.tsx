import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Socials} from "../../components/socials/Socials";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper align={"center"} direction={"column"} gap={"30px"}>
                <Logo/>
                <Name>Tanya Tkachuk</Name>
                <Socials/>
                <Copyright>© 2024 Tetiana Tkachuk, All Rights Reserved</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
  padding: 40px 0;
`
const Name = styled.h5`
  font-size: 1.2rem;
`

const Copyright = styled.small`
  display: block;
  max-width: 80vw;
  margin: 0 auto;
  text-align: center;
`