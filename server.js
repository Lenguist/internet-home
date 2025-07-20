const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for research page
app.get('/research', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'research.html'));
});

// Route for projects page
app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

// Route for explorations page
app.get('/explorations', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'explorations.html'));
});

// Route for thoughts page
app.get('/thoughts', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'thoughts.html'));
});

// Route for trot-or-rot page
app.get('/trot-or-rot', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'trot-or-rot.html'));
});

// Serve exploration pages
app.get('/explorations/:exploration', (req, res) => {
    const exploration = req.params.exploration;
    res.sendFile(path.join(__dirname, 'public', 'explorations', exploration, 'index.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 - Page Not Found</title>
            <link rel="stylesheet" type="text/css" href="/styles.css">
        </head>
        <body>
            <div class="header">
                <h1><span class="first-name">404</span> <span class="last-name">not found</span></h1>
            </div>
            <div class="section">
                <p style="text-align: center;">
                    <a href="/">← back to home</a>
                </p>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
}); 