import React from 'react';
import Icon from "../icon/Icon";
import styled from "styled-components";
import {Theme} from "../../styles/Theme";

export const Socials = () => {
    return (
        <StyledSocials>
            <SocialItem>
                <SocialLink href={"https://github.com/electrixky/"} target="_blank">
                    <Icon height={"40px"} width={"40px"} iconId={"github"} viewBox={"0 0 40 40"}/>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink>
                    <Icon height={"40px"} width={"40px"} iconId={"telegram"} viewBox={"0 0 40 40"}/>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink>
                    <Icon height={"40px"} width={"40px"} iconId={"github"} viewBox={"0 0 40 40"}/>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink>
                    <Icon height={"40px"} width={"40px"} iconId={"telegram"} viewBox={"0 0 40 40"}/>
                </SocialLink>
            </SocialItem>
        </StyledSocials>
    );
};


const StyledSocials = styled.ul`
  display: flex;
  gap: 10px;
`

const SocialItem = styled.li`

  &:not(:last-child) {
    margin-right: 10px;
  }
`

const SocialLink = styled.a`
  &:hover {
    color: ${Theme.colors.hoverColor};
  }
`