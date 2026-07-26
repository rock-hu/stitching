const { withRozenite } = require('@rozenite/metro');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const { withSentryConfig } = require('@sentry/react-native/metro');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

module.exports = withSentryConfig(
  withRozenite(mergeConfig(getDefaultConfig(__dirname), config), {
    enabled: process.env.WITH_ROZENITE === 'true',
  }),
);
