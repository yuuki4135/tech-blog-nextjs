import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});

export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch: {
    url: string;
  };
  createdAt: string;
};
