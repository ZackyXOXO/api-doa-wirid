// load up our shiny new route for users
const DoaBab1Router = require('./doa-1');
const DoaBab2Router = require('./doa-2');
const DoaBab3Router = require('./doa-3');
const DoaBab4Router = require('./doa-4');

const appRouter = (app, fs) => {

  app.get('/', (req, res) => {
    res.send('API DOA');
  });


  DoaBab1Router(app, fs);
  DoaBab2Router(app, fs);
  DoaBab3Router(app, fs);
  DoaBab4Router(app, fs);
};


module.exports = appRouter;