import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {text: ''}
  }

  render() {
    console.log('render')
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <TextInput
          style={{height: 40}}
          placeholder='Type here to translate!'
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '💪').join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
