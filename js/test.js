const navbar1 = [
    {
        name : "Menu"
    },
    {
        name : "About us"
    },
    {
        name :"Location"
    },
    {
        name :"Blog"
    },
    {
        name :"Contact"
    }
];
var text ="";
for(let i in navbar1){
   text +=`
   <li><a href="#">${navbar1[i]["name"]}</a></li>
  `;
 document.getElementsByClassName("display")[0].innerHTML = text;
}
const main = [
    {
        img : "image/tea1.avif"
    }
];
var text = "";
for(let i in main){
    text +=`
    <img src="${main[i]["img"]}" alt="" width="100%">
    `;
    document.getElementsByClassName("main")[0].innerHTML = text;
}
 

document.getElementById("in").addEventListener("click",()=>{
     document.getElementById("form").style.display = "flex";
});
// const main1 = [
//     {
//         img : "image/tea4.jpeg",
//         decription : "Start your day with kungfu tea dirnking and bring you more freashly"
//     },
//     {
//         img : "image/tea3.jpg",
//         description : "Start your day with kungfu tea dirnking and bring you more freashly"  
//     },
//     {
//         img : "image/pc1.jpg",
//         description :"Start your day with milksha dirnking and bring more freashly"
//     }
// ];
// var text = "";
// for(let i in main1){
//     text +=`
//     <div class="col-6 main1">
//     <img src="${main1[i][img]}" alt="" width="100%" height="100%">
//       <h3>${main1[i]["description"]}</h3>
//     </div>
//   </div>
//     `;
//     document.getElementsByClassName("main1")[0].innerHTML = text;
// }


