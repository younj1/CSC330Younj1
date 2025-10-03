const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Home route - now uses templates instead of plain text
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Home',
    message: 'Welcome to my personal website!'
  });
});

// About route - enhanced from Module 1
app.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About Me',
    message: 'Learn more about my background and interests.'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Website running at http://localhost:${PORT}`);
  console.log(`📄 Pages: / and /about`);
});