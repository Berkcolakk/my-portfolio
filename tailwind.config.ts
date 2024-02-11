import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: {
      darkMain: '#292929',
      darkSecondry: '#19191bcc',
      darkThird: '#dac48e',
      lightMain:'#fcfdfe',
      lightSecondry:'#b4e8f3',
      lightThird: '#0bb5eb'
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
