import { readFileSync } from 'fs';
import { join } from 'path';
import { render } from 'ejs';
import { body } from '../source-react/server';

const tmpl = readFileSync(join(__dirname, '..', 'source-react', 'template', 'index.ejs'), 'utf8');
console.log(render(tmpl, {body}));
