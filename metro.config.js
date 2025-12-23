const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);
  const { resolver } = config;

  return {
    ...config,
    resolver: {
      ...resolver,
      sourceExts: [...resolver.sourceExts, 'js', 'jsx', 'json'],
    },
  };
})();