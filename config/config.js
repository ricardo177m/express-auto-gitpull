const PORT = process.env.PORT || 3000;
const CONFIG = {
  updateCommand: "cd <PATH> && git reset --hard HEAD && git pull",
  repos: [
    {
      repoFullName: "rmoreiradev/test-auto-pull",
      path: "/var/www/web.rmeev.tech/html/test-auto-pull"
    },
  ],
};

module.exports = {
  config: CONFIG,
  port: PORT,
};