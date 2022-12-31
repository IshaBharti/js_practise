let arr=[1,2,4,3,45,4,5,4,5]
let data=arr.filter((item, 
		index) => arr.indexOf(item) === index);

console.log(data);
