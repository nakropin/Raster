/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        print: "210mm",
      },
      height: {
        print: "297mm",
      },
      padding: {
        inch: "25.4mm",
        Hinch: "12.7mm",
        Qinch: "6.35mm",
      },
      margin: {
        inch: "25.4mm",
        Hinch: "12.7mm",
        Qinch: "6.35mm",
      },
      gap: {
        inch: "25.4mm",
        Hinch: "12.7mm",
        Qinch: "6.35mm",
      },
    },
  },
  plugins: [],
  safelist: [
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",
    "grid-cols-7",
    "grid-cols-8",
    "grid-cols-9",
    "grid-cols-10",
    "grid-cols-11",
    "grid-cols-12",
    "grid-rows-1",
    "grid-rows-2",
    "grid-rows-3",
    "grid-rows-4",
    "grid-rows-5",
    "grid-rows-6",
    "grid-rows-7",
    "grid-rows-8",
    "grid-rows-9",
    "grid-rows-10",
    "grid-rows-11",
    "grid-rows-12",
  ],
};
