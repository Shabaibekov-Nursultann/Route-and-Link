import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Todos } from "./pages/Todos";
import { Login } from "./pages/Login";
import { About } from "./pages/About";
import {Contacts} from './pages/Contacts'
import { Employees } from "./pages/Employees";
import { Home } from "./pages/Home";
import { TodoFetch } from "./pages/TodoFetch";


function App() {
  return (
    // окружение для переключения
    <Router>
      {/* переключaение страниц */}
      <Switch>
        {/* Route = страницы */}
        {/* component =  компонент */}
      
        <Route path="/todos" component={Todos} />
        <Route path="/login" component={Login} />
        <Route path='/about' component={About}/>
        <Route path='/contacts' component={Contacts}/>
        <Route path='/employees' component={Employees} />
        <Route path="/todosfetch" component={TodoFetch} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
