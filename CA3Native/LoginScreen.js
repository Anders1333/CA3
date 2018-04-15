import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import facade from './LoginFacade';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {error: ""};
  }

  login = async (username, password) => {
    await facade.login(username, password);
    const bool = await facade.loggedIn();

    if (bool) {
      this.props.navigation.navigate('');
    }
    else {
      this.setState({
        error: "Could not login, try again.."
      });
    }

  }


  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View>
          <LoginForm login={this.login} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
})