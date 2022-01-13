let button=document.querySelector('.btn');
let divNode=document.querySelector('.result');
function showImage(){
	let width=+document.querySelector('.inpt_1').value;
	let height=+document.querySelector('.inpt_2').value;
	if(width<100||height<100||width>300||height>300||isNaN(width)||isNaN(height)){
		divNode.innerText='Введите число в диапазоне 100 до 300';
		divNode.style.color='red';
	}
	else{
		fetch(`https://picsum.photos/${width}/${height}`)
			.then(elem=>divNode.innerHTML = `<img src='${elem.url}' class='card-image'>`)
			.catch(()=>console.log('error'));
	}
}
button.addEventListener('click', showImage);