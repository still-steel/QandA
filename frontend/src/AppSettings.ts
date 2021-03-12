export const authSettings = {
  domain: 'dev-jht9gka7.us.auth0.com',
  client_id: 'LRBpHBsk2vL1sh5m3sZOZvrTyghd13nJ',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};

export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://qanda-backend.azurewebsites.net'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://qanda-backend-staging.azurewebsites.net'
    : 'http://localhost:63419';

export const webAPIUrl = `${server}/api`;
