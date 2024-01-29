import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "../../components/menu/MobileMenu";
import {S} from './Header_Styles'

const items = ["Home", "Skills", "Projects", "Testimony", "Contact"]
export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Logo/>
                    <div>
                        <FlexWrapper gap={"30px"} align={"center"}>
                            <Menu menuItems={items}/>
                            <MobileMenu menuItems={items}/>
                            <S.IconWrapper>
                                <Icon iconId={"mode"} height={"30"} width={"30"} viewBox={"0 0 30 30"}/>
                                <Icon iconId={"lang"} height={"30"} width={"30"} viewBox={"0 0 30 30"}/>
                            </S.IconWrapper>
                        </FlexWrapper>
                    </div>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};


