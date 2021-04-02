import logo from './HomeDelivery.png';
import search from './Search.png'
import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const App = () => {
  return(
    <div className="App">
      <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="100" />
          </a>
          
          <ul class="navbar-nav container-fluid">
            <div style={{display: "flex", width: "50%", justifyContent: "space-between"}}>
            <li class="nav-item">
              <a class="nav-link" href="#">Главная</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Акции</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Связь с нами</a>
            </li>
            <li class="nav-item">
              <div class="input-group">
                <input id = "SearchInput" type="text" class="form-control" placeholder="Поиск" width="1000px"/>
                <div class="input-group-append">
                  <button class="btn btn-light" type="button" id="SearchButton">
                    <img src={search} width="18"/>
                  </button>
                </div>
              </div>
            </li>
            </div>
            <div style={{display: "flex", width: "50%", justifyContent: "flex-end"}}>
              <li class="nav-item">
                  <a class="nav-link" href="#" id="signIn">Корзина</a>
              </li>
              <li>
                  <a class="nav-link" href="#" id="signIn">Войти</a>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;

/*
<div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li>
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-0" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </li>
            </ul>
          </div>
*/ 


/*<nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Брэнд</a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Ссылка 1 <span class="sr-only">(current)</span></a></li>
          <li><a href="#">Ссылка 2</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
              aria-expanded="false">Раздел 1 <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Ссылка 1.1</a></li>
              <li><a href="#">Ссылка 1.2</a></li>
              <li><a href="#">Ссылка 1.3</a></li>
            </ul>
          </li>
        </ul>
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search"/>
          </div>
          <button type="submit" class="btn btn-default">Найти</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">Ссылка 3</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
              aria-expanded="false">Раздел 2 <span class="caret"></span></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>*/
