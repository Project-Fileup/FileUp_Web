module.exports = {
  apps : [
    {
      name: 'fileup-web',
      cwd: './',
      script: './server/index.js',
      exec_mode: 'cluster',
      wait_ready: true,
      listen_timeout: 50000,
      kill_timeout: 5000,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
