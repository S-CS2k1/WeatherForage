import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/home';
import Search from './components/Search/search';
import axios from 'axios';

function App() {

  const [l, setL] = useState(false);
  const [disLogin, setDisLogin] = useState("Login");
  const [home, setHome] = useState(true);
  const [search, setSearch] = useState(false);
  const [cookie, setCookie] = useState("none");

  const getToken = (t, n)=>{
    if(t === ""){
      setL(true);
      setHome(false);
      setSearch(false);
      setDisLogin("Login");
    }else{
      console.log(n);
      setCookie(t);
      setL(false);
      setHome(true);
      setSearch(false);
      setDisLogin(n);
    }

  }

  const Auth = async ()=>{
        const res = await axios({
            method : "post",
            url : "/auth",
            headers : {
                token : `${cookie}`
            }
        })
        return res.data.auth;
  }

  const toLogin = ()=>{
    setL(true);
    setHome(false);
    setSearch(false);
  }

  const toHome = ()=>{
    setHome(true);
    setL(false);
    setSearch(false);
  }

  const toSearch = async ()=>{
    const identify = await Auth();
    console.log(identify);
    if(identify){
      setL(false);
      setHome(false);
      setSearch(true);
    }else{
      setL(true);
      setHome(false);
      setSearch(false);
    }
  }


  return (
    <>
      <div className="App">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cloud-fog2-fill" viewBox="0 0 16 16">
              <path d="M8.5 3a5.001 5.001 0 0 1 4.905 4.027A3 3 0 0 1 13 13h-1.5a.5.5 0 0 0 0-1H1.05a3.51 3.51 0 0 1-.713-1H9.5a.5.5 0 0 0 0-1H.035a3.53 3.53 0 0 1 0-1H7.5a.5.5 0 0 0 0-1H.337a3.5 3.5 0 0 1 3.57-1.977A5.001 5.001 0 0 1 8.5 3z"/>
            </svg>
            <h1>Weather Forage</h1>
          </div>
          <div className="nav">
            <a onClick={toHome}>Home</a>
            <a onClick={toSearch}>Search</a>
            <a onClick={toLogin}>{disLogin}</a>
          </div>
      </div>
      <Home home={home}/>
      <Login login={l} auth={Auth} sendToken={getToken}/>
      <Search search={search}/>
    </>
  );
}

export default App;
