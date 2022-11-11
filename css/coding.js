// map()
// const arr = [1,2,3,4,5];
// const arr2 = arr.map((n)=>n*5);
// console.log(arr2);

// const employee = [{name:"bala",id:1,place:"madurai"},
//                   {name:"arun", id:2, place:"cbe"},
//                   {name:"selva", id:3, place:"chennai"},
//                   {name:"ram", id:4, place:"cbe"  }];
// let table = "<table border='2px '><tr><th>name</th><th>id</th><th>place</th></tr>";                  
// const newEmployee = employee.map(e=>{table+=`<tr><td>${e.name}</td><td>${e.id}</td><td>${e.place}</td></tr>`}) ;
// table+="</table>"
// document.getElementById("table").innerHTML=table                

// const newEmp = employee.filter(e=>e.id>1);
// console.log(newEmp); //filter

//for

// let list = "<ol>";
// for (let emp of employee)
// { 
//     list+=`<li>${emp.name}</li>`
// }
// list+="</ol>";
// document.getElementById("list").innerHTML=list;
//for in

// for (let emp in employee){
//     console.log(employee[emp]);
// }
//foreach
// let list = "<ol>";
// employee.forEach(emp=>{list+=`<li>${emp.place}</li>`})
// list+= "</ol>";
// document.getElementById("list").innerHTML=list;

// const emp = [{empId:1, name:"bala", place:"madurai"},
//              {empId:2, name:"selva", place:"cbe"},
//              {empId:3, name:"ram", place:"chennai"},
//              {empId:4, name:"arun", place:"trichy"},
//              {empId:5, name:"prabhu", place:"madurai"}
//             ];
//     const id = prompt('enter employee id');
// const newEmp = emp.filter((e)=>e.empId==id);

           
//  let table = "<table border = '2px'><tr><th>Id</th><th>Name</th><th>Place</th></tr>" ;
//  const employee = newEmp.map(e=>{
//     table+=`<tr><td>${e.empId}</td><td>${e.name}</td><td>${e.place}</td></tr>`
//  });
//  table+="</table>"
//  document.getElementById("list").innerHTML=table;

// for in exercise
// let alien = {
//    name: 'bala',
//    tech: 'js',
//    laptop: {
//       cpu : 'ryzen',
//       ram: 8,
//       brand: 'dell'
//    }
// }
// for(let e in alien.laptop){
//    console.log(e,alien.laptop[e]);
// }

// reduce
// const num = [1,2,3,4,5,6];
// const odd = num.reduce((a,b)=>{return a+b},2);
// console.log(odd);

// ass1



