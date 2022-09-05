let butons=document.querySelectorAll('.text-butons .buton-text')
for ( let index of butons) {
    index.addEventListener('click',active)
    function active() {
        document.querySelector('.text-butons .buton-text.active').classList.remove('active')
        index.classList.add('active')
    }
}

const thumbStickBtn=document.querySelector('.text-butons .thumbstick')
const cpubtn=document.querySelector('.text-butons .cpu')
const sdcardbtn=document.querySelector('.text-butons .sdcard')

cpubtn.addEventListener('click',click1)

function click1() {
    document.querySelector('.videos .video1 video').style.transform='translate(0)'
    document.querySelector('.videos .video2 video').style.transform='translate(-600px)'
    document.querySelector('.videos .video3 video').style.transform='translate(800px)'

 

    

  
}

thumbStickBtn.addEventListener('click',click2)
function click2() {
    document.querySelector('.videos .video1 video').style.transform='translate(-600px)'
    document.querySelector('.videos .video3 video').style.transform='translate(800px)'
    document.querySelector('.videos .video2 video').style.transform='translate(0)'

  
 
}


sdcardbtn.addEventListener('click',click3)

function click3() {
    document.querySelector('.videos .video2 video').style.transform='translate(-600px)'
    document.querySelector('.videos .video1 video').style.transform='translate(-600px)'
    document.querySelector('.videos .video3 video').style.transform='translate(0)'


 
}



