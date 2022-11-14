import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/eu.jpg')} style={styles.logo}/>
      <Text style={styles.titulo}>Olá, me chamo Matheus!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001833',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  titulo:{
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    color:'#fff',
    fontSize: 20,
    padding: 20
  },
  logo:{
    width: 200,
    height:200,
    borderRadius: 100
  }
});
