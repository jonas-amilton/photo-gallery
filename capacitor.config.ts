import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jonas.photogallery',
  appName: 'photo-gallery',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    LiveUpdates: {
      appId: '851b7351',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2,
    },
  },
};

export default config;
