//Script of function creating

function getTriangleArea(a, h) {
	if ((a > 0) && (h > 0)){
		return a*h/2;
	}

	else {
		return 'Nieprawidłowe dane';
	}	
};

console.log(getTriangleArea(10,6));

	var triangle1Area = getTriangleArea(10,15);
		console.log('Wynik działania (a*h/2) dla triangle1Area: ',triangle1Area);

	var	triangle2Area = getTriangleArea(10,8);
		console.log('Wynik działania (a*h/2) dla triangle2Area: ',triangle2Area);

	var	triangle3Area = getTriangleArea(10,18);
		console.log('Wynik działania (a*h/2) dla triangle3Area: ',triangle3Area);

	