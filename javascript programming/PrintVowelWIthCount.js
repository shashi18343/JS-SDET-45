var name2='TestYantra'
       for (let i = 0; i < name2.length; i++) 
       {          
         let count =0; 
    for (let j = 0; j < name2.length; j++)
     {           
              if(name2[i]==name2[j]) {                     
                if(j<i) {                       
                      break; 
            }     
         count++; 
          }         
        } 
    if(count>=1)
     { 
        if(name2.charAt(i)=='a'||name2.charAt(i)=='e'||name2.charAt(i)=='i'||name2.charAt(i)=='o'||name2.charAt(i)=='u')
        {
        console.log(name2[i]+"==> "+count); 
        }
    } 
}    
