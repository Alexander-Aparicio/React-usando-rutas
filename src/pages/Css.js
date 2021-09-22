import { useParams } from "react-router-dom"
import styled from "styled-components"

const Article = styled.article`

`

const Css = ()=>{
    let parametro = useParams()
    console.log(parametro)
    return(
        <Article>
            <h2>{parametro.tema}</h2>
            <p>
                aLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quos modi accusamus veniam, odio velit obcaecati vel corrupti adipisci dignissimos, totam fugit? Dolorum rerum, sit veniam eaque ab consequatur provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos praesentium architecto, dolore dolor minima molestiae quia. Quas inventore dolor ut sapiente quos! Architecto porro pariatur nesciunt qui labore voluptatem. Sint.
            </p>
        </Article>
    )
}

export{Css}