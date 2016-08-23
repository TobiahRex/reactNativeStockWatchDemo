import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';


export default class StockWatch extends React.Component {

  constructor(props, context){
    super(props, context);


  }

  render(){
    let stockWatchTitle = 'Stock Watch';
    return (
      <View style={styles.container}>
        <Image style={styles.logo}
          source={require('image!stockMarket')}></Image>
        <Text style={styles.heading}>{stockWatchTitle}</Text>
        <TextInput style={styles.input}
          placeholder='Ticker or Company Name'></TextInput>
        <TouchableHighlight style={styles.button}></TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: #D08522,
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 50,
  }
  heading: {
    fontSize: 30,
    marginTop: 10,
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    borderWidth: 1,
    borderColor: #FFFFFF,
  },
  button: {
    height: 50,
    backgroundColor: #5ED43B,
    alignSelf: 'stretch',
    margintTop: 10,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: #070614,
    alignSelf: 'center',
  }
})
