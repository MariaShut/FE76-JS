export async function getTodos() {
	const url = 'https://jsonplaceholder.typicode.com/todos';

	const response = await fetch(url, {
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});

	return await response.json();
}
