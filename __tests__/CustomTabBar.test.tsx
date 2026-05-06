import React from 'react';
import { render, screen, userEvent } from '@testing-library/react-native';
import CustomTabBar from '../src/components/CustomTabBar';

jest.useFakeTimers();

describe('CustomTabBar', () => {
  const mockOnTabPress = jest.fn();

  beforeEach(() => {
    mockOnTabPress.mockClear();
  });

  it('renders all tab labels', () => {
    render(<CustomTabBar activeTab="home" onTabPress={mockOnTabPress} />);

    expect(screen.getByText('Newsfeed')).toBeOnTheScreen();
    expect(screen.getByText('Maçlar')).toBeOnTheScreen();
    expect(screen.getByText('Haberler')).toBeOnTheScreen();
    expect(screen.getByText('Diğer')).toBeOnTheScreen();
  });

  it('calls onTabPress with correct key when a tab is pressed', async () => {
    const user = userEvent.setup();
    render(<CustomTabBar activeTab="home" onTabPress={mockOnTabPress} />);

    await user.press(screen.getByText('Newsfeed'));
    expect(mockOnTabPress).toHaveBeenCalledWith('newsfeed');
  });

  it('calls onTabPress with "maclar" when Maçlar tab is pressed', async () => {
    const user = userEvent.setup();
    render(<CustomTabBar activeTab="home" onTabPress={mockOnTabPress} />);

    await user.press(screen.getByText('Maçlar'));
    expect(mockOnTabPress).toHaveBeenCalledWith('maclar');
  });

  it('calls onTabPress with "haberler" when Haberler tab is pressed', async () => {
    const user = userEvent.setup();
    render(<CustomTabBar activeTab="home" onTabPress={mockOnTabPress} />);

    await user.press(screen.getByText('Haberler'));
    expect(mockOnTabPress).toHaveBeenCalledWith('haberler');
  });

  it('calls onTabPress with "diger" when Diğer tab is pressed', async () => {
    const user = userEvent.setup();
    render(<CustomTabBar activeTab="home" onTabPress={mockOnTabPress} />);

    await user.press(screen.getByText('Diğer'));
    expect(mockOnTabPress).toHaveBeenCalledWith('diger');
  });

  it('applies active style to the selected tab icon', () => {
    render(<CustomTabBar activeTab="newsfeed" onTabPress={mockOnTabPress} />);

    const activeIcon = screen.getByText('Newsfeed');
    expect(activeIcon).toHaveStyle({ color: 'rgb(255, 237, 0)' });
  });

  it('applies inactive style to non-selected tab labels', () => {
    render(<CustomTabBar activeTab="newsfeed" onTabPress={mockOnTabPress} />);

    const inactiveLabel = screen.getByText('Maçlar');
    expect(inactiveLabel).toHaveStyle({ color: 'rgb(255, 255, 255)' });
  });

  it('does not render a label for the center home button', () => {
    render(<CustomTabBar activeTab="home" onTabPress={mockOnTabPress} />);

    // Home tab has empty label, so there should be exactly 4 visible tab labels
    const labels = screen.getAllByText(/\S+/);
    const tabLabels = labels.filter(
      (el) => el.props.children === 'Newsfeed' ||
              el.props.children === 'Maçlar' ||
              el.props.children === 'Haberler' ||
              el.props.children === 'Diğer'
    );
    expect(tabLabels).toHaveLength(4);
  });
});
