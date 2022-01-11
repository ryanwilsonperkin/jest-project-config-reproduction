module.exports = {
  transform: {
    "\\.ts$": ["babel-jest", {babelrc: false}],
  },
  projects: [
    {
      displayName: "feature1",
      roots: ["<rootDir>/feature1"],
    },
    {
      displayName: "feature2",
      roots: ["<rootDir>/feature2"],
    }
  ]
}
