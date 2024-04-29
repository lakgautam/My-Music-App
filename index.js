console.log("welcome to spotify")

//initialize the variables
let  SongIndex = 0;
let audioElement = new Audio('songs/2.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar= document.getElementById("myProgressBar");
let gif= document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName('songItem'));

let Songs = [
    { SongName: "Like Crazy - JIMIN", filePath:"songs/2.mp3", coverPath: "cover/2.jpeg"},
    { SongName: "Mikrokosmos - BTS", filePath: "songs/3.mp3", coverPath: "cover/3.jpeg"},
    { SongName: "Life Goes On - BTS", filePath: "songs/4.mp3", coverPath: "cover/4.jpeg"},
    { SongName: "Closer Than This - JIMIN", filePath: "songs/5.mp3", coverPath: "cover/5.jpeg"},
    { SongName: "Promise - JIMIN", filePath: "songs/6.mp3", coverPath: "cover/6.jpeg"},
    { SongName: "Winter Bear - V", filePath: "songs/7.mp3", coverPath: "cover/7.jpeg"},
    { SongName: "Har ek Pal", filePath: "songs/1.mp3", coverPath: "cover/8.jpg"},
]

songItems.forEach((element, i)=>{

element.getElementsByTagName("img")[0].src = Songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = Songs[i].SongName;


})


//handle play/pause click
masterPlay.addEventListener("click", ()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})


//listen to event 
audioElement.addEventListener('timeupdate', ()=>{
//update Seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from (document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play'); 
        element.classList.remove('fa-circle-pause'); 
 })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click', (e) => {
makeAllPlays();
SongIndex = parseInt(e.target.id);
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
audioElement.src= Songs[SongIndex+0].filePath;
masterSongName.innerText = Songs[SongIndex].SongName;
audioElement.currentTime = 0;
audioElement.play();
gif.style.opacity = 1;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
    })
});


document.getElementById('next').addEventListener('click',()=>{
    if(SongIndex>=7){
        SongIndex = 0
    }
    else{
        SongIndex += 1;
     }

     audioElement.src= Songs[SongIndex+0].filePath;
     masterSongName.innerText = Songs[SongIndex].SongName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(SongIndex<=7){
        SongIndex = 0
    }
    else{
        SongIndex -= 1;
     }
     audioElement.src= Songs[SongIndex+0].filePath;
     masterSongName.innerText = Songs[SongIndex].SongName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
})


        
            