
import './App.css';
import './Sidebar.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Chatsarea from './Chatsarea';

import Sidebar from './Sidebar';
import { useState } from 'react';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {actionTypes} from './reducer';


function App() {
  
  const[{ user },dispatch]= useStateValue();


  return (
    <div className="App">
      {!user ? (
       <Login/>
      ) : (
        <div className="AppBox">
          <Router>

            <Routes>

              <Route path="/rooms/:roomId" element={<><Sidebar /><Chatsarea /></>} />
              <Route path="/" element={<><Sidebar /><Chatsarea /></>} />

            </Routes>

          </Router>
        




        </div>
        



      )
      }
      <p className="ayush">Made By <a className="ayushlink" href="https://novus-blogs.herokuapp.com/about">Ayush Gupta</a> for the Community</p>
      

     
    </div>
  );
}

export default App;
