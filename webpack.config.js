import path from 'path';

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
  },
  mode: "development",
};


export default config;
