const express = require('express');
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('99 Bottles of milk on the wall <br> <a href="/98">Take one down, pass it around</a>');
  });
  
  app.get('/:number_of_bottles', (req, res) => {
    const bottles = req.params.number_of_bottles;
    const nextBottles = bottles - 1;
  
    if (nextBottles > 0) {
      res.send(`${bottles} Bottles of milk on the wall <br> <a href="/${nextBottles}">Take one down, pass it around</a> <br> <a href="/">Start over</a>`);
    } else {
      res.send('No more bottles left. <a href="/">Start over</a>');
    }
  });
  