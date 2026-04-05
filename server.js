const express = require('express');
const path    = require('path');
const app     = express();
const PORT    = process.env.PORT || 3000;

// Serve all HTML/CSS/JS files in this folder as static files
app.use(express.static(__dirname));

// Root → index.html (your games hub)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🛡️  Games hub running on port ${PORT}`);
});
