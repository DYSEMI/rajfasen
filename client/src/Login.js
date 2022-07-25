import React, { Component, useEffect, useState } from 'react';
import { InputGroup, Form, Button } from 'bootstrap-4-react';

import './login.css';

function App() {
  return (
    <div id='container'>
      <form action="/post" method="post" className="form">
      <h1>Bejelentkezés</h1>

      <InputGroup mb="3">
        <InputGroup.PrependText>Felhasználónév</InputGroup.PrependText>
        <Form.Input type="text" />
      </InputGroup>
      
      <InputGroup mb="3">
        <InputGroup.PrependText>Jelszó</InputGroup.PrependText>
        <Form.Input type="password" />
      </InputGroup>
      <h6><Form.Checkbox aria-label="Checkbox for following text input" />elfogadom a szabályzatot</h6>
      
       
      

         <a href='./register.js'>nincs még fiókom</a>
         <Button primary type="submit" >Belépés</Button>
        </form>

    </div>
  )

}


export default App;
