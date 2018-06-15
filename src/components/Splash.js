import React, { Component } from 'react';
import { AsyncStorage, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { setHeaders } from '../actions/'

class Splash extends Component {

  componentWillMount() {
    console.log('splash');

    AsyncStorage.getAllKeys().then((response) => {
      console.log('keys ', response);
    })

    /* const resolvedPromisesArray = [
      AsyncStorage.getItem('isAuth')
    ];
    let token = await Promise.race(resolvedPromisesArray);
    console.log('oi', token); */

    AsyncStorage.getItem('loginData')
      .then(response => {
        console.log('async resposne app', response);
        // this.setState({ loggedIn: true });

        if (response) {
          setHeaders(response);
          Actions.main();
        } else {
          Actions.auth();
        }
      })
      .catch(error => {
        console.log('async error app', error);
      })

    /* setTimeout(() => {
      Actions.auth();
    }, 200); */


  }

  render() {
    return (
      <View>
        <Text>
          espera ai
        </Text>
      </View>
    );
  }
}

export default Splash;