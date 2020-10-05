module.exports = function reverse (n) {
   n = n.toString();
   if(n.slice(0,1) === '-'){
     n = n.slice(1);
   }
   return (
     parseFloat(
       n
         .toString()
         .split('')
         .reverse()
         .join('')
     ) * Math.sign(n)
   )  
}
