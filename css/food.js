// https://www.app.tutorjoes.in/mobile/getAllFood

foodItem=[];

fetch('https://www.app.tutorjoes.in/mobile/getAllFood').then((res)=>res.json()).then((res)=>{
    foodItem.push(res.items);
     console.log(foodItem,'dfds');
   
    });




    const menulist=document.getElementsByClassName('menu');
    // console.log(menulist);

for(let i=0;i<menulist.length;i++)
{
    menulist[i].onclick=()=>{
        document.getElementById('txtFoodType').innerHTML=menulist[i].innerHTML;
      

}
}

