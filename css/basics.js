//Basic operators
//Math operator

// const currentYear=2022;
// const balaDob=2000;
// const prabhuDob=2001;

// const ageOfBala=currentYear-balaDob;
// const ageOfPrabhu=currentYear-prabhuDob;

//Assignment operator
//let x=10+5;
// console.log(x++);
// console.log(++x);
// x+=2;//x=x+2;
// console.log(x);

//Comparison operators <,<=,>,>=,==,!=

// console.log('ageof Bala=',ageOfBala,'ageOfPrabhu=',ageOfPrabhu);
// console.log(ageOfBala>ageOfPrabhu);

//operator precedence

// let x=(10+5)*3/2;
// console.log(x);

// string and Template string

// const firstName="Jeeva";
// const job="teacher";
// const birthYear=2000;

//I'm Jeeva,a 22 years old Teacher
// const jeeva="I'm "+firstName+", a "+(2022-birthYear)+" years old "+job;
// const jeeva=`I'm ${firstName} a ${2022-birthYear} years old ${job}`;
// console.log(jeeva);

//If-else
//conditional statement

// if(5>6)//if(condition)
// {
//     console.log('one');//true statements
// }
// else
// {
//     console.log('two');//false
// }

// let username="azure";
// let password="azure123";
// if(username=='azure')//if(condition)
// {
//     console.log('welcome ',username);//true statements
// }
// else
// {
//     console.log('Invalid id');//false
// }


//Logical operators &&-and ||-or !-Not
// let username=prompt('Enter username');
// let password=prompt('Enter password');
// if((username=='azure') && (password=='azure123'))//if(condition)
// {
//     console.log('welcome ',username);//true statements
// }
// else
// {
//     console.log('Invalid id');//false
// }
// Type conversion and coersion
// --------------------------------
 //  const x = '10';
 //  console.log(Number(x)+20);
 //  console.log(x-20); 

     //const fav = Number(prompt("enter fav number"));
     /*console.log(typeof fav);
     if (fav===44){
        console.log('44 is my fav number');
     }
     else if(fav===33){
        console.log("33 is fav number");
    
     }
     
     else if(fav===22){
       console.log("22 is fav number");
    
     }
    else{
    console.log('not a fav number');
    } */
    
    //Function
    //------------------
   //  Function Declaration
   //  function calAge1(birthYear)
   //  {
   //    return 2022-birthYear;
   //  }
   //  Function Expression
   // 1.Anonymous Function

   // console.log(calAge1(1991));
   // const calAge2=function(birthYear)
   //                {
   //                   return 2022-birthYear;
   //                }

   //       console.log(calAge2(2000));
   //    // 2.Arrow function

   // const calAge3=(birthYear)=>{
   //    return 2022-birthYear;
   // }
   //    console.log(calAge3(1999));

   //Array
   //----------------
   //Bundle of data will be stored in array

   //syntax
   // const arr=[];//array creation


    //const friends=["Mahendran","Bala","Senthil","Prabhu"];
   // console.log(friends);
   // console.log(friends[2]);//arr[index]

  //  console.log(friends.length);

  //  friends[friends.length]="Mohan";
  //  console.log(friends);

   //Array creation before ES6
// const year=new Array(19911,2000,2002,1998,1997);
// console.log(year);
// const friends=["Mahendran","Bala","Senthil","Prabhu"];
// const jhon=['Jhon','rainbow',2022-1993,'teacher',friends];

// console.log(jhon);
// console.log(jhon[2]);

// const year=[1991,1984,2019,2020,1980];

// const calAge=(birthYear)=>
// {
//    return 2022-birthYear;
// }
// let age1=calAge(year[0]);
// let age2=calAge(year[1]);

// const age=[calAge(year[0]),calAge(year[1]),calAge(year[2]),calAge(year[3]),calAge(year[4])];
// console.log(age);

//Array methods
// const friends=["Mahendran","Bala","Senthil","Prabhu"];
// console.log(friends);
//pop()--remove last element

// friends.pop();
// console.log(friends);

//add elements--push()
// friends.push("Mohan");
// console.log(friends);

//shift() method removes the first array element 
// friends.shift();
// console.log(friends);
//Initial add--unShift()

// friends.unshift("Selva");
// console.log(friends);

//concat()
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);

// Splicing and Slicing Arrays

// let arr=['a','b','c','d','e'];
// console.log(arr);

//slice()

// console.log(arr.slice(2));//c,d,e
// console.log(arr.slice(1,4));//b,c,d
// console.log(arr.slice(-2));//d,e
// console.log(arr.slice(1,-2));//b,c

//splice()
// console.log(arr.splice(2));
//  console.log(arr.splice(-1));
// console.log(arr.splice(1,3));

// console.log(arr.reverse());

//Object
// ------------------

// const jhon={
//    firstName:"Jhon",
//    lastName:"robert",
//    age:2022-1999,
//    job:'teacher',
//    friends:['Michel','peter','steve']
// };
//  console.log(jhon);

//Array---bundles of data-->index access
//Object--->key (property name)-value access

//Dot vs bracket notation

// objvar.propertyName
// console.log(jhon.job);
//objvar["propertyname"]
// console.log(jhon["friends"]);

// const jhonInfo=prompt("What do u want about jhon,choose between firstName,lastName,age,friends,job");

// console.log(jhon[jhonInfo]);//property is assigned from outside variable through []notation,but can't be accessed by dot notation

//challenge
//Jhon has 3 friends,and his best friend is called Michel

// console.log(`${jhon.firstName} has ${jhon.friends.length} friends,and his best friend is called ${jhon.friends[0]}`);

//Object Methods
//---------------------


// const jhon={
//    firstName:"Jhon",
//    lastName:"robert",
//    birthYear:1999,
//    job:'teacher',
//    friends:['Michel','peter','steve'],
//    hasDrivLic:true,
//    //function written inside object is called method
//    calAge:function(){
//       console.log('inside object',this);
//       return 2022-this.birthYear;
//    }
// };

// const calAge1=function()
// {
//    console.log('function inside',this);
//    return 2022-jhon.birthYear;
// }

// console.log('alone',this);
//  console.log(calAge1());
//  console.log(jhon.calAge());

//to check michel is present inside friends array

//arr.includes(),arr.indexOf()
// console.log(jhon.friends.indexOf('Michels'));
// if(jhon.friends.includes('Michel'))
// {
//    console.log('yes');
// }
// else{
//    console.log('not found');
// }

// Iteration:for loop,continue and break,Looping backward and loops in loops,while loop
//-----------------------------------------------------------------------

// for loop
// -----------

//syntax
// for(initialization;condition;increment or decrement)
// {
      //statements
// }

// for(let i=1;i<=10;i++)
// {
//    console.log(i);
// }

// const number=[1,2,3,4,5,6,7,8,9,10];
// console.log(number);
// console.log(number[2]);
// for(let i=0;i<number.length;i++)
// {
//    console.log(number[i]*2);
// }

//to print even numbers
// let even=[];
// let odd=[];
// for(let i=0;i<number.length;i++)
// {
//    if(number[i]%2==0)
//    {
//       even.push(number[i]);
//    }
//    else
//    {
//       odd.push(number[i]);
//    }
   
// }

 // console.log('Even numbers :',even);
// console.log('Odd numbers :',odd);

//sum of array values
// const n=[10,20,30,40,50];
// // let sum=n[0]+n[1]+n[2]+n[3]+n[4];
// let sum=0;

// for(let i=0;i<n.length;i++)
// {
 //   sum+=n[i];//sum=sum+n[i]
// }
// console.log(sum);

//Find age and store ages in another array
//const year=[1991,1998,1983,1973,2020];
// const age=[];

//age=2022=year[0]
// for(let i=0;i<year.length;i++)
// {
//    age.push(2022-year[i]);//arr.push(value)
// }

// console.log(age);

//To print employee data into table
// const emp=[
//    {eid:1,ename:"Bala",city:"Madurai"},
//    {eid:2,ename:"Mahendra",city:"Kovilpattii"},
//    {eid:3,ename:"Prabhu",city:"Madurai"},
//    {eid:4,ename:"Senthil",city:"Madurai"},
// ];

// console.log(emp[2]);
// let rowele="<tr><th>EmpId</th><th>EmpName</th><th>Address</th></tr>";

// for(let i=0;i<emp.length;i++)
// {
//    rowele+=`<tr><td>${emp[i].eid}</td><td>${emp[i].ename}</td><td>${emp[i].city}</td>`;
// }
// document.getElementById('employee').innerHTML=rowele;

//switch case
// switch(expression) {
//    case x:
//      // code block
//      break;
//    case y:
//      // code block
//      break;
//    default:
//      // code block
//  }

//simple calculator using switch case
// const num1=prompt('Enter first number');
// const num2=prompt('Enter second number');
// const opr=Number(prompt('select the operation 1.Add 2.sub 3.mul 4.div'));

// switch(opr) {
   // case 1:
   //   console.log('sum=',num1+num2);
   //   break;
  //  case 2:
    //   console.log('sub=',num1-num2);
   //   break;
  //  case 3:
   //    console.log('mul=',num1*num2);
   //   break;
   // case 4:
   //    console.log('div=',num1/num2);
     // break;
   // default:
  //    console.log('Invalid choice,choose the number b/w 1 to 4');
//  }

 
//Continue and break
// for(let i=0;i<10;i++)
// {
//    if(i==5)
//    {
//       break;
 //   }
 //   console.log(i);
// }

//to print even 
// for(let i=0;i<10;i++)
// {
//    if(i%2!=0)
//   {
//      continue;
//   }
//    console.log(i);
// }

//Looping Backward and loops in loops
//------------------------------------
// const jhon=['Jhon','Robert',20,['Peter','steve','Michel'],'Teacher'];
// // console.log(jhon);
// for(let i=jhon.length-1;i>=0;i--)
// {
//    console.log(jhon[i]);
// }

// for(let Exercise=1;Exercise<=4;Exercise++)
// {
//   console.log(`----------Starting Exercise--------${Exercise}` );
//   for(let rep=1;rep<=10;rep++)
//   {
//      console.log(`Exercise ${Exercise} Lifting weight Rep ${rep}`);
//   }
// }

//While loop
//-------------
// let i=0;
// while(i<10)
// {
//   console.log(i);
//   i++;
// }

//do-while
// ----------------
// initial value;
// do{
//   statememnts;
//   incre/decre
// }while(condition);

// let dice=1;

// // console.log(Math.trunc(Math.random()*6)+1);

// while(dice!==6)
// {
//   //write dice formula
//   dice=Math.trunc(Math.random()*6)+1;
// console.log(dice);
//   if(dice===6)
//   {
//     console.log('Loop is about to end');
//   }
// }

//ES6
// -----------

// call-apply-bind()
// -----------------
//want to use same function for multiple objects
//this--->current context
//this--->object which calls the function it contains

// array=[1,2,3,4,5];
// function display()
// {
//   console.log(this);
//   console.log(this.array);
// }
// display();

// const obj1={
//   num:5,
//   name:'jhon'
// };

// const obj2={
//   num:10
// };


// const add=function(a,b)
// {
//   console.log(this.num,a,b);
//   console.log(this.num+a+b);
// }


//functionName.call(obj,arguments as comma specified)

// add.call(obj1,10,20);
// add.call(obj2,100,200);

// functionName.apply(obj,[arguments])

// add.apply(obj1,[10,20]);
// add.apply(obj2,[100,200]);

//bind()
// const bound=add.bind(obj1);
// console.log(bound);

// bound(10,20);


// add.call(obj1,10,20);
// add.apply(obj2,[100,200]);
// const bound1=add.bind(obj2);
//  bound1(10,20);
// const fullName=function()
// {
//   console.log(this.firstName+this.lastName);
// };


// const employeeAzure={
//   firstName:"Bala",
//   lastName:"Murugan"
// }

// const employeeCRUD={
//   firstName:"Siva",
//   lastName:"Sankar"
// };


// fullName.call(employeeAzure);
// fullName.apply(employeeCRUD);

// const fnAzure=fullName.bind(employeeAzure);

// fnAzure();

// let arr=['a','b'];
// let arr1=[1,2,3];

//output ['a','b',1,2,3]

// console.log(arr.concat(arr1));//['a','b',1,2,3]
// arr.push(arr1);
// console.log(arr);//['a','b',[1,2,3]]
// arr.push.apply(arr,arr1);
// console.log(arr);

// spread operators,Deep copy and shallow copy
//------------------------------------------------

//ES6-spread operator
// let arr=['a','b'];
// let arr1=[1,2,3];
// console.log(arr);//['a','b']

// console.log(...arr);//a b

// const newArray=[...arr,...arr1];
// console.log(newArray);

//Reference Datatype--array,object
//value datatype---primitive datatype,number,string

//Value datatype
//  let a=10;
//  let b=a;
//  console.log('a=',a,'b=',b);
//  b=20;
//  console.log('a=',a,'b=',b);
//Reference datatype--takes same memory location
//  const arr1=[10,20,30,40,50];
//  const arr2=arr1;
//  console.log('arr1=',arr1,'arr2=',arr2);
//  arr2[1]=200;
//  console.log('arr1=',arr1,'arr2=',arr2);

// const emp1={
//   eid:1,
//   empName:"Jhon",
//   salary:30000
// };
// const emp2=emp1;
// console.log('emp1=',emp1,'emp2=',emp2);
// emp2.salary=50000;
// console.log('emp1=',emp1,'emp2=',emp2);

//copy --Reference datatype
//1.Object.assign()--ES5
//2.spread operator--ES6
//3.JSON.parse(JSON.Stringify())--ES6

//Object.assign()
// const arr1=[10,20,30,40,50];
// const arr2=Object.assign([],arr1);
// console.log('arr1=',arr1,'arr2=',arr2);
// arr2.push(60);
// console.log('arr1=',arr1,'arr2=',arr2);

// const emp={
//   eid:1,
//   empName:"Jhon",
//   salary:30000
// };
// const newEmp=Object.assign({},emp);

// const newEmp={...emp};
// console.log('Emp\n-------------\n',emp);
// newEmp.salary=50000;
// console.log('New Emp\n-------------\n',newEmp);
//Spread operator (...)
// const arr1=[10,20,30,40,50];
// const arr2=[...arr1];
//  console.log('arr1=',arr1,'arr2=',arr2);
// arr2.pop();
//  console.log('arr1=',arr1,'arr2=',arr2);

//JSON.parse(JSON.stringify())
// const newEmp=JSON.parse(JSON.stringify(emp));
// newEmp.empName="Peter";
// console.log('emp ');
// console.log('----------------');
// console.log(emp);
// console.log('New Emp\n-------------\n',newEmp);

//Nested Objects
// const emp={     //first level
//   eid:1,
//   ename:"Naveen",
//   addr:{        //Second Level
//     city:"Madurai",
//     pincode:626289
//   },
//   salary:30000

// };

// const newEmp={...emp};
// const newEmp=Object.assign({},emp);//---change only first level of elements
// const newEmp=JSON.parse(JSON.stringify(emp));
// console.log('Emp\n-------------\n',emp);
// newEmp.salary=50000;
// newEmp.ename="Gowtham";
// newEmp.addr.city="Chennai";
// console.log('New Emp\n-------------\n',newEmp);

//Object Destructuring
//--------------------
//to extract the properties from object and assign them to separate variable
// const arr=[10,20,30,40,50];

// let a=arr[0];
// let b=arr[1];
// let c=arr[2];

//Array destructuring
// let [a,,c,...rest]=arr;
// console.log(a,c,rest);


// const emp={     //first level
//   eid:1,
//   ename:"Naveen",
//   addr:{        //Second Level
//     city:"Madurai"
       
//   },
//   salary:30000

//  };

// const {ename}=emp;
// console.log(emp.ename);//without destructuring
// console.log(ename);

// const {ename:name}=emp;//to assign different name {property:diffName}
// console.log(name);

// console.log(emp.addr.city);

// const {addr:{city}}=emp;
// console.log(city);
// const {addr:{city:cityName}}=emp;
// console.log(cityName);
// const emp={     //first level
//   eid:1,
//   ename:"Naveen",
//   addr:{        //Second Level
//     city:{
//       cityName:"Madurai",
//       pincode:626289
//     }
   
//   },
//   salary:30000

// };

// console.log(emp.addr.city.pincode);
// const {addr:{city:{pincode:pin}}}=emp;
// console.log(pin);

// const objA={obj1:
// {
//   obj2:
//   {
//     obj3:
//     {
//       obj4:
//       {
//         course:"React"
//       }
//     }
//   }
// }};

// const objB={obj1:
//   {
//     obj2:
//     {
//       obj3:
//       {
//         obj4:
//         {
//           course1:"Angular"
//         }
//       }
//     }
//   }};
// // console.log(objA.obj1.obj2.obj3.obj4.course);
// const {obj1:{obj2:{obj3:{obj4:{course}}}}}=objA;
// const {obj1:{obj2:{obj3:{obj4:{course1}}}}}=objB;
// console.log(course);

//function parameter destructuring
// const emp={
//   name:"Mohan",
//   city:"Madurai"
// };
// function printName({name})
// {
//   console.log("function destructuring to print emplyee name ",name);
// }

// printName(emp);
// callback function-setTimeout(),setInterval()
//--------------------------------------------
//one function give as input for other function

//setTimeout(function,time in ms);--will execute after given seconds
// let count=0;
// let timeout=setTimeout(()=>{
  
//   console.log('setTimeout is called');
//   count++;
//   // if(count==2)
//   // {
//   //   clearTimeout(timeout);
//   // }
// },5000);

//  function displayMsg()
// {
//   console.log('Welcome to all');
// }


// setTimeout(displayMsg,5000);

//setInterval()--->will execute every given seconds

// let i=0;
// let interval=setInterval(()=>{
//   i+=1;
//   console.log("setInterval is called ",i);
//   if(i==5)
//   {
//     clearInterval(interval);
//   }
// },5000);

//Asynchronus function
// console.log('step 1');
// console.log('step 2');
// setTimeout(()=>console.log('step 3'),3000);
// console.log('step 4');
// console.log('step 5');

// function bgcolor()
// {
//   document.body.style.backgroundColor="red";
// }

// document.getElementById('greenbtn').onclick=bgcolor;

//document.getElementById('greenbtn').addEventListener("click",bgcolor);

// IIFE-Immediately Invoked Function Expression
//it will execute you defined ,execute only once,page-refresh
//no function name

//ES5
// (
//   function(parameter)
//   {
//     //statements
//   }
// )(arguments);

// (
  //write IIFE
// )

// (
//   function(a,b)
//   {
//     console.log('IIFE ',a+b);
//   }
// )(10,20);

//ES6
// (
//   (a,b)=>
//   {
//     console.log('IIFE ',a+b);
//   }
// )(10,20);

// -------------------------------
// Variable hoisting and function hoisting
//-------------------------------------
// var a;
// console.log(a);//undefined

// console.log(b);
// var b=8;//undefined
// let b;//basics.js:843 Uncaught ReferenceError: Cannot access 'b' before initialization

//var-function level scope
//let,const--block level scope
// Variable hoisting
//------------------
// function hoist()
// {
//   g=10;//if you don't use var,let,const then it will be assign as global variable
//   var h=20;//loval variable

//   console.log('inside hoist g=',g);//10
//   console.log('inside hoist h=',h);//20

// }

// hoist();

// console.log('outside hoist g=',g);//g=10
// console.log('outside hoist h=',h);//h is not defined
// i=50;
// console.log(i);
//Function hoisting
// ------------------
// 1.Function declaration
// 2.Anonymous function
// 3.Arrow function
// 4.Callback function
// 5.closure function
// 6.Recursive function

//Function declaration

// printFunDesc();
// function printFunDesc()
// {
//   console.log('Function declaration is called');
// }

//Function expression--1.Anonymous function 2.Arrow function
// printFunDesc1();//Uncaught ReferenceError: Cannot access 'printFunDesc' before initialization
// const  printFunDesc1=function()
// {
//   console.log('Anonymous Function  is called');
// };
// printFunDesc2();Cannot access 'printFunDesc2' before initialization
// const  printFunDesc2=()=>
// {
//   console.log('Arrow Function is called');
// };

// function displayMsg()
// {
//   console.log('JS is Amzing');
// }

// setTimeout(displayMsg,5000);//callback function

//function--code reusablity
// function add(name)
// {
//   return 'Welcome '+name;
// }

// var msg=add('Mahendra');//fun_name(arguments);//function call
// console.log(msg);
// console.log(add('Selva'));
// console.log(add('Bala'));
// console.log(add('Navven'));

//Closure function
//-------------------------

//A closure is the combination of a function bundled together
//(enclosed) with references to its surrending state
//inner function have access to outer function variable
//syntax
// function sum(a)
// {
//   return function add(b)
//   {
//     return a+b;
//   }
// }

// console.log(sum(10)(5));
    // (Or)
// let sumOf=sum(10);
// let res=sumOf(50);
// console.log(res);

// EX2:Closure function
// function makeFun(a)
// {
//   let searchEngine='closure active';
//   function displayMsg(b)
//   {
//     alert(searchEngine);
//     return a+b;
//   }
//   return displayMsg;
// }

// const myFunc=makeFun(5);
// console.log(myFunc(20));

      // (Or)

// const myFunc=makeFun(5)(10);
// console.log(myFunc);

//for-of-in-each
//---------------
// const arr=[10,20,30,40,50];
// arr[5]=60;
// arr['name']="Mahendra";

// console.log('Normal for-loop\n--------------');

// for(let i=0;i<arr.length;i++)
// {
//   console.log('arr['+i+']=',arr[i]);
// }


// console.log(' for-of-loop\n--------------');

// for(let value of arr)
// {
//   console.log(value);
// }

// console.log(' for-in-loop\n--------------');

// for(let i in arr)
// {
//   console.log(arr[i]);
// }

// console.log(' for-each-loop\n--------------');

// arr.forEach((e)=>console.log(e));

//Array of objects
// const student=[
//   {name:'Mahendra',sports:'cricket'},
//   {name:'Prabhu',sports:'football'},
//   {name:'Naveen',sports:'kabadi'},
  
// ];
    
//using for-of
// for(let stu of student)
// {
//   console.log(stu);
// }
//using for-in
// for(let stu in student)
// {
//   console.log(student[stu]);
// }

// using for-each
// ------------------

// student.forEach((stu)=>{console.log(stu.name)});

// #Exercise for-each
// const emp=[{eid:1,enmae:"Prabhu",salary:40000},
// {eid:2,enmae:"Bala",salary:50000},
// {eid:3,enmae:"Deva",salary:20000},
// {eid:4,enmae:"Naveen",salary:40000},
// {eid:5,enmae:"Gowtham",salary:30000},
// ];
// console.log(emp);

//To list employee names using normal for-loop
//--------------------------------------
// let list="<ul>";
// for(let i=0;i<emp.length;i++)
// {
//   list+=`<li>${emp[i].enmae}</li>`;
// }
// list+='</ul>';
// document.getElementById('empList').innerHTML=list;
// //using for-of
// //----------------
// let list="<ul>";
// for(let e of emp)
// {
//   list+=`<li>${e.enmae}</li>`;
// }
// list+='</ul>';
// document.getElementById('empList').innerHTML=list;

// //using for-in
// //----------------
// let list="<ul>";
// for(let index in emp)
// {
//   list+=`<li>${emp[index].enmae}</li>`;
// }
// list+='</ul>';
// document.getElementById('empList').innerHTML=list;

//using for-each
//----------------
// let list="<ul>";
// emp.forEach((e)=>{
//   list+=`<li>${e.enmae} ${e.salary}</li>`;
// })
// list+='</ul>';
// document.getElementById('empList').innerHTML=list;

//Default parameter(ES6)
// -----------------
//if we don't pass a,b values in func argumnets then it takes default values from function parameter
// function sumWithDefault(a=1,b=0)
// {
//   console.log(a,b);
//   return a+b;
// }

// console.log(sumWithDefault(10,20));
// console.log(sumWithDefault(5));//a=5,b=undefined so we get 5+undefined=NaN

//Default parameter(ES5)
// function sumWithDefault(a,b)
// {
//   a=(a===undefined)?5:a;//Ternary or conditional operator--> (condition)?true value:falsevaue;
//   b=(b===undefined)?10:b;
//   return a+b;
// }

// // console.log(sumWithDefault(10,20));
// console.log(sumWithDefault(100));//110
// console.log(sumWithDefault());//15

//Arguments-->javascript built-in store local array --arguments variable
//------------
// function printArg()//here no need to create local variable
// {
//   // console.log('Arguments ',arguments,typeof arguments);
//   let sum=0;
//   for(let i=0;i<arguments.length;i++)
//   {
//     sum+=arguments[i];
//   }
//   console.log('sum of values stored in arguments array=',sum);
// }
// printArg(10,20,30);
// printArg(10,20,30,40,50);

//Rest parameter(Es6)
//---------------
// function restValues(...res)
// {
//   console.log('res ',res,typeof res);
//   let sum=0;
//   for(let i=0;i<res.length;i++)
//   {
//     sum+=res[i];
//   }
//  return sum;
// }
// console.log('rest values ',restValues(1,2,3,4,5,6));//the values are stored as array(...res)
// console.log('rest values ',restValues(1,2,3,4));
//if give function restValues(a,b,...rest);
//but don't specify any parameter next to the rest parameter
//restValues(a,b,...rest,c);

// const n=[1,2,3,4,5,6,7,8,9,10];
// let [a,...rest,b]=n;//gives error,rest parameter must be last element in the array
// console.log(rest);

//------------------------------------------------------------------------
//map-reduce-filter()
//-------------------------------------------------------------------
//map()-->used to create a new array from an existing array
// const arr=[1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i<arr.length;i++)
// {
//   console.log(arr[i]*2);
// }

// const newArr=arr.map((n)=>{return n*2});//arr.map(n=>n*2)
// console.log(newArr);

// Exercise #2->To display employee name and salary using map()
// -----------
// const emp=[{eid:1,enmae:"Prabhu",salary:40000,city:'Chennai'},
// {eid:2,enmae:"Bala",salary:50000,city:'Madurai'},
// {eid:3,enmae:"Deva",salary:20000,city:'Madurai'},
// {eid:4,enmae:"Naveen",salary:40000,city:'Trichy'},
// {eid:5,enmae:"Gowtham",salary:10000,city:'Chennai'},
// {eid:5,enmae:"Selva",salary:60000,city:'Chennai'},
// ];
// //newArr=oldArr.map(func);
// const newEmp=emp.map(e=>e.city);
// console.log(newEmp);

// let table="<table border='1px'><tr><th>EmpName</th><th>Salary</th></tr>";
// const employeeList=emp.map((e)=>{
//     table+=`<tr><td>${e.enmae}</td><td>${e.salary}</td></tr>`;
// });
// table+='</table>';
// document.getElementById('empList').innerHTML=table;


//to return employee salary>30000
//  const newEmp=emp.filter(e=>e.salary>=30000);
// let table="<table border='1px'><tr><th>EmpName</th><th>Salary</th></tr>";
// const employeeList=newEmp.map((e)=>{
//     table+=`<tr><td>${e.enmae}</td><td>${e.salary}</td></tr>`;
// });
// table+='</table>';
// document.getElementById('empList').innerHTML=table;
// console.log(newEmp)

// const emp=[{eid:1,enmae:"Prabhu",salary:40000,city:'Chennai'},
// {eid:2,enmae:"Bala",salary:50000,city:'Madurai'},
// {eid:3,enmae:"Deva",salary:20000,city:'Madurai'},
// {eid:4,enmae:"Naveen",salary:40000,city:'Trichy'},
// {eid:5,enmae:"Gowtham",salary:10000,city:'Chennai'},
// {eid:5,enmae:"Selva",salary:60000,city:'Chennai'},
// ];

//to display employee name and city
// let listemp='<table border="1px"><tr><th>EmpName</th><th>City</th></tr>';
// emp.map((employ)=>{
//   // console.log(employ.enmae,employ.city);
//   listemp+=`<tr><td>${employ.enmae}</td><td>${employ.city}</td></tr>`;
// });
// listemp+='</table>';
// document.getElementById('empList').innerHTML=listemp;

//to display employee details city='Madurai
// const MaduraiEmployee=emp.filter(e=>e.city=='Madurai');


// console.log(MaduraiEmployee);
//using map() to print MaduraiEmployee List
// let listemp='<table border="1px"><tr><th>EmpName</th><th>City</th></tr>';
// MaduraiEmployee.map((employ)=>{
//   // console.log(employ.enmae,employ.city);
//   listemp+=`<tr><td>${employ.enmae}</td><td>${employ.city}</td></tr>`;
// });
// listemp+='</table>';
// document.getElementById('empList').innerHTML=listemp;
//-------------------------------------------------------------------
// reduce()-->convert an array into single value or object
//it takes 2 parameters in callback function
//first parameter--output,second parameter--array values takes one by one
// ----------

// const arr=[1,2,3,4,5,6,7,8,9,10,11];
// let sum=0;
// for(let i=0;i<arr.length;i++)
// {
//   sum+=arr[i];//sum=sum+arr[i]
// }
// console.log(sum);

// const sum_arr=arr.reduce((a,b)=>{return a+b});
// console.log(sum_arr);
// step 1:a=1,b=2===>a=3;
// step 2:a=3,b=3===>a=6;
// step 3:a=6,b=4===>a=10;
// step 4:a=10,b=5===>a=15;
// step 5:a=15,b=6===>a=21;
// step 6:a=21,b=7===>a=28;
// step 7:a=28,b=8===>a=36;
// step 8:a=36,b=9===>a=45;
// step 9:a=45,b=10===>a=55;
// step 10:a=55,b=11===>a=66;


//reduce(callbackfun,initialvalue of first parameter in callback fun)
// const sum_arr=arr.reduce((sum,num)=>{ return sum+num},0);//sum+=num
// console.log(sum_arr);

// const emp=[{eid:1,enmae:"Prabhu",salary:40000,city:'Chennai'},
// {eid:2,enmae:"Bala",salary:50000,city:'Madurai'},
// {eid:3,enmae:"Deva",salary:20000,city:'Madurai'},
// {eid:4,enmae:"Naveen",salary:40000,city:'Trichy'},
// {eid:5,enmae:"Gowtham",salary:10000,city:'Chennai'},
// {eid:6,enmae:"Selva",salary:60000,city:'Chennai'},
// ];
//const cityCount={Chennai:3,Madurai:2,Trichy:1}

// const cityCount={};
// cityCount.Madurai=2;
// cityCount['Chennai']=3;

// const cityCount=emp.reduce(
//   (res,e)=>{

//     res[e.city]=res[e.city]?res[e.city]+=1:1;
//     return res;
//   },{}
// );

// step1:res={chennai:1}
// step2:res={Chennai:1,Madurai:1}
// step3:res={Chennai:1,Madurai:2}
// step4:res={Chennai:1,Madurai:2,Trichy:1}
// step5:res={Chennai:2,Madurai:2,Trichy:1}
// step6:res={Chennai:3,Madurai:2,Trichy:1}
// console.log(cityCount);

// const name='';
// console.log(name?true:false);

//Dom 
//--------------------
// let hone=document.createElement('h1');
// hone.innerHTML='DOM Methods';

// document.body.appendChild(hone);

//Fetch
//---------------
// let usersData=[];
// fetch('https://jsonplaceholder.typicode.com/users').then((users)=>{return users.json()}).then(users=>{
//   usersData.push(users);
//   console.log(usersData,'chgsxvchgsv');
//   }).catch((error)=>{console.log(error)});

// const users=[
//   {id:1,name:'Selva'},{id:2,name:'Mohan'},{id:3,name:'Siva'}
// ];

// let table='<table border="1px"><tr><th>Id</th><th>Name</th></tr>';


// for(let i=0;i<users.length;i++)
// {
//   table+=`<tr><td>${users[i].id}</td><td>${users[i].name}</td></tr>`;
// }

// users.forEach((user)=>{
//   return table+=`<tr><td>${user.id}</td><td>${user.name}</td></tr>`;
// });console.log(usersData,'outside then');
// usersData.map(user=>table+=`<tr><td>${user.name}</td><td>${user.email}</td></tr>`);
// table+='</table>';
// document.getElementById('userDetails').innerHTML=table;

// let foodItems = [];
// async function getData()
// {
//   try{
//        let result = await fetch('https://fakestoreapi.com/products');
//        let data = await result.json();
//        console.log(data);
        
//        let items = data.map(f => {
//         const {title,image}= f;
//         return {title,image};
//        });
//        return(items);
//   } catch (err){console.log(err);}
// }
// getData().then(p =>localStorage.setItem('items',JSON.stringify(p)));
// foodItems=JSON.parse(localStorage.getItem('items'));
// console.log(foodItems);
// let table = '<table border = "1px"><tr><th>name</th><th>pic</th></tr>';
// foodItems.map((value)=>{
//   return table+=`<tr><td>${value.title}</td><td><img src="${value.image}"/></td></tr>`
// });
// table+="</table>";
// document.getElementById('empList').innerHTML=table;