import development from './development';
import test from './test';
import production from './production';

const env = { development, test, production };
export default env[process.env.NODE_ENV];
