var x=[1,2,3,4,5,6,7,8,9,10];
var sum=0;
var i;
var min=x[0];
var max=x[0];
document.write('  <table border="2" width="500" height="300" cellpadding="10" cellspacing="10" align="center"> <tr align="center" valign="top" bgcolor="lightpink"><th >numbers</th></tr>')
            for(i=0;i<x.length;i++)
            {
			     sum+=x[i];
                if(min >x[i]){
                    min=x[i];
                }
                 if(max<x[i]){
                    max=x[i];
                }
    document.write('<tr><td align="center">'+x[i]+'</td></tr>')        
				 }
        document.write('<tr><td align ="center"> sum='+sum+'</td></tr>')
        document.write('<tr><td align ="center"> min='+min+'</td></tr>')
        document.write('<tr><td align ="center"> max='+max+'</td></tr></table>')
var sum1=0;
var min1=x[5];
var max1=x[5];
document.write('  <table border="2" width="500" height="300" cellpadding="10" cellspacing="10" align="center"> <tr align="center" valign="top" bgcolor="lightpink"><th >numbers</th></tr>')
            for(i=0;i<x.length;i++)
            {
                if ((x[i]%2)==0)
                {
                    sum1+=x[i];
                    document.write('<tr><td align="center">'+x[i]+'</td></tr>') 
                    if(min1 >x[i]){
                    min1=x[i];
                    }
                 if(max1<x[i]){
                    max1=x[i];
                    }
                }
              
	       
				 }
        document.write('<tr><td align ="center"> sum='+sum1+'</td></tr>')
        document.write('<tr><td align ="center"> min='+min1+'</td></tr>')
        document.write('<tr><td align ="center"> max='+max1+'</td></tr></table>')
var sum2=0;
var min2=x[5];
var max2=x[5];
document.write('  <table border="2" width="500" height="300" cellpadding="10" cellspacing="10" align="center"> <tr align="center" valign="top" bgcolor="lightpink"><th >numbers</th></tr>')
            for(i=0;i<x.length;i++)
            {
                if ((x[i]%2)!==0)
                {
                    sum2+=x[i];
                    document.write('<tr><td align="center">'+x[i]+'</td></tr>')  
                    if(min2 >x[i]){
                    min2=x[i];
                    }
                    if(max2<x[i]){
                    max2=x[i];
                    }
                    }
              }
        document.write('<tr><td align ="center"> sum='+sum2+'</td></tr>')
        document.write('<tr><td align ="center"> min='+min2+'</td></tr>')
        document.write('<tr><td align ="center"> max='+max2+'</td></tr></table>')
   


               
               