import React from 'react';
import styled from "styled-components";
import {Comment} from "../../layout/sections/testimony/Comment";
import {FlexWrapper} from "../FlexWrapper";
import {Theme} from "../../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <Comment/>
            <Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  border: 2px solid black;
`

const Pagination = styled.div`
  margin-top: 30px;
  
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    border-radius: 20px;
    background-color: ${Theme.colors.hoverColor};

    &.active {
      background-color: ${Theme.colors.secondary};
      width: 30px;
    }
  }
`

