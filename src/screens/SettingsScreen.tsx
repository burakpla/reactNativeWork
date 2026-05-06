import React, { memo, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAppTheme } from '../hooks/useAppTheme';
import { changeLanguage } from '../i18n';

type ThemeMode = 'system' | 'dark' | 'light';

const SettingsScreen = memo(function SettingsScreen() {
  const { colors, spacing, fontSize, themeMode, setThemeMode } = useAppTheme();
  const { t, i18n } = useTranslation();

  const handleThemeChange = useCallback(
    (mode: ThemeMode) => {
      setThemeMode(mode);
    },
    [setThemeMode],
  );

  const handleLanguageChange = useCallback((lang: string) => {
    changeLanguage(lang);
  }, []);

  const themeModes: { key: ThemeMode; label: string }[] = [
    { key: 'system', label: t('settings.themeSystem') },
    { key: 'dark', label: t('settings.themeDark') },
    { key: 'light', label: t('settings.themeLight') },
  ];

  const languages = [
    { key: 'tr', label: t('settings.languageTr') },
    { key: 'en', label: t('settings.languageEn') },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background, padding: spacing.lg }]}>
      <Text style={[styles.sectionTitle, { color: colors.text, fontSize: fontSize.lg }]}>
        {t('settings.theme')}
      </Text>
      <View style={[styles.optionRow, { marginBottom: spacing.xl }]}>
        {themeModes.map(mode => (
          <Pressable
            key={mode.key}
            onPress={() => handleThemeChange(mode.key)}
            style={[
              styles.optionButton,
              {
                backgroundColor:
                  themeMode === mode.key ? colors.primary : colors.surfaceVariant,
                borderRadius: 8,
                paddingVertical: spacing.sm,
                paddingHorizontal: spacing.lg,
                marginRight: spacing.sm,
              },
            ]}>
            <Text
              style={{
                color: themeMode === mode.key ? '#FFFFFF' : colors.text,
                fontSize: fontSize.sm,
                fontWeight: '600',
              }}>
              {mode.label}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={[styles.sectionTitle, { color: colors.text, fontSize: fontSize.lg }]}>
        {t('settings.language')}
      </Text>
      <View style={styles.optionRow}>
        {languages.map(lang => (
          <Pressable
            key={lang.key}
            onPress={() => handleLanguageChange(lang.key)}
            style={[
              styles.optionButton,
              {
                backgroundColor:
                  i18n.language === lang.key ? colors.primary : colors.surfaceVariant,
                borderRadius: 8,
                paddingVertical: spacing.sm,
                paddingHorizontal: spacing.lg,
                marginRight: spacing.sm,
              },
            ]}>
            <Text
              style={{
                color: i18n.language === lang.key ? '#FFFFFF' : colors.text,
                fontSize: fontSize.sm,
                fontWeight: '600',
              }}>
              {lang.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  sectionTitle: {
    fontWeight: '700',
    marginBottom: 12,
  },
  optionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionButton: {},
});

export default SettingsScreen;
