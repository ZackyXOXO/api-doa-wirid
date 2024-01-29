const DoaBab3Router = (app, fs) => {
    // variables
    const dataPath = './data/bab3.json';
  
    // READ
    app.get('/doa-bab3', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = DoaBab3Router;