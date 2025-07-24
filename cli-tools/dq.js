const { LzDecompressor } = require('./dist/decompressor');

function extractAndDecompress(url) {
    try {
        // Extract clickenc parameter
        const clickencMatch = url.match(/clickenc=([^&]*)/);
        if (!clickencMatch) {
            console.error('No clickenc parameter found in URL');
            process.exit(1);
        }

        // Double URL decode
        const encoded = clickencMatch[1];
        const decoded1 = decodeURIComponent(encoded);
        const decoded2 = decodeURIComponent(decoded1);
        
        console.log('Decoded URL:');
        console.log(decoded2);
        console.log();

        // Extract q parameter
        const qMatch = decoded2.match(/q=([^&]*)/);
        if (!qMatch) {
            console.error('No q parameter found in decoded URL');
            process.exit(1);
        }

        const compressedString = qMatch[1];
        console.log('Compressed string:');
        console.log(compressedString);
        console.log();

        // Decompress using LZ-String
        const decompressor = new LzDecompressor();
        const result = decompressor.decompress(compressedString);
        
        console.log('=== DECOMPRESSED RESULT ===');
        console.log(JSON.stringify(result, null, 2));
        
    } catch (error) {
        console.error('Error processing URL:', error.message);
        process.exit(1);
    }
}

// Get URL from command line arguments
const url = process.argv[2];

if (!url) {
    console.error('Please provide a URL as a command line argument');
    console.error('Usage: node dq.js "your_url_here"');
    process.exit(1);
}

extractAndDecompress(url);