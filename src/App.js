import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom'
import Form from './Form'
import Home from './Home'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/pizza'>
          <Form />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>

  );
};
export default App;