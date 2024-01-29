const DoaBab2Router = (app, fs) => {
    // variables
    const dataPath = './data/bab2.json';
  
    // READ
    app.get('/doa-bab2', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = DoaBab2Router;