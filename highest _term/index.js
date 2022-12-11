let num=[1,3,4,5,6000,760,7987,80]
let first=0
let second=0
for (let i=0;i<num.length;i++){
	if (num[i]>first){
		second=first
		first=num[i]
	}
	else if(num[i]>second && num[i]!=first){
		second=num[i]

	}

}
console.log(first)
console.log(second)