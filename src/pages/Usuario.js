import { useParams } from "react-router";
import styled from "styled-components";

const Usuario = styled.h1`

`

const User = ()=>{
// username es una variable que va adquirir la propiedad y valor del objeto useParams, este objeto es el parametro que se está pasando en la url
// por ejemplo en el Route el path es el siguiente: localhost:3000/user/:username, el username es un parametro por los ":" que se antepone, eso quiere decir que 
// que si tenemos una url: localhost:3000/user/Alexander , username toma el valor de "Alexander". Este objeto "useParams" toma solo una propiedad con su valor, pero puede 
//tomar más de una propiedad con su respectivo valor como por ejm: localhost:3000/user/:username/:edad , esto quiere decir que ´puede existir una url :localhost:3000/user/Alexander/32
    let {username} = useParams()

    return(
        <Usuario>Bienvenido <b>{username}</b></Usuario>        
    )
}
 export{User}