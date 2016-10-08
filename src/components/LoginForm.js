import React, { Component } from 'react'
import { Text } from 'react-native'
import { Button, Card, CardSection, Input } from './common'
import firebase from 'firebase'

class LoginForm extends Component {
  state = { email: ' ', password: ' ', error: ' ' }

  onButtonPress() {
    debugger;
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        //attempt to create account
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            //if cannot create throw Error
            this.setState({ error: "Cannot create account" })
          })
      })
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email:'
            placeholder='user@gmail.com'
            autoCorrect={false}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            label='Password:'
            placeholder='password'
            secureTextEntry={true}
            autoCorrect={false}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress}>Login</Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}
export { LoginForm }
