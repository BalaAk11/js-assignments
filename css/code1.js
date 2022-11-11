//var markMass = 78;
//var markHeight = 1.69;
//var johnMass = 92;
//var johnHeight = 1.95;
//let markBMI = markMass / (markHeight*markHeight);
//let johnBMI = johnMass / (johnHeight*johnHeight);
//console.log(markBMI);
//console.log(johnBMI);
//let markHigherBMI = "markBMI > johnBMI";
//console.log(Boolean(markHigherBMI)); code#1

//if (markBMI > johnBMI) code#2
//{
    //console.log(`Marks BMI ${markBMI} is higher than Johns ${johnBMI}`);
//}
//else {
 //   console.log("Marks BMI is not higher");
//}

//code#3

//const calAverage = (s1 ,s2, s3) => (s1 + s2 + s3) / 3;
//const dolphinsAvg1 = calAverage(97, 112, 101);
//const kolasAvg1 = calAverage(109, 95, 106);
//console.log(dolphinsAvg1);
//console.log(kolasAvg1);
//if (dolphinsAvg1 >= 100 && dolphinsAvg1 > kolasAvg1){
  //  console.log("dolphin is winner");
//}
//else if (kolasAvg1 >= 100 && kolasAvg1 > dolphinsAvg1){
  //  console.log("kolas is winner");
//}
//else{
  //  console.log("no one is winner");
//} 

//code#5

// const calAverage = (s1, s2, s3) => ((s1 + s2+ s3 )/ 3);
// // const Dolphins = calAverage(44, 23, 71);
// // const Koalas = calAverage(65, 54, 49);
//  const Dolphins = calAverage(85, 54, 41);
//  const Koalas = calAverage(23, 34, 27);
// console.log('Dolphins score=',Dolphins);
// console.log('Koalas score=',Koalas);

// function checkWinner(avgDolphin,avgKoalas)
// {
//   if(avgDolphin>(avgKoalas*2))
//   {
//     console.log('Dolphin wins');
//   }
//   else if(avgKoalas>(avgDolphin*2))
//   {
//     console.log('Koalas wins');
//   }
//   else{
//     console.log('No team wins');
//   }
// }
// checkWinner(Dolphins,Koalas);
 
//code#7

// const john = {
//   fullName:"John Smith",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   }
// };

// const mark = {
//   fullName: "Mark Miller",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
// }

// };
// console.log('JohnBMI=',john.calcBMI());
// console.log('MarkBMI=',mark.calcBMI());
// if (john.BMI > mark.BMI) {
//   console.log(`${john.fullName}'s BMI ${john.BMI} is higher than ${mark.fullName}'s BMI ${mark.BMI}`);

// }
// else if (mark.BMI > john.BMI) {
//   console.log(`${mark.fullName}'s BMI ${mark.BMI} is higher than ${john.fullName}'s BMI ${john.BMI}`);
// }

// code#4

// const bill = 275;
// const tip = bill * (15 / 100);
// const tip2 = bill * (20 / 100);
// if (bill >= 50 && <= 300){
//   console.log(`tip is ${tip}` );
// }
// else {
//   console.log(`tip is ${tip2}`);
// }
// ternary operator
// const bill=40;
// const tips=(bill>=50 && bill<=300)?bill*0.15:bill*0.2;
// console.log(tips);

//code#6
// const calcTip = function(bill){
//   return (bill >= 50 && bill <= 300) ?bill*0.15:bill*0.2;
// }
// const bill = [125, 555, 44];
// const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
// const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];
// console.log(bill, tip, total);

// code#8
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tip = [];
// const total = [];


// const emp =[
// {empName: prompt('enter the name'),
// empId: prompt('enter id'),
// empCity: prompt('enter city')},
// {empName: prompt('enter the name'),
// empID: prompt('enter number'),
// empCity: prompt('enter city')}
// ];
// console.log(emp);

// Destructuring
// const emp = {
//   firstName: 'bala',
//   lastName: 'ak',
//   address: {
//     city: 
//   {
//   pincode: 34,
//   cityName: 'madurai'
   
    
//   }
// }
//   };
  


// const {firstName}=emp;
// console.log(firstName);
// const {lastName:surName}=emp;
// console.log(surName);
// const {address:{city:{cityName:area}}}=emp;
// console.log(area);

//settimeout()

// const name = () => {
//   console.log('bala');
 
// };

// setTimeout(name,3000);

// setInterval()
// let name = 0;
// let interval = setInterval(() => { 
//   name+=1;
//   console.log('my name is bala');
//   if(name==4){
//     clearInterval(interval);
//   }
// },3000);

// array concat method
// const arr1 = ['red','blue','black'];
// const arr2 = [1, 2, 3];
// const arr3 = ['bb','cc', 'hdh'];
// const arr4 = arr1.concat(arr2,arr3);
// console.log(arr4);
 
// function Declaration
// function add(a,b) {
//   return a+b ;
  
// }
// console.log(add(4,6));

// function expression (anonymous)
// const x = function (a,b){
//   return a/b;
// }
// console.log(x(8,4));

// arrow function
// const y = (a,b) => a-b ;
// console.log(y(6,5));

// if else 
 
// let num= 6;

// if (num%2==0){
//   console.log('num is even');
// }
// else if (num%2!==0){
//   console.log('num1 is odd');
// }
// else {
//   console.log('not a number');
// }

// const emp = [
//   {empName:"bala", id:001, salary:40000},
//   {empName:"prabhu", id:002, salary:50000},
//   {empName:"ashok", id:003, salary:60000}
// ];
// let row = `<tr><th>name</th><th>id</th><th>salary</th><tr>`
// emp.forEach((e=>{
//   row+= `<tr><td>${e.empName}</td><td>${e.id}</td><td>${e.salary}</td></tr>`
// }))
// document.getElementById("row").innerHTML=row;

// ternary operator

// let num = 6;
// let result;
//  result = num%2===0 ? "even" : "odd"
//  console.log(result);
 
//  if (num%2===0){
//   result = 'even'
//  }
//  else {
//   result = "odd"
//  }
//  console.log(result);

// switch case

// let day = "tuesday";
// switch (day) {
//   case 'monday':
//     console.log("7am");
//     break;
//   case 'tuesday':
//     console.log("8am");
//     break;
//   case 'wednesday':
//     console.log("9am");   
//       break;
// }
// console.log("bye");

// while 
// let i = 7;
// while (i<=7){
//   console.log('hello');
//   i++;
// }

// for
// for(let i = 1; i<=4; i++){
//   console.log('exercise task');
//   for(let k=1; k<=7; k++)
//   console.log('run,pushup,rest');
// }

// to get number in reverse
// let num = 56789;
// let rev = 0; 
// while(num>0){
//   rev = rev * 10 + (num % 10)
//   num = parseInt(num/10)
// }
// console.log(rev);


