const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Routes (same as before)
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Home',
    message: 'Welcome to my personal website!'
  });
});

app.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About Me',
    message: 'Learn more about my background and interests.'
  });
});

// Contact route (GET - show form)
app.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'Contact Me',
    message: null,
    formData: {}
  });
});

//This is for the resume ejs
app.get('/resume', (req, res) => {
  res.render('resume', { 
    title: 'Resumes',
    message: null,
    formData: {}
  });
});

// Contact route (POST - handle form submission)
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Simple validation
  if (!name || !email || !message) {
    return res.render('contact', {
      title: 'Contact Me',
      message: 'Please fill in all fields.',
      formData: req.body
    });
  }
  
  // In a real app, you'd save this to database or send email
  console.log('Contact form submission:', { name, email, message });
  
  // Show success message
  res.render('contact', { 
    title: 'Contact Me',
    message: 'Thank you for your message! I\'ll get back to you soon.',
    formData: {}
  });
});

// Contact route (GET - show form)
app.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'Contact Me',
    message: null,
    formData: {}
  });
});

// Contact route (POST - handle form submission)
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Simple validation
  if (!name || !email || !message) {
    return res.render('contact', {
      title: 'Contact Me',
      message: 'Please fill in all fields.',
      formData: req.body
    });
  }
  
  // In a real app, you'd save this to database or send email
  console.log('Contact form submission:', { name, email, message });
  
  // Show success message
  res.render('contact', { 
    title: 'Contact Me',
    message: 'Thank you for your message! I\'ll get back to you soon.',
    formData: {}
  });
});

// 404 Error Handler
app.use((req, res) => {
  res.status(404).render('404', {
    title: "404 Error",
    message: "The page you're looking for doesn't exist."
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Website running at http://localhost:${PORT}`);
  console.log(`📄 Pages: /, /about, /contact`);
  console.log(`📝 Try submitting the contact form!`);
});