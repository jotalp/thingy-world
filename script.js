
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Set the content type to HTML
    res.setHeader('Content-Type', 'text/html');

    // Read the HTML file from disk
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
        }

        // Serve the HTML file
        res.statusCode = 200;
        res.end(data);
    });
});

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
