
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/fondos-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "route": "/fondos-app"
  },
  {
    "renderMode": 1,
    "redirectTo": "/fondos-app",
    "route": "/fondos-app/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 893, hash: '77e4a8ebdb46f4ca44f7b34f52b213fd01fe7dfdba8b62fdb975c90a535d2e44', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1022, hash: '717714f36738db41f34d09931ee156692e47be6b06213ba914441bdea4910d17', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-7LEK62TX.css': {size: 13327, hash: '8gIaWZ43d80', text: () => import('./assets-chunks/styles-7LEK62TX_css.mjs').then(m => m.default)}
  },
};
