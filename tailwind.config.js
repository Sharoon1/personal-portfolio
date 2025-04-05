/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mapbg: "#e9f9ff",
        acolor: "#d7a43d",
        textColor: "#130f49",
        borderC: "#abacfe",
        bgIcon: "#f3f3f6",
        hoverColor: "#acaefe",
        allTextC: "#8583a1",
        bgfront: "#effbf8",
        boxbg: "#d3f4ec",
        sboxbg: "#fce8d4",
        lightExpC: "#f3f9ff",
        clientColor: "#fff5f6",
      },
    },
  },
  plugins: [],
};
