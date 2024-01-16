import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contact} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <StyledApp className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Testimony/>
            <Contact/>
            <Footer/>
        </StyledApp>
    );
}

const StyledApp = styled.div`
  background-color: #000;
  color: #fff;
`
export default App;