import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {Theme} from "../../styles/Theme";
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "../../components/menu/MobileMenu";

const items = ["Home", "Skills", "Projects", "Testimony", "Contact"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Logo/>
                    <div>
                        <FlexWrapper gap={"30px"} align={"center"}>
                            <Menu menuItems={items}/>
                            <MobileMenu menuItems={items}/>
                            <Icon iconId={"mode"} height={"30"} width={"30"} viewBox={"0 0 30 30"}/>
                            <Icon iconId={"lang"} height={"30"} width={"30"} viewBox={"0 0 30 30"}/>
                        </FlexWrapper>
                    </div>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  color: ${Theme.colors.secondary};
  font-size: 20px;
  padding: 20px;
`