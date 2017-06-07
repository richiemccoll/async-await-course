const fetch = require("node-fetch");

async function fetchFromGithub(endpoint) {
  const url = `https://api.github.com/${endpoint}`;
  const response = await fetch(url);
  const body = await response.json();
  return body;
}

async function showUserAndRepos(handle) {
    const [user, repos] = await Promise.all([
        fetchFromGithub(`users/${handle}`),
        fetchFromGithub(`users/${handle}/repos`)
    ]);

    console.log(user.name);
    console.log(repos);
}

showUserAndRepos("richiemccoll");