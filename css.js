document.querySelector("#btn").onclick = function () {
    var myAudio = document.getElementById('playAudio');
    if (myAudio.duration > 0 && !myAudio.paused) {
        //Its playing...do your job

    } else {
        myAudio.play()
        //Not playing...maybe paused, stopped or never played.

    }
    document.querySelector("#btn").style.display = 'none';
    document.querySelector(".christmas").style.display = 'block';
    document.querySelector("#body").style.background = "#de2f32";
   

}
