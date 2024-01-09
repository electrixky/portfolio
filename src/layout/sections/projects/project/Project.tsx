import React from 'react';
import styled from "styled-components";

type ProjectPropsType = {
    title: string
    text: string
    src?: string
}
export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Description>{props.text}</Description>
            <Link >View</Link>
            <Link>Github Repo</Link>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  max-width: 300px;
`

const Image = styled.img`
  height: 250px;
  object-fit: cover;
`

const Title = styled.h3`

`

const Description = styled.p`

`

const Link = styled.a`

`