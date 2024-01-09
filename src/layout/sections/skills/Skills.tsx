import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Icon from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper>
                {/*<Icon iconId={}></Icon>*/}
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #5c80f1;
  min-height: 90vh;
`