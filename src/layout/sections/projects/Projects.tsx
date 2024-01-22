import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import votingImage from "../../../assets/images/vote.webp"
import socialNetwork from "../../../assets/images/social_network.avif"
import {Container} from "../../../components/Container";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
            <SectionTitle marginBottom={"60px"}>Projects</SectionTitle>
            <FlexWrapper justify={"space-between"} align={"flex-start"}>
                <Project title={"Voting"} src={votingImage} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae commodi culpa molestiae nihil odit quaerat quasi quidem tenetur totam."}/>
                <Project title={"Social network"} src={socialNetwork} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae commodi culpa molestiae nihil odit quaerat quasi quidem tenetur totam."}/>
                <Project title={"Crypto wallet"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae commodi culpa molestiae nihil odit quaerat quasi quidem tenetur totam."}/>
            </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  min-height: 90vh;
  padding-top: 50px;
`
