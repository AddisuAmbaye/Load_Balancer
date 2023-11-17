const fs = require('fs');
const https = require('https');

const proxyRouter = require('./routes/proxy');
app.use('/app', proxyRouter);

const options = {
  key: fs.readFileSync('./ssl/ca-key.pem'),
  cert: fs.readFileSync('./ssl/ca.pem'),
};

https.createServer(options, app).listen(443, () => {
  console.log('Load balancer started on port 443');
});