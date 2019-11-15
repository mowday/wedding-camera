const express = require('express');
const fs = require('fs-extra');
const bodyParser = require('body-parser');
const Gpio = require('onoff').Gpio;
const app = express();


let takePhoto = false;
const button = new Gpio(4, 'in', 'both');
button.watch((err, value) => {
  if (value === 1) {
    takePhoto = true;
  }
})

process.on('SIGINT', _ => {
  button.unexport();
});

app.use(bodyParser.text({ limit: '10mb' }));
app.use(express.static('./dist/'));
app.use('/pictures', express.static('./pictures/'));

const picture = /^.*?\.(png|jpg|jpeg)$/;
app.get('/images.json', async (req, res) => {
  const files = await fs.readdir('./pictures');
  const json = files
    .filter(file => picture.test(file))
    .map(file => `/pictures/${file}`);
  res.json(json);
});

app.post('/upload', async (req, res) => {
  const data = req.body.split(',')[1];
  await fs.writeFile('./pictures/' + getFilename(), data, 'base64')
  res.json({ status: 'ok' }).send()
})


app.post('awaiting_photo', (req, res) => {
  res.json(takePhoto);
  takePhoto = false;
})

function getFilename() {
  const d = new Date();
  const year = d.getFullYear();
  const month = ('0' + (d.getMonth() + 1)).substr(-2)
  const day = ('0' + d.getDate()).substr(-2)

  const hour = ('0' + d.getHours()).substr(-2)
  const minutes = ('0' + d.getMinutes()).substr(-2)
  const seconds = ('0' + d.getSeconds()).substr(-2)
  const ms = ('0' + d.getMilliseconds()).substr(-2)

  return `${year}-${month}-${day}-${hour}-${minutes}-${seconds}-${ms}.jpg`
}

app.listen(3000, '0.0.0.0', () => {
  console.log('Server up and runnning');
})