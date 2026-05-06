import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
  ImageSourcePropType,
  Dimensions,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

type TabItem = {
  key: string;
  label: string;
  icon: ImageSourcePropType;
};

const tabs: TabItem[] = [
  { key: 'newsfeed', label: 'Newsfeed', icon: require('../assets/icons/newsfeed.png') },
  { key: 'maclar', label: 'Maçlar', icon: require('../assets/icons/maclar.png') },
  { key: 'home', label: '', icon: require('../assets/icons/logo.png') },
  { key: 'haberler', label: 'Haberler', icon: require('../assets/icons/haberler.png') },
  { key: 'diger', label: 'Diğer', icon: require('../assets/icons/diger.png') },
];

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const TAB_BAR_HEIGHT = 66;
const CENTER_BUTTON_SIZE = 64;
const CURVE_HEIGHT = CENTER_BUTTON_SIZE / 2;
const BOTTOM_PADDING = Platform.OS === 'ios' ? 20 : 0;
const TOTAL_HEIGHT = TAB_BAR_HEIGHT + BOTTOM_PADDING;

function getTabBarPath(): string {
  const centerX = SCREEN_WIDTH / 2;
  const curveRadius = CENTER_BUTTON_SIZE / 2;

  return [
    `M 0 ${CURVE_HEIGHT}`,
    `L ${centerX - curveRadius * 1.5} ${CURVE_HEIGHT}`,
    `C ${centerX - 30} ${CURVE_HEIGHT} ${centerX - 35} 0 ${centerX} 0`,
    `C ${centerX + 35} 0 ${centerX + 30} ${CURVE_HEIGHT} ${centerX + curveRadius * 1.5} ${CURVE_HEIGHT}`,
    `L ${SCREEN_WIDTH} ${CURVE_HEIGHT}`,
    `L ${SCREEN_WIDTH} ${TOTAL_HEIGHT + CURVE_HEIGHT}`,
    `L 0 ${TOTAL_HEIGHT + CURVE_HEIGHT}`,
    'Z',
  ].join(' ');
}

type CustomTabBarProps = {
  activeTab: string;
  onTabPress: (key: string) => void;
};

function CustomTabBar({ activeTab, onTabPress }: CustomTabBarProps) {
  return (
    <View style={styles.container}>
      <Svg
        width={SCREEN_WIDTH}
        height={TOTAL_HEIGHT + CURVE_HEIGHT}
        style={styles.svgBackground}>
        <Path d={getTabBarPath()} fill="rgb(29, 48, 117)" />
      </Svg>
      <View style={styles.tabRow}>
        {tabs.map((tab) => {
          if (tab.key === 'home') {
            return (
              <TouchableOpacity
                key={tab.key}
                style={styles.centerButton}
                onPress={() => onTabPress(tab.key)}
                activeOpacity={0.8}>
                <View style={styles.centerCircle}>
                  <Image source={tab.icon} style={styles.centerLogo} resizeMode="contain" />
                </View>
              </TouchableOpacity>
            );
          }

          const isActive = activeTab === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              style={styles.tabItem}
              onPress={() => onTabPress(tab.key)}
              activeOpacity={0.7}>
              <Image
                source={tab.icon}
                style={[
                  styles.tabIconImage,
                  isActive && styles.tabIconImageActive,
                ]}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.tabLabel,
                  isActive && styles.tabLabelActive,
                ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: TOTAL_HEIGHT + CURVE_HEIGHT,
  },
  svgBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.16,
    shadowRadius: 4,
    elevation: 8,
  },
  tabRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: TAB_BAR_HEIGHT,
    position: 'absolute',
    bottom: BOTTOM_PADDING,
    left: 0,
    right: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  tabIconImage: {
    width: 16,
    height: 16,
    tintColor: 'rgb(255, 255, 255)',
    marginBottom: 4,
  },
  tabIconImageActive: {
    tintColor: 'rgb(255, 237, 0)',
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
  },
  tabLabelActive: {
    color: 'rgb(255, 237, 0)',
  },
  centerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -18,
  },
  centerCircle: {
    width: CENTER_BUTTON_SIZE,
    height: CENTER_BUTTON_SIZE,
    borderRadius: CENTER_BUTTON_SIZE / 2,
    backgroundColor: 'rgb(255, 237, 0)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },
  centerLogo: {
    width: 48,
    height: 48,
  },
});

export default CustomTabBar;
