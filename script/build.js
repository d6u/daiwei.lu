import swig from 'swig';
import path from 'path';
import yaml from 'js-yaml';
import fs from 'fs';

const contentPath = path.join(__dirname, '..', 'source/content.yml');
const templatePath = path.join(__dirname, '..', 'source/index.swig');
const outputPath = path.join(__dirname, '..', 'public/index.html');
const readFileOpt = { encoding: 'utf8' };

fs.readFile(contentPath, readFileOpt, (_, str) => {
  swig.renderFile(templatePath, yaml.safeLoad(str), (_, str) => {
    fs.writeFile(outputPath, str, readFileOpt);
  });
});
