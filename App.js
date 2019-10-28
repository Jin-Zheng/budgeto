import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

class Greetings extends Component {
  render(){
    return(
        <View style={{alignItems: 'center'}}>
          <Text>Hello {this.props.name}!</Text>
        </View>
    );
  }
}

export default class App extends Component {
  render() {
    let picture = {uri: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg'};
    return (
      <View style={styles.container}>
        <Text> HELLO WORLD Hi lia</Text>
        <Image source={picture} style={{height: 110, width: 193}}/>
        <Greetings name="Golden"/>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
