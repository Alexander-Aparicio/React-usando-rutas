import styled from "styled-components"
import { MenuTop } from "./MenuTop"
// import logo from './logo.svg';

const MyHeader = styled.header`
background:#fff4;
height:60px;
padding-left:5%;
padding-right:5%;
position: sticky;
top:0;
justify-content: space-between;
` 

const Header = ()=>{
    return(
        <MyHeader className="flex">
            <p>Aprendiendo React Router</p>
            <MenuTop/>
        </MyHeader>
    )
}

export{Header}