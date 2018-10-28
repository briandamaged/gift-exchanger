module.exports = {
  apps : [
    {
      name      : 'API',
      script    : './src/index.js',
      ignore_watch: [
        'log/*', 'node_modules/*'
      ],
      node_args: '--inspect=0.0.0.0:5858 --debug=56745'
    },
  ],

};
