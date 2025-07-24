const fetch = require('node-fetch');

exports.handler = async () => {
  // Call CountAPI from Netlify (bypasses client DNS issues)
  const res = await fetch('https://api.countapi.xyz/hit/devmatch/visits');
  const { value } = await res.json();
  return {
    statusCode: 200,
    body: JSON.stringify({ visits: value })
  };
};