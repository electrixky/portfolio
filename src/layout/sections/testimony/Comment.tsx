import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

type CommentPropsType = {
    title: string,
    text: string,
    userName: string
}
export const Comment = (props: CommentPropsType) => {
    return (
        <StyledComment>
            <FlexWrapper gap={"50px"} justify={"space-between"} align={"flex-start"}>
                <Author>{props.userName}</Author>
                <FlexWrapper direction={"column"} justify={"space-between"}>
                    <Title>{props.title}</Title>
                    <Text>{props.text}</Text>
                </FlexWrapper>
            </FlexWrapper>
        </StyledComment>
    );
};

const StyledComment = styled.div`
  
`

const Author = styled.span`

`

const Title = styled.h4`
  margin-bottom: 1rem;
`

const Text = styled.p`

`