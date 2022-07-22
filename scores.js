function slideShow(){
    let image = ["https://tpc.googlesyndication.com/simgad/12185608401875927700?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qmPjUjQlo3TTVGKg7TnmUYS8jAP1Q", "https://tpc.googlesyndication.com/simgad/4866054573033308061?", "https://tpc.googlesyndication.com/simgad/10926761020657163993?"]
    let slide = document.getElementById("slideshow");
    let i = 0;

    setInterval(function(){
        if(i === image.length){
            i = 0;
        }

        let img = document.createElement("img");
        img.src = image[i];
        slide.innerHTML = null;
        slide.append(img);
        i++;
    }, 1000);
}