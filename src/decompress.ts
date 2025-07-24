import { LzDecompressor } from './decompressor';

// Get the compressed string from command line arguments
const compressedString = process.argv[2];

if (!compressedString) {
  console.error('Please provide a compressed string as a command line argument');
  process.exit(1);
}

try {
  const decompressor = new LzDecompressor();
  const result = decompressor.decompress(compressedString);
  console.log('Decompressed result:', result);
} catch (error) {
  console.error('Error decompressing string:', error);
  process.exit(1);
} 
