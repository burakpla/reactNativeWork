import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ThemeMode = 'system' | 'dark' | 'light';

interface AppState {
  themeMode: ThemeMode;
  language: string;
}

const initialState: AppState = {
  themeMode: 'system',
  language: 'tr',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setThemeMode(state, action: PayloadAction<ThemeMode>) {
      state.themeMode = action.payload;
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
  },
});

export const { setThemeMode, setLanguage } = appSlice.actions;
export default appSlice.reducer;
