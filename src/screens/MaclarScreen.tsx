import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MaclarScreen = memo(function MaclarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Maçlar</Text>
    </View>
  );
});

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

export default MaclarScreen;
