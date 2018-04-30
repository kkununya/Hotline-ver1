import React, { Component } from 'react';
import Header from '../src/components/Header';
import DetailListContainer from '../src/components/DetailListContainer';
import Search from '../src/components/Search'
// import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

class App extends Component {
  constructor(props){super(props);
    var config = {
    apiKey: "AIzaSyAdNphtu-NlLb7czBDR5XwtUuB_4OguPtA",
    authDomain: "hotline-e8448.firebaseapp.com",
    databaseURL: "https://hotline-e8448.firebaseio.com",
    projectId: "hotline-e8448",
    storageBucket: "hotline-e8448.appspot.com",
    messagingSenderId: "530332589266"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div className="container">
       <Header title="Simple Firebase App" />
       <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
          <DetailListContainer db={firebase} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
