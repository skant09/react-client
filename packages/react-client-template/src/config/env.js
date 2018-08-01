let baseURL;
let websocketURL;
let parentBucket;
let cloudfrontURL;
let socketUrl;

const S3Region = 'ap-south-1';
const bucketStore = 'store'; // store or cache

const bugsnagKey = 'b7db508f4f7ce6917ad360fa12ca80fe';
const appVersion = '0.1.0';

const Env = 'localhost12';
// const Env = 'live';

// const clientUID = 'reve';
const clientUID = 'syook_hq';
// const clientUID = 'hul_rajpura';
// const clientUID = 'hul_demo';

if (Env === 'localhost') {
  baseURL = 'http://localhost:3000/api';
  parentBucket = 'demo-tnt';
  cloudfrontURL = `https://djafz402drz22.cloudfront.net/${bucketStore}`;
  websocketURL = 'ws://localhost';
  socketUrl = 'http://localhost:8000';
} else {
  switch (clientUID) {
    case 'reve':
      baseURL = 'http://demo-api.syooktrack.com/api';
      parentBucket = 'demo-tnt';
      cloudfrontURL = `https://djafz402drz22.cloudfront.net/${bucketStore}`;
      websocketURL = 'ws://139.59.65.73';
      socketUrl = 'http://demo-ws.syooktrack.com';
      break;

    case 'syook_hq':
      baseURL = 'http://demo-api.syooktrack.com/api';
      parentBucket = 'demo-tnt';
      cloudfrontURL = `https://djafz402drz22.cloudfront.net/${bucketStore}`;
      websocketURL = 'ws://139.59.65.73';
      socketUrl = 'http://demo-ws.syooktrack.com';
      break;

    // case 'syook_hq':
    //   baseURL = 'http://159.89.165.115:3000/api';
    //   parentBucket = 'demo-tnt';
    //   cloudfrontURL = `https://djafz402drz22.cloudfront.net/${bucketStore}`;
    //   websocketURL = 'ws://159.89.165.115';
    //   break;

    case 'hul_rajpura':
      baseURL = 'http://hul-rajpura-api.syooktrack.com/api';
      parentBucket = 'hul-rajpura-tnt';
      cloudfrontURL = `https://d354jvcev08x0g.cloudfront.net/${bucketStore}`;
      websocketURL = 'ws://139.59.79.53';
      socketUrl = 'http://139.59.79.53:8000';
      break;

    case 'hul_demo':
      baseURL = 'http://hul-demo-api.syooktrack.com/api';
      parentBucket = 'demo-tnt';
      cloudfrontURL = `https://djafz402drz22.cloudfront.net/${bucketStore}`;
      websocketURL = 'ws://139.59.79.53';
      socketUrl = 'http://139.59.79.53:8000';
      break;

    default:
      baseURL = 'http://demo-api.syooktrack.com/api';
      parentBucket = 'demo-tnt';
      cloudfrontURL = `https://djafz402drz22.cloudfront.net/${bucketStore}`;
      websocketURL = 'ws://139.59.65.73';
      socketUrl = 'http://demo-ws.syooktrack.com';
      break;
  }
}

export {
  S3Region,
  appVersion,
  baseURL,
  bucketStore,
  bugsnagKey,
  clientUID,
  cloudfrontURL,
  parentBucket,
  socketUrl,
  websocketURL,
};
