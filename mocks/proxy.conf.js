

const BASE_PROXY_CONFIG = {
  target: 'http://localhost:3456',
  logLevel: 'debug',
  secure: false,
  agent: false,
  changeOrigin: true,
  autoRewrite: true,
  protocolRewrite: 'http'
};
const CONTEXT = 'bookStore';

const CONFIG = {
  [`/${CONTEXT}/public/api`]: BASE_PROXY_CONFIG,
  '/eam': BASE_PROXY_CONFIG,
	'/content': BASE_PROXY_CONFIG
};

module.exports = CONFIG;
