import styled from "styled-components";
import {Theme} from "../styles/Theme";

type SectionTitleType = {
    marginBottom?: string
}
export const SectionTitle = styled.h2<SectionTitleType>`
  color: ${Theme.colors.secondary};
  text-align: center;
  font-size: 2rem;
  margin-bottom: ${props => props.marginBottom};
`