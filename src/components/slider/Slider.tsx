import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {Comment} from "../../layout/sections/testimony/Comment";
import "../../styles/slider.css"

const items = [
    <Comment title={"Amazing work!"} userName={"John Doe"}
             text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae commodi culpa molestiae nihil odit quaerat quasi quidem tenetur totam."}/>,
    <Comment title={"Amazing work!"} userName={"John Doe"}
             text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae commodi culpa molestiae nihil odit quaerat quasi quidem tenetur totam."}/>,
    <Comment title={"Amazing work!"} userName={"John Doe"}
             text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae commodi culpa molestiae nihil odit quaerat quasi quidem tenetur totam."}/>
];

export const Slider = () => (
    <StyledSlider>
        <AliceCarousel
            mouseTracking
            disableButtonsControls={true}
            items={items}
        />
    </StyledSlider>
);

const StyledSlider = styled.div`
  border: 1px solid ${Theme.colors.secondary};
  max-width: 700px;
  width: 100%;
`
