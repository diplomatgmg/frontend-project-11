import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
            },
          },
          'ts-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};


