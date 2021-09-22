import styled from "styled-components";
const NotFound = styled.article`
justify-content: center;
color:#fff; 
height:90vh;
`
const MsjError = styled.h1`
font-size:50px;
`

const Error404 = ()=>{

    return(
        <NotFound className="flex">
            <MsjError>Error 404</MsjError>
        </NotFound>
    )
}

export {Error404}