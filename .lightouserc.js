module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000"],
      collect: {
        numberOfRuns: 5,
      },
    },
    upload: {
      startServerCommand: "pnpm run dev",
      target: "templorary-public-storage",
    },
  },
};
