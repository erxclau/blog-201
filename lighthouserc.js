module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/home', 'http://localhost:3000/blog'],
      startServerCommand: 'yarn start'
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'csp-xss': 'off',
        'legacy-javascript': 'warn',
        'unsized-images': 'warn',
        'total-byte-weight': 'warn',
        'image-size-responsive': 'warn'
      }
    }
  },
};