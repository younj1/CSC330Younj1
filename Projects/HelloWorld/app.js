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