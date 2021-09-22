import styled from "styled-components";
import { useLocation } from "react-router";
import { useHistory } from "react-router";

const Producto = styled.p`
color:#fff;
`

const Productos = ()=>{
    // let location = useLocation()
    // console.log(location)
    // useLocation es un objeto con diferentes propiedades como search que  contiene los parametros
    // Para construir un a url del tipo: http://localhost:3000/productos?inicio=1&fin=20
    // location será: {pathname:"/productos", search:"?inicio=1&fin=20", hash:"",state:undefined}

    let {search} = useLocation()
    // Creamos un nuevo objeto del tipo URLSearchParams para serializar los parametros
    let query = new URLSearchParams(search)
    // console.log(query) = URLSearchParams{} Este objeto tiene varios métodos entre ellos get que nos servirá para extraer los parametros
    let LIMIT = 20
    let start = parseInt(query.get("inicio")) || 1
    let end = parseInt(query.get("fin")) || LIMIT
    // console.log(start,end) =  1 y 20
    let history = useHistory()
    // console.log(history)= es un objeto con varios metodos del cual usamos el push para cambiar los valores de los parametros search

    
    const handlePrev = ()=>{
        history.push({search:`?inicio=${start-LIMIT}&fin=${end-LIMIT}`})
    }

    const handleNext = ()=>{
        history.push({search:`?inicio=${start+LIMIT}&fin=${end+LIMIT}`})
    }

    return(
        <Producto>
            <h1>Productos</h1>
            <p>Productos de <b>{start}</b> a <b>{end}</b></p>
            {start > LIMIT && <button onClick={handlePrev}>Atrás</button>}
            <button onClick={handleNext}>Adelante</button>   
        </Producto>
    )
}
export{Productos}