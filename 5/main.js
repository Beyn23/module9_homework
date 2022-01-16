let btn = document.querySelector('.btn');
let divNode = document.querySelector('.result');

function addCards(apiData) {
	let cardBlock = '';
	apiData.forEach(elem => {
		let card = `<div class='card'>
			<img src='${elem.download_url}' class='card-image'>
			<p>${elem.author}</p>
			</div>`;
		cardBlock = cardBlock + card;
	});
	divNode.innerHTML = cardBlock;
	divNode.style.color = 'black';
}

function showPictures() {
	let pageNum = +document.querySelector('.value1').value;
	let imgLimit = +document.querySelector('.value2').value;

	if (pageNum < 1 || pageNum > 10 || isNaN(pageNum)) {

		if (imgLimit < 1 || imgLimit > 10 || isNaN(imgLimit)) {
			divNode.innerText = 'Номер страницы и лимит вне диапазона от 1 до 10!';
			divNode.style.color = 'red';
		}
		else {
			divNode.innerText = 'Номер страницы вне диапазона от 1 до 10!';
			divNode.style.color = 'red';
		}
	}
	else if (imgLimit < 1 || imgLimit > 10 || isNaN(imgLimit)) {
		divNode.innerText = 'Лимит вне диапазона от 1 до 10!';
		divNode.style.color = 'red';
	}
	else {
		fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=${imgLimit}`)
			.then(response => response.json())
			.then(data => {
				addCards(data);
				localStorage.setItem('myImgs', JSON.stringify(data));
			})
			.catch(() => console.log('error'));
	}
}

btn.addEventListener('click', showPictures);

window.onload = () => {
	let myImgs = localStorage.getItem('myImgs');
	if (myImgs) addCards(JSON.parse(myImgs));
}