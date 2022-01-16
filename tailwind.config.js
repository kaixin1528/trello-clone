module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        main: "#ebecf0",
        concept: "#ebdcf9",
        technical: "#dbe4fd",
        design: "#d3eadd",
        fullstack: "#fcebdb",
        frontend: "#fcf4db",
        add: "#ebecf0",
        save: "#0279bf",
        card: "#f4f5f7",
      },
      textColor: {
        concept: "#9b51e0",
        technical: "#448cef",
        design: "#219653",
        fullstack: "#f7c294",
        frontend: "#f2ca53",
        list: "#2d3e5d",
        card: "#2f415f",
        add: "#7e899c",
        subtitle: "#6e7b90",
      },
      fontFamily: {
        roboto: "Roboto",
      },
    },
  },
  plugins: [],
};
