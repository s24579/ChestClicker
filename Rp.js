import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class Rp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={`${this.state.counter}`}
          style={styles.button}
          onPress={() => this.setState({counter: this.state.counter + 1})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  button: {
    color: 'white',
    backgroundColor: 'blue',
  },
});

export default Rp;
