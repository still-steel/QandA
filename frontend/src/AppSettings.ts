export const webAPIUrl = 'http://localhost:63419/api';

export const authSettings = {
  domain: 'dev-3mgbqr0s.eu.auth0.com',
  client_id: 'G2QaX5ugMmZgIt9pqxQyglfc7hZHezuU',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
