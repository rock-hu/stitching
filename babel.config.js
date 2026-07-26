module.exports = {
  presets: ["module:@react-native/babel-preset", "@rnx-kit/babel-preset-metro-react-native"],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
