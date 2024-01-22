import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle marginBottom={"80px"}>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={"Name"}/>
                    <Field placeholder={"Email"}/>
                    <Field placeholder={"Message"} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};


const StyledContacts = styled.section`
    ${Button} {
      margin-top: 30px;
      margin-bottom: 50px;
    }
`

const StyledForm = styled.form`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  
  textarea {
    resize: none;
    display: block;
    height: 100px;
  }
`

const Field = styled.input`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid ${Theme.colors.borderColor};
  padding: 7px 15px;
  color: ${Theme.colors.secondary};
  font-family: Inter, sans-serif;
  font-size: 16px;
  
  &::placeholder {
    color: ${Theme.colors.placeholderColor};
  }
  
  &:focus-visible {
    outline: 1px solid ${Theme.colors.borderColor};
  }
`