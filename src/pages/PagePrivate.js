import styled from "styled-components";

const PagePrivate = styled.div`
justify-content: center;
height: 80vh;
`

const Private = ()=>{

    return(
        <PagePrivate className="flex">
            <h1 className="flex">Página privada</h1>
        </PagePrivate>
    )
}

export{Private}