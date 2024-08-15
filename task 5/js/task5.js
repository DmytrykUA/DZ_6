//Інвестор вклав S тис. грн на 20 років під 20% річних. Визначити за допомогою циклів суму, яку він одержить (без оподаткування).


let userAmount = parseFloat(prompt('Яку суму внести?'))

for (let i = 1; i <= 20; i++) {
	userAmount += userAmount * 0.2

	document.write(`За місяць ${i} ${userAmount.toFixed(2)} <br>`)
}

