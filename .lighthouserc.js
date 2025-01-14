module.exports = {
  ci: {
    collect: {
      staticDistDir: ".next",
      startServerCommand: "pnpm start",
      url: ["http://localhost:3000"],
    },
    upload: {
      target: "templorary-public-storage",
    },
  },
};
