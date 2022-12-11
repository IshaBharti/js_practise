function add(num1,num2){
	return num1+num2
}
function cal(callback,num1,num2){
	return callback(num1,num2)	
}
console.log(cal(add,45,5));