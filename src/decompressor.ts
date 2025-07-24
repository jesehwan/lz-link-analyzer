import { decompressFromEncodedURIComponent } from 'lz-string';

export interface Decompressor {
  decompress(data: string): Record<string, any>;
}

export class LzDecompressor implements Decompressor {
  decompress(compressed: string): Record<string, any> {
    console.log(decompressFromEncodedURIComponent(compressed));
    return JSON.parse(decompressFromEncodedURIComponent(compressed));
  }
}

