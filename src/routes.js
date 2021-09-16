import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/login/Login";
import Register from "./components/register/register";


const Routes = () =>{
    <BrowserRouter>
    <Switch>
        <Route exact path = '/' component={Home}/>
        <Route exact path = '/Register' component={Register}/>
        <Route exact path = '/Login' component={Login}/>
    </Switch>
    </BrowserRouter>

}

export default Routes