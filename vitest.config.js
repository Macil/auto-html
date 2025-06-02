import { defineConfig } from 'vite';
import { flowPlugin } from '@bunchtogether/vite-plugin-flow';

export default defineConfig({
  plugins: [
    flowPlugin()
  ]
});
