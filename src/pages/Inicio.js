import styled from "styled-components";
import avatar from "../assets/avatar.png"

const Home = styled.article`
padding:35px 5%;
display:grid;
grid-template-comlumns:1fr 1fr;
align-items:center;
`
const Title = styled.h1`
grid-column:1/3;
grid-row:1/2;
font-size:35px;
`

const Avatar = styled.img`
width:60%;
margin-top:20px;
grid-row:2/3
grid-column:1/2;
justify-self: center;
`
const Presentation = styled.p`
width:90%;
font-size:18px;
margin-top:20px;
grid-row:2/3;
grid-column:2/3;
`

const Inicio = ()=>{
    return(
        <Home>
        <Title>Mi sitio web hecho con REACT</Title>
        <Avatar src={avatar} alt={'logo'}/>
        <Presentation>
        Hola soy Alexander Aparicio 🙂.<br/>
        Me interesa la programación y SEO 🤩.<br/>
        Actualmente estoy formandome para ser un crack en el Front end y luego pasar al Back end 🗃️.<br/>
        Los lenguajes en los que quiero ser un crack son Javascript, Typescript y Python 🧰.<br/>
        Me gusta ver You tube o escuchar Spotify sobre temas de SEO 🚀 y desarrollo web.💻<br/>
        Ya vengo desarrollando webs en CMS como wordPress.
        </Presentation>
        </Home>
    )
}

export{Inicio}