import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAppTheme } from '../hooks/useAppTheme';

const HomeScreen = memo(function HomeScreen() {
  const { colors, spacing, fontSize } = useAppTheme();
  const { t } = useTranslation();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text, fontSize: fontSize['2xl'] }]}>
        {t('home.welcome')}
      </Text>
      <Text
        style={[
          styles.subtitle,
          { color: colors.textSecondary, fontSize: fontSize.md, marginTop: spacing.sm },
        ]}>
        {t('home.subtitle')}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
  },
  subtitle: {
    fontWeight: '400',
  },
});

export default HomeScreen;
