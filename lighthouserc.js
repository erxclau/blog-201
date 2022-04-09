module.exports = {
  ci: {
    collect: {
      staticDistDir: './',
      url: ['http://localhost/home/index.html', 'http://localhost/blog/index.html']
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:recommended'
    }
  },
};