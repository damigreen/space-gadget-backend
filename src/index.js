const express = require('express');

const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
  res.send('PONG---------------------------');
});

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
