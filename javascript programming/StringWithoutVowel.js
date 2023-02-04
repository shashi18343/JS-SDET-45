 Ex="TestYantra";
			
 Ex=Ex.toLowerCase();
			var name1="";
           
			for(var i=0;i<Ex.length;i++)
			{
				if(Ex[i]!='a' && Ex[i]!='e' && Ex[i]!='i' && Ex[i]!='o'&& Ex[i]!='u')
				{
					name1=name1+Ex[i];
				}
			}
		console.log("without vowel : "+name1);
		