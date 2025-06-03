// index.js - Simple TCP Connection Test to Supabase Pooler

const net = require('net');

const HOST = 'aws-0-eu-central-1.pooler.supabase.com';
const PORT = 6543;

console.log(`Attempting to connect to ${HOST}:${PORT}...`);

const socket = new net.Socket();

socket.setTimeout(5000); // 5-second timeout

socket.connect(PORT, HOST, () => {
  console.log(`✅ Success: Connected to ${HOST}:${PORT}`);
  socket.destroy();
});

socket.on('error', (err) => {
  console.error(`❌ Connection error:`, err.message);
  socket.destroy();
  process.exit(1);
});

socket.on('timeout', () => {
  console.error('❌ Timeout: No response from server');
  socket.destroy();
  process.exit(1);
});
