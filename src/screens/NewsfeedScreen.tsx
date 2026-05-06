import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function NewsfeedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Newsfeed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a1128',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default NewsfeedScreen;
