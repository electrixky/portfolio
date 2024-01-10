import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper align={"center"}>
                <Logo/>
                <Name>Tanya Tkachuk</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"20px"} iconId={"github"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"20px"} iconId={"telegram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"20px"} iconId={"github"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"20px"} iconId={"telegram"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
            </FlexWrapper>
            <Copyright>2024 Tetiana Tkachuk, All Rights Reserved</Copyright>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
  background-color: #6051a1;
  min-height: 20vh;
`
const Name = styled.h5`

`
const SocialList = styled.ul`
  display: flex;
  gap: 10px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Copyright = styled.small`
  display: block;
  max-width: 80vw;
  margin: 0 auto;
  text-align: center;
`