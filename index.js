// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}
wrapGifts(gifts);

function writeCards(people,event){
  const person =[];
    for (let i =0; i < people.length;i++) {
       person.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
  }
   return person;
}
   console.log(writeCards(["Charlie","Samip","Ali"],"birthday"));

function countDown(num){
  let countdown = 0;
     while (countdown <= num){
       console.log(countdown++);
       
   }
   }
countDown(10);
