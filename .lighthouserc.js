module.exports = {
  ci: {
    collect: {
      staticDistDir: ".next",
      startServerCommand: "pnpm run dev",
      url: ["http://localhost:3000"],
    },
    upload: {
      target: "templorary-public-storage",
    },
  },
};
