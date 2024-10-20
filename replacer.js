import replace from 'replace-in-file';
import { promises as fs } from 'fs';
import path from 'path';

const getHtmlFiles = async (dir) => {
  const files = await fs.readdir(dir);
  return files.filter(file => path.extname(file).toLowerCase() === '.html');
};

const options = {
  files: [],
  from: [/src="\//g, /href="\//g],
  to: ['src="', 'href="'],
};

const replaceInHtmlFiles = async () => {
  try {
    const htmlFiles = await getHtmlFiles('./out');
    options.files = htmlFiles.map(file => `./out/${file}`);

    const results = await replace(options);
    console.log("Replacement results:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

replaceInHtmlFiles();