import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";

type ProjectPropsType = {
    title: string
    text: string
    src?: string
}
export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <FlexWrapper direction={"column"} gap={"20px"}>
                <ImageWrapper>
                    <Image src={props.src} alt=""/>
                    <Button>View project</Button>
                </ImageWrapper>
                <Title>{props.title}</Title>
                <Description>{props.text}</Description>
                <FlexWrapper justify={"space-evenly"}>
                    <Link>View</Link>
                    <Link>Github Repo</Link>
                </FlexWrapper>
            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  max-width: 300px;
`

const ImageWrapper = styled.div`
  position: relative;

  &:hover {

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }

    ${Button} {
      opacity: 1;
    }
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const Image = styled.img`
  height: 250px;
  object-fit: cover;
  width: 100%;
`

const Title = styled.h3`
  text-align: center;
`

const Description = styled.p`
  text-align: justify;
`


const Link = styled.a`
  padding: 10px;
  border: 1px solid ${Theme.colors.secondary};
  border-radius: 5px;

  &:hover {
    color: ${Theme.colors.primary};
    background-color: ${Theme.colors.secondary};
  }
`