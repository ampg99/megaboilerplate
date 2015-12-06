let generateCommonAuthentication = require('./generateCommonAuthentication');
let generateEmailAuthentication = require('./generateEmailAuthentication');
let generateFacebookAuthentication = require('./generateFacebookAuthentication');
let generateGoogleAuthentication = require('./generateGoogleAuthentication');
let generateTwitterAuthentication = require('./generateTwitterAuthentication');
let cleanupAuthentication = require('./cleanupAuthentication');

async function generateAuthentication(params) {
  if (!params.authentication.length) {
    await cleanupAuthentication(params);
  } else {
    await generateCommonAuthentication(params);
    await generateEmailAuthentication(params);
    await generateFacebookAuthentication(params);
    await generateGoogleAuthentication(params);
    await generateTwitterAuthentication(params);
  }
}

module.exports = generateAuthentication;