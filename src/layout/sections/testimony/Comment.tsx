import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Comment = () => {
    return (
        <StyledComment>
            <FlexWrapper gap={"50px"} justify={"space-between"} align={"flex-start"}>
                <Author>John Doe</Author>
                <FlexWrapper direction={"column"} justify={"space-between"}>
                    <Title>Amazing work!</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae commodi culpa molestiae nihil odit quaerat quasi quidem tenetur totam.</Text>
                </FlexWrapper>
            </FlexWrapper>
        </StyledComment>
    );
};

const StyledComment = styled.div`
  max-width: 70%;
`

const Author = styled.span`

`

const Title = styled.h4`
  margin-bottom: 1rem;
`

const Text = styled.p`

`