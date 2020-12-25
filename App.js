import { StatusBar } from 'expo-status-bar';
import react from 'react';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import NavControl from './navigationController.js'
import Header from './Header.js'
export default function App() {
  return (
    <View >
      <View>
      <Header/>
      </View>
      <NavControl />
      
    </View>
  );
}


// return(
//   <View style={styles.container}>
//   <Image
//     style={styles.tinyLogo}
//     source={require('./leftArrow.jpg')}
//   />
//   <Image
//     style={styles.tinyLogo}
//     source={{
//       uri: 'https://reactnative.dev/img/tiny_logo.png',
//     }}
//   />
//   <Image
//     style={styles.logo}
//     source={{
//       uri:
//         'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
//     }}
//   />
// </View>
// );
//}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

