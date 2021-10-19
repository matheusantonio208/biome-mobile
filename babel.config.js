module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-env'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: './src/services',
            rootPathPrefix: '#services/',
          },
          {
            rootPathSuffix: './src/config',
            rootPathPrefix: '#config/',
          },
          {
            rootPathSuffix: './src/views',
            rootPathPrefix: '#views/',
          },
          {
            rootPathSuffix: './src/views/pages',
            rootPathPrefix: '#pages/',
          },
          {
            rootPathSuffix: './src/views/components',
            rootPathPrefix: '#components/',
          },
          {
            rootPathSuffix: './src/views/behaviors',
            rootPathPrefix: '#behaviors/',
          },
        ],
      },
    ],
    '@babel/plugin-transform-modules-commonjs',
  ],
};
