module.exports = () => {
  const whitelist = JSON.parse(process.env.ALLOWED_DOMAINS);
  const corsOptions = {
    origin: (origin, callback) => {
      let isOriginWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(
        !origin || isOriginWhitelisted ? null : "Bad Request",
        isOriginWhitelisted
      );
    },
  };

  return corsOptions;
};
