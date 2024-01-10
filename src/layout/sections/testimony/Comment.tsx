import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Comment = () => {
    return (
        <StyledComment>
            <FlexWrapper gap={"30px"} justify={"flex-end"}>
                <div>
                    <Image/>
                    <Author>John Doe</Author>
                </div>
                <div>
                    <Rating/>
                    <Title>Amazing work!</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae commodi culpa molestiae nihil odit quaerat quasi quidem tenetur totam.</Text>
                </div>
            </FlexWrapper>
        </StyledComment>
    );
};

const StyledComment = styled.div`
  max-width: 70%;
`

const Image = styled.img`

`
const Author = styled.span`

`

const Rating = styled.div`

`

const Title = styled.h4`

`

const Text = styled.p`

`