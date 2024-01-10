import React from 'react';
import styled from "styled-components";
import {Comment} from "../../layout/sections/testimony/Comment";
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Comment/>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  border: 2px solid black;
  max-width: 50vw;
`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 20px;
    height: 10px;
    margin: 5px;
    background-color: #fff;
  }
`

