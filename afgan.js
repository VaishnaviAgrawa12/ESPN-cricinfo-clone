import navbar from "./navexport.js"
document.getElementById("navbar").innerHTML= navbar()


let container = document.getElementById("match")

function matchCF(d,a,t1,t1n,t2,t2n,s){
    this.date=d
    this.add=a
    this.team1=t1
    this.team1Name=t1n

    this.team2=t2
    this.team2Name=t2n
    this.stat= s
}

let match = [new matchCF("TUES, 09 AUG","1st T20I, Belfast, August 09, 2022,Afghanistan...","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/321000/321005.png","AFG","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313149.logo.png","IRE","Match yet to begin"),new matchCF("WED, 10 AUG","2nd T20I, Belfast, August 09, 2022,Afghanistan...","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/321000/321005.png","AFG","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313149.logo.png","IRE","Match yet to begin"),new matchCF("FRI, 12 AUG","3rd T20I, Belfast, August 09, 2022,Afghanistan...","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/321000/321005.png","AFG","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313149.logo.png","IRE","Match yet to begin"),new matchCF("MON, 15 AUG","4th T20I, Belfast, August 09, 2022,Afghanistan...","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/321000/321005.png","AFG","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313149.logo.png","IRE","Match yet to begin"),new matchCF("WED, 17 AUG","5th T20I, Belfast, August 09, 2022,Afghanistan...","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/321000/321005.png","AFG","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313149.logo.png","IRE","Match yet to begin"),
new matchCF("WED, 10 OCT","2nd T20I, Belfast, August 09, 2022,Afghanistan...","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/321000/321005.png","AFG","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313100/313114.logo.png","ENG","Match yet to begin"),
new matchCF("WED, 10 AUG","2nd T20I, Belfast, August 09, 2022,Afghanistan...","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/321000/321005.png","AFG","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340500/340505.png","NZ","Match yet to begin"),
new matchCF("WED, 10 AUG","2nd T20I, Belfast, August 09, 2022,Afghanistan...","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/321000/321005.png","AFG","https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340400/340493.png","AUS","Match yet to begin")]

match.forEach(function(el){
    let dt = document.createElement("p")
    dt.innerText= el.date
    dt.style.fontWeight="700"
    dt.style.fontSize="12px"

    let address = document.createElement("p")
    address.innerText=el.add
    address.style.fontWeight="400"
    address.style.fontSize="12px"
    address.style.color="#6c6d6f"


    let team1 = document.createElement("img")
    team1.src=el.team1

    let team1Name = document.createElement("p")
    team1Name.innerText= el.team1Name
    team1Name.style.fontSize="14px"
    team1Name.style.fontWeight="700"

    let TBox= document.createElement("div")
    TBox.setAttribute("class","team")
    TBox.append(team1,team1Name)

    let team2 = document.createElement("img")
    team2.src=el.team2
    let team2Name = document.createElement("p")
    team2Name.innerText= el.team2Name
    team2Name.style.fontSize="14px"
    team2Name.style.fontWeight="700"

    let TBox2= document.createElement("div")
    TBox2.setAttribute("class","team")
    TBox2.append(team2,team2Name)


    let status = document.createElement("p")
    status.innerText= el.stat
    status.style.fontWeight="400"
    status.style.fontSize="12px"

    let box = document.createElement("div")
    box.append(dt,address,TBox,TBox2,status)
    box.setAttribute("id","box")

    container.append(box)
})

let container2 = document.getElementById("feature")
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
    

    let mainBox= document.createElement("div")
    mainBox.setAttribute("class","mainBox")
    mainBox.append(heading,cont)
    let box = document.createElement("div")
    box.append(iBox,mainBox)
    box.setAttribute("id","box")
    container2.append(box)
})