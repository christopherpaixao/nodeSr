module.exports = {
    repositoryUrl: 'https://github.com/christopherpaixao/nodeSr',
    branches: ["master"],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        ["@semantic-release/npm", {
          "npmPublish": false,
          "pkgRoot": "./"
        }],
        ["@semantic-release/git", {
          "assets": ["CHANGELOG.md", "./package.json", "./package-lock.json", "npm-shrinkwrap.json"],
          "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }],
        ["@semantic-release/exec", {
          "publishCmd": "./publish.sh"
        }]
    ],
    commitizen: { "path": "cz-conventional-changelog" }
}