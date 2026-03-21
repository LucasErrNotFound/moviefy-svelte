import { TMDB_ACCESS_TOKEN } from '$env/static/private';

export async function load() {
	const result = await fetch('https://api.themoviedb.org/3/authentication', {
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`
		}
	});
	const data = await result.json();
	return { auth: data };
}
