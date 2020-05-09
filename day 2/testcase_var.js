



main();

function main()
{
    var a  ;
    a=20; 
 
//  var a=undefined;                 //case 1
//  console.log(a);  //var is redeclareable 

//  var a //var is redefinable        //case2
//  console.log(a); 

//case 3    //type casting
//  for(i=6;i>0;i--)
//  {   
  
//       a= String(i);
//      console.log(typeof(a));  // a is converted into a string by string() function
    
// }
//  console.log(typeof(i));      //by default the the type of the variable is decided by the intial definition of its type here i is anumber 
                             
 
 //  case 4 var variable can work anywhere within the block it is declared

 while (a>0)
 {    var b= 1;
    
     console.log(b);            //b will declared and defind  and printed 20 times
    a--;
     
 }
//  console.log('final value:'+b);  // value of b is not defined
 

}



