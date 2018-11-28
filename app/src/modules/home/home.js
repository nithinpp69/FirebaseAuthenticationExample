import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from 'react-native';
import firebase from 'react-native-firebase';

const { width, height } = Dimensions.get('window');

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  componentDidMount() {
    this.setState({ username : firebase.auth().currentUser.email })
  }

  signoutuser() {
    firebase.auth().signOut()
      .then(() => this.props.navigation.navigate('Authentication'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    let { username } = this.state
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle="dark-content"
        />
        <Text style={styles.welcome}>Hi {username}</Text>
        <TouchableOpacity style={[styles.button]}
          activeOpacity={0.7}
          onPress={() => this.signoutuser()}
        >
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});
