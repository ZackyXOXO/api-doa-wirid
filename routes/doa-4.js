const DoaBab4Router = (app, fs) => {
    // variables
    const dataPath = './data/bab4.json';
  
    // READ
    app.get('/doa-bab4', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = DoaBab4Router;