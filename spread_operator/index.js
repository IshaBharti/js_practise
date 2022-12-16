function data(...args){
	let sumOfArgs = 0;
	for (let i=0;i<args.length;i++){
		sumOfArgs=sumOfArgs+args[i]
		console.log(sumOfArgs)}
}
(data(1,23,4))