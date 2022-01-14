module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '65e61d80937cae2680b451fc9a4c3bea'),
  },
});
