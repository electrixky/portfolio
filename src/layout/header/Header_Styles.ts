import styled from "styled-components";
import {Theme} from "../../styles/Theme";

const Header = styled.header`
  color: ${Theme.colors.secondary};
  font-size: 20px;
  padding: 20px;
`

const IconWrapper = styled.div`
  display: flex;
  gap: 20px;
  
  @media ${Theme.media.tablet} {
    margin-right: 40px;
  }
`

export const S = {
    Header,
    IconWrapper
}