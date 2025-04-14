const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 9000, // 🔧 Wajib agar cocok dengan Railway
    host: '0.0.0.0',                // 🔧 Wajib agar bisa diakses publik
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
