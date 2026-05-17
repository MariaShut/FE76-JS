/* 
Task 1 💻
У нас есть url для получения одного поста по id с сервера:
https://jsonplaceholder.typicode.com/posts/{id} - один пост по id
Наша задача - отрисовать текст постов на странице.
Нам требуются не все посты, а посты номер 3, 7, 15, 23 (это айдишники постов).
Посты должны загружаться по url https://jsonplaceholder.typicode.com/posts/{id} в определенном порядке:
Сначала 15, потом 23, потом 7 и только потом 3.
Если какой-то из постов не загрузится - вывести в консоль ошибку. 
*/

const app = document.getElementById('app');

function renderPost(post) {
	const p = document.createElement('p');
	p.textContent = `Пост ${post.id}: ${post.body}`;
	app.append(p);
}

async function loadPosts() {
	const ids = [15, 23, 7, 3];

	try {
		for (const id of ids) {
			const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

			if (!response.ok) {
				throw new Error(`Не удалось загрузить пост с id ${id}`);
			}

			const post = await response.json();
			renderPost(post);
		}
	} catch (error) {
		console.error('Ошибка в async/await:', error.message);
	}
}

loadPosts();
