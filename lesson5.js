const fetch = require("node-fetch");

async function fetchFromGithub(endpoint) {
  const url = `https://api.github.com/${endpoint}`;
  const response = await fetch(url);
  const body = await response.json();
  return body;
}

async function showUserAndRepos(handle) {
    const userPromise = fetchFromGithub(`users/${handle}`);
    const reposPromise = fetchFromGithub(`users/${handle}/repos`);

    const user = await userPromise;
    const repos = await reposPromise;

    console.log(user.name);
    console.log(repos.length);
}

showUserAndRepos("richiemccoll")