const speedUp = document.getElementById("speedUp");
const speedDown = document.getElementById("speedDown");
const volumeUp = document.getElementById("volumeUp");
const volumeDown = document.getElementById("volumeDown");
const menueOpen = document.getElementById("menu-open");
const videoInput = document.getElementById("video-input");
const videoPlayer = document.getElementById("main");
const tost = document.querySelector(".tost");
speedUp.addEventListener("click", function onClick() {
  // document.getElementsByClassName("menu-item").style.color = "red";
});
menueOpen.addEventListener("click", function menueOpen() {
  console.log("Enput clicked");
  videoInput.click();
});
const acceptInput = (obj) => {

  const selectedfile = obj.target.files[0];// for selecting file
  const link = URL.createObjectURL(selectedfile); // generating Url of selecting File 
  const video = document.createElement("video");
  video.src = link;
  video.setAttribute("class", "video");
  videoPlayer.appendChild(video);//Inserting Any Element Into The Html 
  video.play();
  video.controls = "true";
  video.defaultPlaybackRate = 1;
  video.loop;

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.>>>>>>>>>>>
  //  This Is Not Usable Code Only For Learning 
  // const currentTime = video.currentTime;// Taking Current Time Of Videos 

  // setTimeout(() => {
  //   video.currentTime = 720;
  //   console.log(video.duration); // given the duration of the videos 
  // }, 10000); //set a currnent Time of video 

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}
videoInput.addEventListener("change", acceptInput); //change are using for 

// volume and Speed Code ****************************************

const SpeedUpHandler = () => {
  const videoElement = document.querySelector("video");
  if (videoElement == null) {
    return;
  }
  // Property 
  const speedIncrease = videoElement.playbackRate + 0.5;
  videoElement.playbackRate = speedIncrease;
  shomesage(speedIncrease);
  // console.log(speedIncrease);

}
const SpeedDownHandler = () => {
  const speedDownElement = document.querySelector("video");
  if (speedDownElement == null) {
    return;
  }
  // Property 
  const speedDecrease = speedDownElement.playbackRate - 0.5;
  speedDownElement.playbackRate = speedDecrease;
  shomesage(speedDecrease);
  console.log("Increase : " + speedDecrease);
}
const volueUpHandler = () => {
  const volumeUpElement = document.querySelector("video");
  if (volumeUpElement == null) {
    return;
  }

  const volumeUP = volumeUpElement.volume + 0.2;
  volumeUpElement.volume = volumeUP;
  if (volumeUpElement.volume >= 1) {
    return;
  }
  const persentage = (volumeUpElement.volume * 100) + "%";//create volume function panding
  message(persentage);
  console.log("Valume Increase...." + volumeUpElement.volume);
}
const volueDownHandler = () => {
  const volumeDownElement = document.querySelector("video");
  if (volumeDownElement == null) {
    return;
  }
  const volumeDown = volumeDownElement.volume - 0.2;
  volumeDownElement.volume = volumeDown;
  if (volumeDownElement.volume <= 0.1) {
    return;
  }
  message((volumeDownElement.volume * 100) + "%");//create volume function panding
  console.log("Valume Decrease...." + volumeDownElement.volume);
}

function shomesage(message) {
  tost.textContent = message + "x";
  tost.style.display = "block";
  setTimeout(() => {
    tost.style.display = "none";
  }, 1000);
}

speedUp.addEventListener("click", SpeedUpHandler);
speedDown.addEventListener("click", SpeedDownHandler);
volumeUp.addEventListener("click", volueUpHandler);
volumeDown.addEventListener("click", volueDownHandler);



