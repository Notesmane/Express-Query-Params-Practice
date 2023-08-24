const express = require('express');

const app = express();
const PORT = 3000;

// Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger".

// Give the greetingroute a param /:name


app.get('/greeting/:name', (req, res) => {
    res.send('Hello, stranger');
});

const greetings = [`Hello, ${req.params.name}`, `What\'s up, ${req.params.name}`, `${req.params.name}! It\s so great to see you!`, `Wow! Hello there, ${req.params.name} `];

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});