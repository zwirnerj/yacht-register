// https://developer.okta.com/quickstart/#/okta-sign-in-page/nodejs/express

const {
    ExpressOIDC
} = require('@okta/oidc-middleware');

const oidc = new ExpressOIDC({
    issuer: process.env.OIDC_ISSUER,
    client_id: process.env.OIDC_CLIENT_ID,
    client_secret: process.env.OIDC_CLIENT_SECRET,
    redirect_uri: process.env.OIDC_REDIRECT_URI,
    scope: 'openid profile'
});

oidc.on('ready', () => {
    console.log(`ExpressOIDC started!`);
});

oidc.on('error', err => {
    console.log('Unable to configure ExpressOIDC', err);
});

module.exports = oidc;