import React from 'react';
import { Text, View, Platform, StatusBar, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';

/* Import Files */
import facade from "./package.json";
import LogIn from "./LoginScreen";


const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)


class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Home | Welcome' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Please login to proceed.</Text>
        <Touchable onPress={() => navigate('login')} title="Login" />
      </ScrollView>
    )
  }
}

class ProfilePage extends React.Component {
  static navigationOptions = { title: 'Home | Profile' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Hello</Text>
      </ScrollView>
    )
  }
}


export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  login: { screen: LogIn },
  profile: {screen: ProfilePage}
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#f44242'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})