
function occurenceOfChar(ch) {
    for(let i=0;i<ch.length;i++)
    {
        var count=0;
        for(let j=0;j<ch.length;j++)
        {
            if(ch[i]==ch[j])
            {
                if(j<i)
                {
                    break
                }
                count=count+1;
            }

        }
    
    if(count>=1)
   
        {
           console.log(ch[i]+" =  "+count);
        }
    }

}
occurenceOfChar('TestYantra')

