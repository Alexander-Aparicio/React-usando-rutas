import { Link, Route, Switch, useRouteMatch} from "react-router-dom";
import styled from "styled-components";
import { Css } from "./Css";
import { Javascript } from "./Javascript";

const Article = styled.article`
margin:25px;
`
const Enlace = styled.li`
font-size:1.8rem;
color:var(--cLinkM);
`
const List = styled.ul`
margin:25px;
`

const Tecnologias = ()=>{
    
    const {path,url} = useRouteMatch()

    return(
        <Article>
            <h1>Tecnologías de desarrollo web</h1>
            <List>
                <Enlace><Link className="enlaceMenu" to={`${url}/Javascript`}>Javascript</Link></Enlace>
                <Enlace><Link className="enlaceMenu" to={`${url}/Css`}>Css</Link></Enlace>
            </List>
            <Switch>
                <Route exact path={`${path}/Javascript`} component={Javascript} />
                {/* Al usar parametro(/:tema) cualquier url que sea distintaa javascript adoptara la page CSS cuyo titulo depende de este parametro  */}
                <Route exact path={`${path}/:tema`} component={Css} />
            </Switch>
        </Article>
    )
}

export{Tecnologias}