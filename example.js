import fs from 'node:fs/promises';
import path from 'node:path';

/* Read File ------------------------ */
const readPjson = async () => {
  const cwd = process.cwd();
  const pjsonPath = path.join(cwd, './package.json');

  console.log(JSON.parse(await fs.readFile(pjsonPath, 'utf-8')));
};

/* Write File ----------------------- */
const writeFile = async () => {
  const cwd = process.cwd();
  const newFile = path.join(cwd, './demo.js');

  await fs.writeFile(newFile, `console.log('yooo!')`);
};

// readPjson();
writeFile();
