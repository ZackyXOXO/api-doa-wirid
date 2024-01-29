const DoaBab1Router = (app, fs) => {
    // variables
    const dataPath = './data/bab1.json';
  
    // READ
    app.get('/doa-bab1', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = DoaBab1Router;