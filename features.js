
import navbar from "../navexport.js"
document.getElementById("navbar").innerHTML= navbar()


let container=document.getElementById("ftContainer")

function featureCF(i,h,c,d,a){
    this.img =i
    this.head=h
    this.cont=c
    this.date=d
    this.auth=a
}

let MyFeat= [new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342900/342986.6.jpg","How Deepak Hooda turned things around with a little help from Irfan Pathan","A year ago, he didn't have a domestic team and things were looking grim. Then came the upswing","17 hours ago","Shashwat"),new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/343000/343038.6.jpg","Nurul Hasan, Bangladesh's new T20I captain, might only be a stop-gap arrangement","He is probably just keeping the seat warm for Shakib, but can also use the opportunity in Zimbabwe to make a case for himself","2 hours ago","Mohammad Isam"),new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_70/lsci/db/PICTURES/CMS/343000/343084.4.jpg","Brandon King is rising once again, but as middle-order batter","From 196 for 5 in a chase of 309, King's composed knock at No. 4 almost took West Indies over the line against India","3 hours ago","Deivarayan Muthu"),
new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342900/342919.6.jpg","In Case You Missed it: Ben Stokes quits ODIs, Pakistan thump Sri Lanka at home","Our best content from the week gone by","4 hours ago","ESPNcricinfo staff"),
new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/343000/343011.6.jpg","Katherine Brunt: 'If I break after the Commonwealth Games, so be it'","Veteran seamer hell-bent on gold medal after rolling back the years in youthful T20I side","5 hours ago","Valkerie Baynes"),
new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342900/342997.6.jpg","Adaptable Phil Salt keeps things simple ahead of latest England chance","Lancashire batter set for middle-order opportunity on home ground as Ben Stokes' replacement","7 hours ago","Vithushan Ehantharajah"),
new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342900/342970.6.jpg","Pinch yourself, Pakistan; Abdullah Shafique is a real, living, breathing opener","For a country infamous for its opening woes, Shafique doesn't just feel like the right answer, but an entire exam being aced","9 hours ago","Osman Samiuddin"),
new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/339900/339946.6.jpg","Do teams benefit when their batters play long innings in T20s?","Why being set does not translate into enhanced hitting efficiency beyond a point","10 hours ago","Himanish Gajnoo"),
new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342800/342853.6.jpg","Who was the first Kolpak player in county cricket?","And at which venue did Brian Lara make his 501 not out? Test your knowledge of famous overseas performances in county cricket","12 hours ago","Sreshth Shah and Gaurav Sundararaman"),
new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/323700/323776.jpg","Nurul Hasan, Bangladesh's new T20I captain, might only be a stop-gap arrangement","He is probably just keeping the seat warm for Shakib, but can also use the opportunity in Zimbabwe to make a case for himself","20 hours ago","Mohammad Isam"),
new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342900/342933.6.jpg","Hosein, Motie and Seales among notable talents who could challenge India","Deivarayan Muthu on the relatively unknown West Indies players to watch out for in the ODI series against India","22 hours ago","Deivarayan Muthu"),
new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342900/342997.6.jpg","Adaptable Phil Salt keeps things simple ahead of latest England chance","Lancashire batter set for middle-order opportunity on home ground as Ben Stokes' replacement","7 hours ago","Vithushan Ehantharajah"),
new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342900/342970.6.jpg","Pinch yourself, Pakistan; Abdullah Shafique is a real, living, breathing opener","For a country infamous for its opening woes, Shafique doesn't just feel like the right answer, but an entire exam being aced","9 hours ago","Osman Samiuddin"),
new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/339900/339946.6.jpg","Do teams benefit when their batters play long innings in T20s?","Why being set does not translate into enhanced hitting efficiency beyond a point","10 hours ago","Himanish Gajnoo"),
new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342800/342853.6.jpg","Who was the first Kolpak player in county cricket?","And at which venue did Brian Lara make his 501 not out? Test your knowledge of famous overseas performances in county cricket","12 hours ago","Sreshth Shah and Gaurav Sundararaman"),
new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/323700/323776.jpg","Nurul Hasan, Bangladesh's new T20I captain, might only be a stop-gap arrangement","He is probably just keeping the seat warm for Shakib, but can also use the opportunity in Zimbabwe to make a case for himself","20 hours ago","Mohammad Isam"),
new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342900/342933.6.jpg","Hosein, Motie and Seales among notable talents who could challenge India","Deivarayan Muthu on the relatively unknown West Indies players to watch out for in the ODI series against India","22 hours ago","Deivarayan Muthu")]

MyFeat.forEach(function(el){
    let pic = document.createElement("img")
    pic.src= el.img
    pic.setAttribute("class","zoom")
    let iBox = document.createElement("div")
    iBox.setAttribute("class","iBox")
    iBox.append(pic)
    let heading = document.createElement("p")
    heading.innerText=el.head
    let cont= document.createElement("p")
    cont.innerText=el.cont
    cont.style.fontSize="14px";
    cont.style.color="#48494a";
    let date = document.createElement("p")
    date.innerText= `${el.date} \• ${el.auth}`
    date.style.fontSize="12px";
    date.style.color="#6c6d6f";
    

    let mainBox= document.createElement("div")
    mainBox.setAttribute("class","mainBox")
    mainBox.append(heading,cont,date)
    let box = document.createElement("div")
    box.append(iBox,mainBox)
    box.setAttribute("id","box")
    container.append(box)
})

let MRcontainer = document.getElementById("rightContain")

function MRfeatureCF(i,h,c,d,a){
    this.img =i
    this.head=h
    this.cont=c
    this.date=d
    this.auth=a
}
let myMRfeature = [new MRfeatureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/339900/339946.6.jpg","Do teams benefit when their batters play long innings in T20s?","Why being set does not translate into enhanced hitting efficiency beyond a point","10 hours ago","Himanish Gajnoo"),
new MRfeatureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342800/342853.6.jpg","Who was the first Kolpak player in county cricket?","And at which venue did Brian Lara make his 501 not out? Test your knowledge of famous overseas performances in county cricket","12 hours ago","Sreshth Shah and Gaurav Sundararaman"),
new MRfeatureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/323700/323776.jpg","Nurul Hasan, Bangladesh's new T20I captain, might only be a stop-gap arrangement","He is probably just keeping the seat warm for Shakib, but can also use the opportunity in Zimbabwe to make a case for himself","20 hours ago","Mohammad Isam"),
new MRfeatureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342900/342933.6.jpg","Hosein, Motie and Seales among notable talents who could challenge India","Deivarayan Muthu on the relatively unknown West Indies players to watch out for in the ODI series against India","22 hours ago","Deivarayan Muthu"),
new MRfeatureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342900/342997.6.jpg","Adaptable Phil Salt keeps things simple ahead of latest England chance","Lancashire batter set for middle-order opportunity on home ground as Ben Stokes' replacement","7 hours ago","Vithushan Ehantharajah"),
new MRfeatureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342900/342970.6.jpg","Pinch yourself, Pakistan; Abdullah Shafique is a real, living, breathing opener","For a country infamous for its opening woes, Shafique doesn't just feel like the right answer, but an entire exam being aced","9 hours ago","Osman Samiuddin")]

myMRfeature.forEach(function(el){
    let pic = document.createElement("img")
    pic.src= el.img
    pic.setAttribute("class","zoom")
    let iBox = document.createElement("div")
    iBox.setAttribute("class","iBox")
    iBox.append(pic)
    let heading = document.createElement("p")
    heading.innerText=el.head
    heading.style.fontSize="12px";
    heading.style.fontWeight="500"
    // let cont= document.createElement("p")
    // cont.innerText=el.cont
    // cont.style.fontSize="14px";
    // cont.style.color="#48494a";
    let date = document.createElement("p")
    date.innerText= `${el.date} \• ${el.auth}`
    date.style.fontSize="12px";
    date.style.color="#6c6d6f";
    

    let mainBox= document.createElement("div")
    mainBox.setAttribute("class","mainBox")
    mainBox.append(heading,date)
    let box = document.createElement("div")
    box.append(iBox,mainBox)
    box.setAttribute("id","box")
    MRcontainer.append(box)
})