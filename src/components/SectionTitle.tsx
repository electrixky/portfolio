import styled from "styled-components";
import {Theme} from "../styles/Theme";
import {font} from "../styles/Common";

type SectionTitleType = {
    marginBottom?: string
}
export const SectionTitle = styled.h2<SectionTitleType>`
  ${font({Fmax: 36, Fmin: 24, color: Theme.colors.secondary})}
  text-align: center;
  margin-bottom: ${props => props.marginBottom};
`