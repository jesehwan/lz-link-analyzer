const { decompressFromEncodedURIComponent } = require('lz-string');

class LzDecompressor {
  decompress(compressed) {
    console.log(decompressFromEncodedURIComponent(compressed));
    return JSON.parse(decompressFromEncodedURIComponent(compressed));
  }
}

module.exports = {
  LzDecompressor
};