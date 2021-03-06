import * as React from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To Ubudget </Text>
     <Text style={styles.title}> Keep Track of your Monthly Expenses</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}> Select the add expense Tab or see expenses</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  accesContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
    },

    accesButtons:{
      margin: 15,
      backgroundColor: 'gray',
      padding: 5,
      borderRadius: 5,

    }
});
