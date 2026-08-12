import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})

const base = {name: "Adam"};
const withRole = {...base, role:"staff"};
console.log(withRole);

const numbers = [1,2,3,4,5];
const[,...rest] = numbers;
console.log(rest);