import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomTabBar from './src/components/CustomTabBar';
import NewsfeedScreen from './src/screens/NewsfeedScreen';
import MaclarScreen from './src/screens/MaclarScreen';
import HomeScreen from './src/screens/HomeScreen';
import HaberlerScreen from './src/screens/HaberlerScreen';
import DigerScreen from './src/screens/DigerScreen';

function App() {
  const [activeTab, setActiveTab] = useState('diger');

  const renderScreen = () => {
    switch (activeTab) {
      case 'newsfeed':
        return <NewsfeedScreen />;
      case 'maclar':
        return <MaclarScreen />;
      case 'home':
        return <HomeScreen />;
      case 'haberler':
        return <HaberlerScreen />;
      case 'diger':
        return <DigerScreen />;
      default:
        return <NewsfeedScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      <CustomTabBar activeTab={activeTab} onTabPress={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1128',
  },
});

export default App;
