const fs = require('fs');
const path = require('path');

// A docx file is a ZIP file. We can use Node's built-in zlib + manual ZIP parsing
// But easier: use the 'unzipper' approach or just manually parse the XML

// Actually, let's use a simple approach - docx is ZIP, we can use decompress-zip or similar
// Let's try the simplest approach: read as buffer and find the XML content

const filePath = 'h:/apexcale-website/apexcale-website-copy.md.docx';
const buffer = fs.readFileSync(filePath);

// Find the document.xml within the ZIP structure
// ZIP files have local file headers starting with PK\x03\x04

function findXMLInZip(buffer) {
  const entries = [];
  let offset = 0;
  
  while (offset < buffer.length - 4) {
    // Look for local file header signature
    if (buffer[offset] === 0x50 && buffer[offset+1] === 0x4B && buffer[offset+2] === 0x03 && buffer[offset+3] === 0x04) {
      const compMethod = buffer.readUInt16LE(offset + 8);
      const compSize = buffer.readUInt32LE(offset + 18);
      const uncompSize = buffer.readUInt32LE(offset + 22);
      const nameLen = buffer.readUInt16LE(offset + 26);
      const extraLen = buffer.readUInt16LE(offset + 28);
      const name = buffer.slice(offset + 30, offset + 30 + nameLen).toString('utf8');
      const dataStart = offset + 30 + nameLen + extraLen;
      
      entries.push({ name, compMethod, compSize, uncompSize, dataStart });
      
      offset = dataStart + (compSize || uncompSize);
    } else {
      offset++;
    }
  }
  
  return entries;
}

const entries = findXMLInZip(buffer);
const docEntry = entries.find(e => e.name === 'word/document.xml');

if (docEntry) {
  let xmlData;
  if (docEntry.compMethod === 0) {
    // Stored (no compression)
    xmlData = buffer.slice(docEntry.dataStart, docEntry.dataStart + docEntry.uncompSize).toString('utf8');
  } else {
    // Deflated - use zlib
    const zlib = require('zlib');
    const compressed = buffer.slice(docEntry.dataStart, docEntry.dataStart + docEntry.compSize);
    xmlData = zlib.inflateRawSync(compressed).toString('utf8');
  }
  
  // Extract text from XML - get text between <w:t> tags
  const textMatches = xmlData.match(/<w:t[^>]*>([^<]*)<\/w:t>/g);
  if (textMatches) {
    // Also track paragraph breaks
    let result = '';
    let lastWasParagraph = false;
    
    // Process the full XML to preserve paragraph structure
    const paragraphs = xmlData.split(/<\/w:p>/);
    for (const para of paragraphs) {
      const texts = para.match(/<w:t[^>]*>([^<]*)<\/w:t>/g);
      if (texts) {
        const paraText = texts.map(t => t.replace(/<[^>]+>/g, '')).join('');
        if (paraText.trim()) {
          result += paraText.trim() + '\n\n';
        }
      }
    }
    
    console.log(result);
  }
} else {
  console.log('Could not find document.xml in the docx file');
  console.log('Available entries:', entries.map(e => e.name).join(', '));
}
