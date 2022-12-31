let n=5 
let string=""
for (let i=0;i<=n;i++){
	for (let j=0;j<i;j++){
		if (i%2!=0){
		string+="*"
	}}
	string+="\n"
}
console.log(string);