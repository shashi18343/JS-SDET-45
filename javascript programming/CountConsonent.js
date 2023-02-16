function countConsonent(str) {
    let count=0
    for(let i=0;i<str.length;i++)
    {
      
       str=str.toLowerCase()
        for(let j=0;j<str.length;j++)
        {
        if(str[i]==str[j])
        {
            if(j<i)
        {
        count=count+1
        }
    }
    }
    if(count>=1){
        if(str[i]!='a' && str[i]!='e'  && str[i]!='i' && str[i]!='o' && str[i]!='u' && str[i]!=" " )
        {
        console.log(str[i]+ " = "+count);
        
        }
        }
  
}

    
}
countConsonent('hello JavasCript')
