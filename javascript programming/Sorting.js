
    var arr= [1,2,5,4,1,4,4];
  
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length-i; j++) {
            if(arr[j-1]>arr[j]) {
                var temp=arr[j-1];
                arr[j-1]=arr[j];
                arr[j]=temp;	
            }	
        }
    }
    for (var index of arr) {
        console.log(index);
        
    }
    

