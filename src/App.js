import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom'
import Form from './Form'
import Home from './Home'
import * as yup from 'yup'
import formSchema from './validation/FormSchema'

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  olives: false,
  pineapple: false,
  bacon: false,
  instructions: ''
}

const initialFormErrors = {
  name: '',
  size: ''
}

const initialOrders = []

const App = () => {

  //State//
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const addOrder = newOrder => {
    setOrders(newOrder)
    setFormValues(initialFormValues)
    console.log(newOrder)

  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      [name]: isChecked 
    })
  }

  const submit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      olives: formValues.olives,
      pineapple: formValues.pineapple,
      bacon: formValues.bacon,
      instructions: formValues.instructions
    }

    addOrder(newOrder)
  }

  return (
    <div>
      <header>
        <Link to='/'>
          <h1>Lambda Eats</h1>
        </Link>
      </header>
      <Switch>
        <Route path='/pizza'>
          <Form 
          values={formValues}
          submit={submit}
          inputChange={inputChange}
          checkboxChange={checkboxChange}
          formErrors={formErrors}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>

  );
};
export default App;