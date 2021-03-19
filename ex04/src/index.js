function sumFibonacci(num){
   var a = 1;
   var b = 1;
   var temp = 0;
   var sum = 2;
   if(num<= 0){
       return 0;
   }
   if(num == 1){
    return 1;
   }
   while(num>= temp){
    if(temp%2 == 1){
        sum += temp;
    }
    temp = a + b;
        a = b;
        b = temp;
    
   }
    return sum;
}
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;



