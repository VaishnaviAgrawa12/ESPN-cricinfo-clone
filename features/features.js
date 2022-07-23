let container=document.getElementById("ftContainer")

function featureCF(i,h,c,d,a){
    this.img =i
    this.head=h
    this.cont=c
    this.date=d
    this.auth=a
}

let MyFeat= [new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342900/342986.6.jpg","How Deepak Hooda turned things around with a little help from Irfan Pathan","A year ago, he didn't have a domestic team and things were looking grim. Then came the upswing","17 hours ago","Shashwat"),new featureCF("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/342900/342986.6.jpg","How Deepak Hooda turned things around with a little help from Irfan Pathan","A year ago, he didn't have a domestic team and things were looking grim. Then came the upswing","!7 hours ago","Shashwt")]

MyFeat.forEach(function(el){
    let pic = document.createElement("img")
    pic.src= el.img
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