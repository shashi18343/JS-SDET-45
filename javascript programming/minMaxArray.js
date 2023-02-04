	
		var arr= [1,2,5,4,1,4,4];
		var small=arr[0];
		var big=arr[0];
		for (var i = 0; i < arr.length; i++) {
			if(arr[i]<small)
				small=arr[i];
			if(arr[i]>big)
				big=arr[i];		
		}
	console.log(small+ " is smallest ");	
	console.log(big+ " is biggest");
		
	