const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'public');
const contentTypes = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml' };
const catalogue = [
  { name: 'Classic White', sizes: ['65 ml', '85 ml', '110 ml'], from: '₹0.72', note: 'Everyday tea & coffee' },
  { name: 'Kraft Earth', sizes: ['90 ml', '150 ml', '210 ml'], from: '₹1.08', note: 'Unbleached, natural finish' },
  { name: 'Café Series', sizes: ['180 ml', '250 ml', '350 ml'], from: '₹1.62', note: 'Ripple-wall heat protection' },
  { name: 'Custom Print', sizes: ['90 ml', '150 ml', '250 ml'], from: '₹1.35', note: 'Your brand, your cup' }
];

http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === '/api/catalogue') return res.end(JSON.stringify(catalogue));
  if (url.pathname === '/api/quote' && req.method === 'POST') {
    let body = ''; req.on('data', c => body += c); req.on('end', () => {
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true, message: 'Quote request received. We will be in touch shortly.' }));
    }); return;
  }
  let file = url.pathname === '/' ? '/index.html' : url.pathname;
  const candidate = path.normalize(path.join(root, file));
  const safeFile = candidate.startsWith(root) && fs.existsSync(candidate) && fs.statSync(candidate).isFile() ? candidate : path.join(root, 'index.html');
  res.writeHead(200, { 'Content-Type': contentTypes[path.extname(safeFile)] || 'text/plain' });
  fs.createReadStream(safeFile).pipe(res);
}).listen(process.env.PORT || 3000, () => console.log('Shyam Manufacturers at http://localhost:3000'));
