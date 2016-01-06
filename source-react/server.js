import React from 'react';
import { renderToString } from 'react-dom/server';
import Section from './components/Section';

export const body = renderToString(<Section projects={[{keywords: ['123']}]} />);
