module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@store': './src/store',
          '@sharedTypes': './src/sharedTypes',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@assets': './src/assets',
          '@services': './src/services',
        },
      },
    ],
  ],
};
