import React, { useState, useCallback, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomTabBar from './src/components/CustomTabBar';
import NewsfeedScreen from './src/screens/NewsfeedScreen';
import MaclarScreen from './src/screens/MaclarScreen';
import HomeScreen from './src/screens/HomeScreen';
import HaberlerScreen from './src/screens/HaberlerScreen';
import DigerScreen from './src/screens/DigerScreen';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabPress = useCallback((key: string) => {
    setActiveTab(key);
  }, []);

  const screen = useMemo(() => {
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
        return <HomeScreen />;
    }
  }, [activeTab]);

  return (
    <View style={styles.container}>
      {screen}
      <CustomTabBar activeTab={activeTab} onTabPress={handleTabPress} />
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
