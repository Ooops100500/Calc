"use strict";


document.addEventListener("DOMContentLoaded",function() {
	var select = document.querySelector('.selec');
	var buttonSub = document.querySelector('.js-buttonSub');
	var buttonRes = document.querySelector('.js-buttonRes');
	var ans = document.querySelector('.js-answer');
	var form = document.querySelector('.form');
	var inputX = document.querySelector('.js-inputX');
	var inputY = document.querySelector('.js-inputY');
	
	function error(errorMs,errorEl) {
		var p = document.createElement("p");
		p.innerText = errorMs;
		p.classList.add('error--text')
		errorEl.after(p);
		errorEl.classList.add('error--back');
	}


	function errorRemove() {
		var errorRemText = form.querySelectorAll('.error--text');
		for (var i = 0; i<errorRemText.length; i++) {
			var er = errorRemText[i];
			er.remove();
		}
	}

	function check(input) {
		var value = input.value;
		if (value.length === 0) { //проверка на пустое поле
			error('Пустая строка', input);
			return false;
		} else if(isNaN(value)) { // Проверка на число
				error('Введите число', input);
				return false;
			} else if (value === ' ') {
				error('Пустая строка', input);
				return false;
			} else {
				value = Number(value);
				return value;
			}
	}
	function answer() {
		var inputX = document.querySelector('.js-inputX');
		var inputY = document.querySelector('.js-inputY');
		var valueX = check(inputX);
		var valueY = check(inputY);
		var selectOption = select.value;
		var sum = 0;
		if (valueX === false && valueY === false) {
			sum = 'Упс';
		} else {
			if (selectOption === 'addition') {
				sum = valueX + valueY;
			}else if (selectOption === 'subtract') {
				sum = valueX - valueY;
			}else if (selectOption === 'multiple') {
				sum = valueX * valueY;
			}else if (selectOption === 'division') {
				if (valueY === 0) {
					sum = "На ноль делить нельзя"
				} else {
					sum = valueX / valueY;
				}
			}
		} return sum;
	}
	buttonSub.addEventListener('click',function(evt) {
		errorRemove();
		ans.value = answer();
		inputX.setAttribute('readonly', '');
		inputY.setAttribute('readonly', '');
	});

	form.addEventListener('submit',function(evt) {
		evt.preventDefault();
	});

	buttonRes.addEventListener('click',function(evt) {
		errorRemove();
		inputX.removeAttribute('readonly');
		inputY.removeAttribute('readonly');
		inputX.classList.remove('error--back');
		inputY.classList.remove('error--back');
	});
});
