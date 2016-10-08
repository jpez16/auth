import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'
import { Header } from './components/common'

class App extends Component {

  componentWillMount() {
    //firebase setup on app launch
    console.log('0')
    const config = {
        apiKey: "AIzaSyCCLibLKww1K_AA2litxH6qb_QxG5owLsY",
        authDomain: "auth-6597f.firebaseapp.com",
        databaseURL: "https://auth-6597f.firebaseio.com",
        storageBucket: "auth-6597f.appspot.com",
        messagingSenderId: "237968461508"
      };
      firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header>Authentication</Header>
        <LoginForm />
      </View>
    )
  }
}

export default App;
