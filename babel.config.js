module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    //para não precisar usar constructor na classe
    '@babel/plugin-proposal-class-properties'
  ]
}