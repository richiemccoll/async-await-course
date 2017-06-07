const fetch = require("node-fetch");

async function fetchSoundcloud() {
	const url = `https://api.soundcloud.com/users/underground-riches/favorites?client_id=SxZ147CXpYUuUkX93wX9UcZjqwXcsB1d?offset=50`;
	const response = await fetch(url);
	const data = await response.json();
	console.log(data)
	return data;
}

fetchSoundcloud();
