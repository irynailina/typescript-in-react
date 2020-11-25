import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar";
import TodosPage from "./pages/TodosPage";
import InfoPage from "./pages/InfoPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container maxWidth="md">
        <Switch>
          <Route component={TodosPage} path="/" exact/>
          <Route component={InfoPage} path="/info"/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}; 

export default App;
