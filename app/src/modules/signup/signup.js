import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from 'react-native';
import firebase from 'react-native-firebase';

const { width, height } = Dimensions.get('window');

export default class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  signupUser(email, password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('ApplicationHome'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle="dark-content"
        />
        <Text style={styles.text}>Sign Up</Text>
        <TextInput
          onChangeText={(email) => this.setState({ email })}
          placeholder={'email'}
          underlineColorAndroid='#ecf0f1'
          placeholderTextColor='#b2bec3'
          value={this.state.email}
          multiline={false}
          style={styles.input}
        />
        <TextInput
          onChangeText={(password) => this.setState({ password })}
          placeholder={'password'}
          secureTextEntry={true}
          underlineColorAndroid='#ecf0f1'
          placeholderTextColor='#b2bec3'
          value={this.state.password}
          multiline={false}
          style={styles.input}
        />
        <TouchableOpacity style={[styles.button]}
          activeOpacity={0.7}
          onPress={() => this.signupUser(this.state.email, this.state.password)}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.loginView}>
          <Text style={styles.info}>Already have an account?</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <Text style={styles.loginlink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: width / 18,
    textAlign: 'center',
    margin: 10,
    color: '#8e44ad',
    fontWeight: 'bold'
  },
  input: {
    paddingLeft: 18,
    width: width - 50,
    textAlign: 'justify',
    marginTop: width * 0.08
  },
  button: {
    marginTop: 25,
    width: width - 50,
    height: width * 0.12,
    backgroundColor: "#8e44ad",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: width / 23,
    fontWeight: '400',
    color: 'white'
  },
  loginView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  info: {
    fontSize: width / 24,
    textAlign: 'center',
    margin: 10,
  },
  loginlink: {
    fontSize: width / 22,
    margin: 10,
    color: '#8e44ad',
    fontWeight: '300'
  }
});
