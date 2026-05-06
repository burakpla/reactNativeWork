import type { StatusBarStyle } from 'react-native';

const lightColors = {
  background: '#FFFFFF',
  surface: '#F5F5F5',
  surfaceVariant: '#E8E8E8',
  text: '#1A1A1A',
  textSecondary: '#6B6B6B',
  textTertiary: '#9E9E9E',
  border: '#E0E0E0',
  primary: '#2563EB',
  primaryLight: '#DBEAFE',
  accent: '#F59E0B',
  error: '#DC2626',
  success: '#16A34A',
  warning: '#D97706',
  card: '#FFFFFF',
  tabBar: '#FFFFFF',
  tabBarBorder: '#E0E0E0',
  icon: '#6B6B6B',
  iconActive: '#2563EB',
  statusBar: 'dark-content' as StatusBarStyle,
};

const darkColors = {
  background: '#0F172A',
  surface: '#1E293B',
  surfaceVariant: '#334155',
  text: '#F8FAFC',
  textSecondary: '#94A3B8',
  textTertiary: '#64748B',
  border: '#334155',
  primary: '#3B82F6',
  primaryLight: '#1E3A5F',
  accent: '#FBBF24',
  error: '#EF4444',
  success: '#22C55E',
  warning: '#F59E0B',
  card: '#1E293B',
  tabBar: '#1E293B',
  tabBarBorder: '#334155',
  icon: '#94A3B8',
  iconActive: '#3B82F6',
  statusBar: 'light-content' as StatusBarStyle,
};

export { lightColors, darkColors };

export type AppColors = typeof lightColors;
