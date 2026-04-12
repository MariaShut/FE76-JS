export function generateId() {
	return Math.round(Date.now() + Math.random());
}

export function getFormattedDate() {
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const day = now.getDate();
	const month = now.toLocaleString('ru-RU', { month: 'short' }).replace('.', '');
	return `${hours}:${minutes} ${day} ${month}`;
}
