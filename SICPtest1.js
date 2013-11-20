function squareRoot(x){
	return x*x;
}

function average(x, y){
	return (x+y)/2;
}
function absoluteValue(x){
	x = (x < 0) ? (-x) : x ;
	return x;
}

function aproxSqRt(x, g){
	g = g===undefined ? 1 : g ;
	if((absoluteValue(squareRoot(g)-x)) < 0.001){
		return g;
	}
	else{
		return aproxSqRt(x, average(g, x/g));
	}
}

console.log(aproxSqRt(13));