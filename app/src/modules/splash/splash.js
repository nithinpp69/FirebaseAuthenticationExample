  import React, { Component } from 'react';
  import {
    StatusBar,
    Platform,
    StyleSheet,
    Text,
    View,
    ActivityIndicator
  } from 'react-native';
  import firebase from 'react-native-firebase';

  export default class Splash extends Component {
    
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'ApplicationHome' : 'Authentication')
      })
    }

    render() {
      return (
        <View style={styles.container}>
          <StatusBar
            backgroundColor={'transparent'}
            barStyle="dark-content"
          />
          <Text style={styles.text}>Firebase Authentication</Text>
          <ActivityIndicator size="large" color="#8e44ad" />
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
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#000000'
    }
  });
