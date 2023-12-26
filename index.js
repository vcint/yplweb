// app.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set up middleware to serve static files from the 'views' folder
app.use(express.static(path.join(__dirname, 'views')));

// Define a route to serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});
app.get('/matches', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'matches.html'));
});
app.get('/point-table', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'point-table.html'));
});
app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'stats.html'));
});
app.get('/teams', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'teams.html'));
});
app.get('/venue', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'venue.html'));
});
app.get('/wada', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'wada.html'));
});
app.get('/vaishnawi', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'vaishwanvi.html'));
});
app.get('/sadgurusai', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'sadgurusai.html'));
});
app.get('/rokdeshwar', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'rokdeshwar.html'));
});
app.get('/rajmudra', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'rajmudra.html'));
});
app.get('/onenonly', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'onenonly.html'));
});
app.get('/mauli', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'mauli.html'));
});
app.get('/laxmiraman', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'laxmiraman.html'));
});
app.get('/bn-gavare', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'bn-gavare.html'));
});
app.get('/balaji-star', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'balaji-star.html'));
});

app.use(function(req,res,next){
    res.status(404).sendFile(path.join(__dirname,'views','error.html'))
})


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
