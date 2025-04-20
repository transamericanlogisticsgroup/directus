module.exports = function registerTestEndpoint(router) {
  // Directus will mount this at GET /test
  router.get('/test', async (req, res) => {
    res.status(200).send('hello world');
  });
};
