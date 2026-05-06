export interface AppConfig {
  API_URL: string;
  ENV: 'development' | 'staging' | 'production';
}

declare const process: { env: Record<string, string | undefined> };

export const config: AppConfig = {
  API_URL: process.env.API_URL || 'http://localhost:3000',
  ENV: (process.env.ENV as AppConfig['ENV']) || 'development',
};
