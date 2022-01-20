const PORT = process.env.PORT || 3000;
const CONFIG = {
  updateCommand: "cd <PATH> && git reset --hard HEAD && git pull",
  repos: [
    {
      repoFullName: "faceitreputation/faceitreputation-api",
      path: "/var/www/api-faceit-reputation.rmeev.tech/api"
    },
    {
      repoFullName: "faceitreputation/faceit_proxy",
      path: "/var/www/faceitproxy.rmeev.tech/api"
    },
  ],
};

module.exports = {
  config: CONFIG,
  port: PORT,
};
