module.exports = {
  presets: [
    "@babel/preset-env", // includes javascript syntax that brownser does not understand
    "@babel/preset-react" // interprets react syntax for the brownser (like jsx)
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}