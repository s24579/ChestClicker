import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Rp from './Rp';
import Content from './Content';
import Header from './Header';
import Footer from './Footer'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header></Header>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080c14',
  },
  content:{
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  text:{
    color: "#cdbe91",
    
  },
  footer:{
    paddingTop: 10,
    bottom: 0,
  },
  footertext:{
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    color: "#cdbe91",
  },

});
