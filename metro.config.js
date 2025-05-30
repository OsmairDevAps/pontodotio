const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Ignore o módulo 'ws' que causa erro
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  events: require.resolve('events/'),
  stream: require.resolve('stream-browserify'),
  util: require.resolve('util'),
};

module.exports = config;
