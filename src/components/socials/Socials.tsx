import React from 'react';
import Icon from "../icon/Icon";
import styled from "styled-components";

export const Socials = () => {
    return (
        <StyledSocials>
            <SocialItem>
                <SocialLink href={"https://github.com/electrixky/"} target="_blank">
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
        </StyledSocials>
    );
};


const StyledSocials = styled.ul`
  display: flex;
  gap: 10px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
  &:hover {
    cursor: pointer;
  }
`