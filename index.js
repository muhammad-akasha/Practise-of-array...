// array practicing..

let ourCities = [" karachi ", " quetta ", " rawalpindi ", " muree ", " lahore "]; //use to different values in one variable.
console.log(ourCities);

ourCities[1] = "islamabad";// in this islamabad has add to index of 1 which was quetta..


//if you check numbers in an array variable typing variable name plus 0 1 2 etc number are add in square braket [ ] an arrays has add numbering to its values start from zero .

console.log(ourCities);

ourCities.push("lala musa"); // to add another value in array at end.

console.log(ourCities);

ourCities.pop();// to remove last added value in an array.

console.log(ourCities);

console.log(ourCities.slice(0,3));//to see array value from starting 3 values.

ourCities.forEach(function(element) {  // to see value in on another line ..
    console.log(element);
});

ourCities.splice(0,1,"gujarkhan","okara","gujrawala");// in this example 0 means start and 1 mean to delete after 0 and add this value ..
console.log(ourCities);

console.log(ourCities.length);

 ourCities.unshift("multan" , "peshawar"); // to add value in start.

 console.log(ourCities);

 ourCities.shift();

 console.log(ourCities);// to remove start value.

 console.log(Object(ourCities));

 
 ourCities.forEach(function(index,element) {  // to see value in on another line ..
    console.log(element,index);
});


ourCities.reverse();

console.log(ourCities);

let veg =["potato"  , "tomato"]


let fruit = ["mango" , "pineapple" , "apple"];

let arrayJoin = ourCities.concat(fruit,veg);// to join different arrays in one array.

console.log(arrayJoin);

let check = veg.entries();

console.log(check.next().value);


let numbers = [10 , 11, 12, 12 ,15];

console.log(numbers.fill(5,1,5)); // fill the array with no 5 .. the first value is for fill second is for start index and last is for to end for filling no 5.

let num = [1000, 11, 12, 12 ,15,1000];

console.log(num)

let findingNum = num.find((element) => element > 14);// to find only one greater then 14 in an array. start finding from index of 0

console.log(findingNum);


let checkLength = ["hello" , "hi" , "welcome" , "to" , "array" , "topic"] 

let lengthResult = checkLength.filter((checkLength) => checkLength.length > 4); // find all greater then 4 word..

console.log(lengthResult);

let  num_str = [1, 100, "a" , "2"]

console.log(num_str.toString());


let myProfile = {
  firstName : "Akasha",
  lastName : "Shahzad",
  age : 23,
  isLike : true,
  isFollow : false,
  comments : ["first" , "second " , "third" , "fourth" , "fifth"]

}

console.log(myProfile);

let smitGulshanCampus = [   ourClass =   {
  ourTeacherName : "Sir Nadir Bashir",
  classTiming : "11:00 am to 1:00 pm ",
  ramzanTiming : "9:30 am to 11:00 am",
  courseName : "WMA - Web And Mobile App Development",
  courseLanguage : "HTML CSS and Javascript",
  studentsInOurClass : 80,

}];

console.log(smitGulshanCampus);

let fruits = ["apple" , "mango" , "peach" , "pineapple" , "strawberry"];

fruits_list = fruits.slice(-3); // in case of - only one value applies for index - start with last value and count reverse mean -1 is strawberry and -2 is pineapple ..

console.log(fruits_list); 

let animals = ["Lion" , "Tiger" , "Zebra" , "Elephant"];

animals.splice(1,1,"Giraffe");

console.log(animals)

let alphabet = [ "a" , "b" , "c" , "d" , "f" , "e" , "h" , "i" , "k" , "g" , "ab" ]

console.log(alphabet.sort());

let letters = [ 1 , 3, 5 ,4,2, 6,8,0 ,9,10 , 91 ,92,93, 94, 95]; // for ascending order line wise example 1234 but if have 11 it will move 11 after 1 because 11 has two value 1 or 1 or 1 is less then 2 its also applied on alphabet..

console.log(letters.sort());

animals.forEach(function(element){
    console.log(element)});

animals.forEach(function(index,element){
    console.log(element,index)
});