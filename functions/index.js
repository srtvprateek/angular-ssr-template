const functions = require("firebase-functions");
const websiteSrc = require(`${process.cwd()}/dist/server/main`).app();

exports.websiteSSR = functions.https.onRequest(websiteSrc);
