module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          adapters: './src/adapters',
          components: './src/components',
          interfaces: './src/interfaces',
          navigation: './src/navigation',
          screens: './src/screens',
          server: './src/server',
          services: './src/services',
          styles: './src/styles',
          utils: './src/utils',
        },
      },
    ],
  ],
}
