function myCounter(n){
     
    if (n < 1){
        return [];
    } else{
        const array = myCounter(n-1);
        array.unshift(n);
        return array;
    }
}
console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));

module.exports = myCounter;