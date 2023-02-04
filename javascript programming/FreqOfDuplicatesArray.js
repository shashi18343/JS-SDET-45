let array = [ 1, 2, 5, 4, 1, 4, 4 ];     
    for (let i = 0; i < array.length; i++)
     {         
            let count = 0; 
    for (let j = 0; j < array.length; j++)
     {                 if (array[i] == array[j]) 
        {                    
             if (j < i) 
             {             
                            break; 
            }                  
               count++; 
        }           
      } 
    if (count > 1) { 
     console.log(array[i] + "==> " + count); 
    } 
} 
