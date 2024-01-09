import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi,</span>
                    <h2>I am Tanya,</h2>
                    <h1>a Web Developer</h1>
                </div>
                <img src="" alt="photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  min-height: 90vh;
  background-color: #3e58a8;
`