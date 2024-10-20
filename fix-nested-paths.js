const fs = require('fs');
const path = require('path');

function fixNestedPaths(dir, depth = 0) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixNestedPaths(filePath, depth + 1);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      const prefix = '../'.repeat(depth);
      content = content.replace(/href="\.\.\//g, `href="${prefix}`);
      content = content.replace(/src="\.\.\//g, `src="${prefix}`);
      fs.writeFileSync(filePath, content);
    }
  }
}

fixNestedPaths(path.join(__dirname, 'out'));
