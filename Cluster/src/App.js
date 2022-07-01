import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { useFonts } from 'expo-font';
import { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';


export default function App() {
  const pulseAnimRef = useRef();
  return (
    <View style={styles.container}>
    <Text 
      style={{
        fontStyle: 'italic', 
        marginTop: 10,
        fontSize: 16,
      }}
      >
    Cluster is the second app.
    </Text>
    <Animatable.View ref={pulseAnimRef}>
    <TouchableOpacity
      style={[styles.animButton, { backgroundColor:'#1289A7'}]}
      onPress={() => {
        pulseAnimRef.current.pulse(800);
      }}
      >
      <text
      style={styles.animButtonText}>Kmeans</text>
    </TouchableOpacity>
    </Animatable.View>
    <StatusBar style="auto" />
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animButton: {
    backgroundColor: '#0652DD',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  animButtonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18
  }
});

