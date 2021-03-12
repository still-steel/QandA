export const webAPIUrl = 'http://localhost:63419/api';

export const authSettings = {
  domain: 'dev-jht9gka7.us.auth0.com',
  client_id: 'LRBpHBsk2vL1sh5m3sZOZvrTyghd13nJ',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
