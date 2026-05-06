import React, { memo, useCallback } from 'react';
import {
  View,
  Text,
  Pressable,
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

// Pre-compute SVG path at module level (never changes)
const TAB_BAR_PATH = (() => {
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
})();

const SVG_HEIGHT = TOTAL_HEIGHT + CURVE_HEIGHT;

type TabItemProps = {
  tab: TabItem;
  isActive: boolean;
  onTabPress: (key: string) => void;
};

const TabItemButton = memo(function TabItemButton({ tab, isActive, onTabPress }: TabItemProps) {
  const handlePress = useCallback(() => {
    onTabPress(tab.key);
  }, [onTabPress, tab.key]);

  return (
    <Pressable
      key={tab.key}
      style={styles.tabItem}
      onPress={handlePress}>
      <Image
        source={tab.icon}
        style={isActive ? styles.tabIconImageActive : styles.tabIconImage}
        resizeMode="contain"
      />
      <Text style={isActive ? styles.tabLabelActive : styles.tabLabel}>
        {tab.label}
      </Text>
    </Pressable>
  );
});

type CenterButtonProps = {
  tab: TabItem;
  onTabPress: (key: string) => void;
};

const CenterButton = memo(function CenterButton({ tab, onTabPress }: CenterButtonProps) {
  const handlePress = useCallback(() => {
    onTabPress(tab.key);
  }, [onTabPress, tab.key]);

  return (
    <Pressable
      style={styles.centerButton}
      onPress={handlePress}>
      <View style={styles.centerCircle}>
        <Image source={tab.icon} style={styles.centerLogo} resizeMode="contain" />
      </View>
    </Pressable>
  );
});

type CustomTabBarProps = {
  activeTab: string;
  onTabPress: (key: string) => void;
};

const CustomTabBar = memo(function CustomTabBar({ activeTab, onTabPress }: CustomTabBarProps) {
  return (
    <View style={styles.container}>
      <Svg
        width={SCREEN_WIDTH}
        height={SVG_HEIGHT}
        style={styles.svgBackground}>
        <Path d={TAB_BAR_PATH} fill="rgb(29, 48, 117)" />
      </Svg>
      <View style={styles.tabRow}>
        {tabs.map((tab) => {
          if (tab.key === 'home') {
            return (
              <CenterButton key={tab.key} tab={tab} onTabPress={onTabPress} />
            );
          }

          return (
            <TabItemButton
              key={tab.key}
              tab={tab}
              isActive={activeTab === tab.key}
              onTabPress={onTabPress}
            />
          );
        })}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: SVG_HEIGHT,
  },
  svgBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.16)',
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
    width: 16,
    height: 16,
    tintColor: 'rgb(255, 237, 0)',
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
  },
  tabLabelActive: {
    fontSize: 10,
    fontWeight: '600',
    color: 'rgb(255, 237, 0)',
    textAlign: 'center',
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
    borderCurve: 'continuous',
    backgroundColor: 'rgb(255, 237, 0)',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.25)',
  },
  centerLogo: {
    width: 48,
    height: 48,
  },
});

export default CustomTabBar;
