// src/config.js
const config = {
    development: {
      baseURL: 'http://localhost:5000/api',
    },
    production: {
      baseURL: '',
    },
  };
  
  export const getConfig = () => {
    const env = process.env.NODE_ENV || 'development';
    return config[env];
  };
  