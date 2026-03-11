const fs = require('fs');
const path = require('path');

const keysFilePath = path.join(__dirname, 'keys.json');

// Function to generate a random key
function generateKey() {
    return Math.random().toString(36).substring(2, 10); // generates a random 8-character string
}

// Function to store keys with timestamps
function storeKey(key) {
    const currentTime = new Date().toISOString();
    const keys = loadKeys();
    
    keys.push({ key, timestamp: currentTime });
    fs.writeFileSync(keysFilePath, JSON.stringify(keys, null, 2));
}

// Load keys from the file
function loadKeys() {
    if (!fs.existsSync(keysFilePath)) {
        return [];
    }

    const data = fs.readFileSync(keysFilePath);
    return JSON.parse(data);
}

// Function to validate keys
function validateKeys() {
    const keys = loadKeys();
    const validKeys = keys.filter(keyObj => {
        const keyTime = new Date(keyObj.timestamp);
        const currentTime = new Date();
        const elapsedTime = (currentTime - keyTime) / 1000 / 60 / 60; // in hours
        return elapsedTime < 24; // valid if less than 24 hours
    });

    return validKeys;
}

// Example usage
const newKey = generateKey();
storeKey(newKey);
console.log(`Generated Key: ${newKey}`);
console.log('Valid Keys:', validateKeys());
