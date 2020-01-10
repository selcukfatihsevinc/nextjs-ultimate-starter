module.exports = {
  name: 'production',
  cache: {
    isEnabled: true,
    maxMemory: 100 * 1000 * 1000, // 100 MB
    maxAge: 1000 * 60 * 60, // 1 hour
  },
};
