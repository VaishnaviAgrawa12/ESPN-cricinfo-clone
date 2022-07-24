import team from "./navexport.js"
document.getElementById("navbar").innerHTML= team()

let container= document.getElementById("inter")



function teamCF(i,n){
    this.img= i
    this.name=n 
 }
 
 let myTeam = [new teamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/321000/321005.png","Afganisthan"),
new teamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340400/340493.png","Australia"),
new teamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/341400/341456.png","Bangladesh"),
new teamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png","England"),new teamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png","India"),
new teamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313149.logo.png","Ireland"),new teamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340500/340505.png","New Zealand"),
new teamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png","Pakistan"),new teamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313150.logo.png","Scotland"),new teamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png","South Africa"),
new teamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png","Sri Lanka"),
new teamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313147.logo.png","United Arab Emirates"),
new teamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png","West Indies"),
new teamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340500/340503.png","Zimbabwe"),]

 myTeam.forEach(function(elem){
 

    
    let flag = document.createElement("img")
    flag.src=elem.img
    let vBox= document.createElement("div")
    let name =document.createElement("p")
    name.innerText = elem.name

    

    vBox.append(flag,name)
    vBox.style.border="1px solid #eeeeee"
    container.append(vBox)
 });
 let btn = document.querySelector("#inter p")
 btn.addEventListener("click", afgan)
 function afgan(){
   location.href="./Afgan.html"
 }


 

 let container2= document.getElementById("women")



function WteamCF(i,n){
    this.img= i
    this.name=n 
 }
 
 let myWTeam = [
new WteamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340400/340493.png","Australia Women"),
new WteamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/341400/341456.png","Bangladesh Women"),
new WteamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png","England Women"),new WteamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313128.logo.png","India Women"),
new WteamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340500/340505.png","New Zealand Women"),
new WteamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313129.logo.png","Pakistan Women"),new WteamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313125.logo.png","South Africa Women"),
new WteamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png","Sri Lanka Women"),
new WteamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313400/313402.png","Thailand Women"),
new WteamCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/317600/317615.png","West Indies Women"),
]

 myWTeam.forEach(function(elem){
 

    
    let flag = document.createElement("img")
    flag.src=elem.img
    let vBox= document.createElement("div")
    let name =document.createElement("p")
    name.innerText = elem.name

    vBox.append(flag,name)
    vBox.style.border="1px solid #eeeeee"
    container2.append(vBox)
 });

 