function showEvenOdd(limit){
//Implementation
for (let i = 0; i < limit +1; i++) {
    (i % 2 ===0)? console.log(i + " EVEN"):console.log(i + " ODD")
  }
}
//Calling function
showEvenOdd(4);
