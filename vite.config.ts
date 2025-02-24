import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true }), // Generate TypeScript declaration files
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MyComponentLibrary',
      fileName: (format) => `my-component-library.${format}.js`,
    },
    rollupOptions: {
      // Externalize peer dependencies
      external: ['react', 'react-dom', '@ionic/react', '@ionic/core'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@ionic/react': 'IonicReact',
          '@ionic/core': 'IonicCore',
        },
      },
    },
  },
});
