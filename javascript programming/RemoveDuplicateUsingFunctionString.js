function removeDuplicates(rd) {
   
    for(let i=0;i<rd.length;i++)
    {
        var count=0;
        for(let j=0;j<rd.length;j++)
        {
            if(rd[i]==rd[j])
            {
                if(j<i)
                {
                    break
                }
                count=count+1
            }
        
    }
    if(count>=1)
    {
        console.log(rd[i]);
    }
    
}
}
removeDuplicates('Testyantra')