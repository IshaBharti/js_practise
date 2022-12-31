let arr=[1,3,56,78,74,77,77,78,56]
let first =0
let second=0
for (let i=0;i<arr.length;i++){
	if (arr[i]>first){

		first=arr[i]
	}
	else if(arr[i]>second && arr[i]!=first){
		second=arr[i]

	}
	
}
console.log(second)

