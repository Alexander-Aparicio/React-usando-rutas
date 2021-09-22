import { Route } from "react-router";
import { Redirect } from "react-router-dom";

// const PrivateRoute = (props)=>{
//     return(
//         <Route exact={props.exact} path={props.path} component={props.component} />
//     )
// }
// Es igual a:
// const PrivateRoute = (props)=>{
//     return(
//         <Route {...props} />
//     )
// }
// Simulación de login
let auth =true
auth = null

const PrivateRoute = ({component:Component, ...rest})=>{

    return(
    <Route {...rest}>{auth? <Component/> : <Redirect to="/login"/>}</Route>
    )
}

export{PrivateRoute}