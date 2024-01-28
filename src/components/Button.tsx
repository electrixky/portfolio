import styled from "styled-components";
import {Theme} from "../styles/Theme";

type ButtonType = {
    color?: string,
    background?: string,
    border?: string,
    marginBottom?: string,
}

export const Button = styled.button<ButtonType>`
  color: ${props => props.color || "#000"};
  background-color: ${props => props.background || "#fff"};
  border: ${props => props.border || "none"};
  border-radius: 10px;
  padding: 15px 40px;
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: ${props => props.marginBottom || "1rem"};
`