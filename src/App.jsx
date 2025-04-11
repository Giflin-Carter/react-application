import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Profilecard from './Profilecard';
import GridView from './GridView';
import Todo from './Todo';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from './store.js';
import{Provider} from 'react-redux';
import ProfileCard from './Profilecard';

const profilelist = {
  name: "Giflin Carter",
  department: "AIDS",
  year: 2,
  mobile: 9677534367,
  address: "xxxx",
  profileImage: reactLogo,
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/todo" element={<Todo />} /> */}
        <Route path="/Profilecard" element={<ProfileCard profile={profilelist}/>
} />
        <Route path="/gridview" element={<GridView />} />

        <Route path="/todo" element={ <Provider store={store}> <Todo/></Provider> }/>

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;