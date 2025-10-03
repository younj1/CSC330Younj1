const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Home route
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Home',
    message: 'Welcome to my personal website!'
  });
});

// About route
app.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About Me',
    message: 'Learn more about my background and interests.'
  });
});

// 404 Error Handler - MUST be last!
app.use((req, res) => {
  res.status(404).render('404');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Website running at http://localhost:${PORT}`);
  console.log(`📄 Pages: / and /about`);
  console.log(`🔍 Try visiting a page that doesn't exist to see the 404 page!`);
});