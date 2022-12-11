var promise=new Promise (function(resolve,reject){
	const x="isha"
	if (x=="ix")
	resolve()
	else{
		reject()
	}
})
	promise.
    then(function () {
        console.log('Success, You are a GEEK');
    }).
    catch(function () {
        console.log('Some error has occurred');
    });
