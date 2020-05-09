main();
function main()
{
    
// let a;
//     a=20; 
 
// //  let a=undefined;                 //case 1
// //  console.log(a);  //let is not redeclareable 

//  a=78;//let is redefinable        //case2
//   console.log(a); 

  i=0;
  while(i<10)
  {
      let b="print"+i;
      console.log(b);
      i++;
  }
 console.log(b);    // case 3 lt variable will work under the particular block where it is declared   here  error is b is not declared
 
}