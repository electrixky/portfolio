import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Comment} from "./Comment";
import {Slider} from "../../../components/slider/Slider";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <Slider/>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  background-color: #eac97e;
  min-height: 60vh;
`