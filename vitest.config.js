import { configDefaults, defineConfig } from 'vitest/config';
import { flowPlugin } from '@bunchtogether/vite-plugin-flow';

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, './js'],
  },
  plugins: [flowPlugin()],
});
