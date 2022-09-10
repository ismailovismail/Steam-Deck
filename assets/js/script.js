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



const langBtn=document.querySelector('.change-lang')
const headText=document.querySelector('.text p')
const h1Items=document.querySelectorAll('.buton-text h1')
const PItems=document.querySelectorAll('.buton-text p')
const moreAboutBtn=document.querySelector('.buton-arrow button')
const arrowBtn='<i class="fa-solid fa-arrow-right"></i>'
const langItems={
    h1AZ:['GÜCLÜ','RAHAT','MÜXTƏLİFTƏRƏFLİ'],
    h1EN:['POWERFUL','COMFORTABLE','VERSATILE'],
    paragrafAZ:["Steam Deck ən son AAA oyunlarını idarə edir və onları çox yaxşı idarə edir.","Tam sədaqət nəzarəti. Uzun oyun seansları. Heç bir güzəşt yoxdur.",`Siz periferiya qurğularına qoşula şəkli böyük ekrana ata və gözlədiyiniz bütün digər PC işlərini edə bilərsiniz.`],
    paragrafEN:['Steam Deck runs the latest AAA games-and runs them really well.','Full fidelity controls.Long play sessions.No compromises.',"You can connect to peripherals throw th picture onto a big screen and do all the other PC things you'd expect."]
}
langBtn.onclick=()=>{
    if (langBtn.innerHTML == 'AZ') {
        localStorage.setItem('headTextInner','Həqiqi oyunları real əllərə vermək üçün nəzərdə tutulmuş avadanlıq')
        headText.innerHTML=localStorage.getItem('headTextInner')
        localStorage.setItem('h1Lang',langItems.h1AZ)
        for ( let index in langItems.h1AZ) {
          h1Items[index].innerHTML=langItems.h1AZ[index]
        }
        localStorage.setItem('paragrafLang',langItems.paragrafAZ)
         for (let index in langItems.paragrafAZ) {
          PItems[index].innerHTML=langItems.paragrafAZ[index]
         }
       
         localStorage.setItem('moreAboutInner',(`Donanma haqqında daha çox ${arrowBtn}`))
         moreAboutBtn.innerHTML=localStorage.getItem('moreAboutInner')
         localStorage.setItem('langBtnInner','EN')
        langBtn.innerHTML=localStorage.getItem('langBtnInner')
    }else{
        localStorage.setItem('headTextInner','Hardware designed to put real games in real hands')
        headText.innerHTML=localStorage.getItem('headTextInner')
        localStorage.setItem('h1Lang',langItems.h1EN)
        for (let index in langItems.h1EN) {
          h1Items[index].innerHTML=langItems.h1EN[index]
        }
        localStorage.setItem('paragrafLang',langItems.paragrafEN)
        for (let index in langItems.paragrafEN) {
            PItems[index].innerHTML=langItems.paragrafEN[index]
        }
       
        localStorage.setItem('moreAboutInner',(`More about hardware ${arrowBtn}`))
        moreAboutBtn.innerHTML=localStorage.getItem('moreAboutInner')
        localStorage.setItem('langBtnInner','AZ')
        langBtn.innerHTML=localStorage.getItem('langBtnInner')
    }
}
headText.innerHTML=localStorage.getItem('headTextInner')
for ( let index in langItems.h1AZ) {
    h1Items[index].innerHTML=localStorage.getItem('h1Lang').split(',')[index]
  }
for (let index in langItems.paragrafAZ) {
    PItems[index].innerHTML=localStorage.getItem('paragrafLang').split(',')[index]
    
    
 }
 moreAboutBtn.innerHTML=localStorage.getItem('moreAboutInner')
 langBtn.innerHTML=localStorage.getItem('langBtnInner')



const changeModeBtn=document.querySelector('.mode-btn .change-mode')
const videos=document.querySelectorAll('video')
changeModeBtn.onclick=()=>{
    if (changeModeBtn.innerHTML == 'Dark') {
        localStorage.setItem('sectionBackColor','black')
        document.querySelector('section').style.background=localStorage.getItem('sectionBackColor')
        localStorage.setItem('sectionContainerColor','black')
        document.querySelector('section .container-fluid').style.background=localStorage.getItem('sectionBackColor')
        localStorage.setItem('sectionIntoColor','black')
        document.querySelector('section .into').style.background=localStorage.getItem('sectionIntoColor')
        localStorage.setItem('textButtonsColor','black')
        document.querySelector('section .container-fluid .into .text-butons').style.background=localStorage.getItem('textButtonsColor')
        localStorage.setItem('butonColorBack','black')
        document.querySelector('.buton-color').style.background=localStorage.getItem('butonColorBack')
        localStorage.setItem('butonColorContainer','black')
        document.querySelector('.buton-color .container-fluid').style.background=localStorage.getItem('butonColorContainer')
        localStorage.setItem('headTextColor','white')
         headText.style.color=localStorage.getItem('headTextColor')
        localStorage.setItem('videosBorderRadius','10px')
        for (let index of videos) {
            index.style.borderRadius=localStorage.getItem('videosBorderRadius')
        }
        localStorage.setItem('butonTextDrAcClass','active')
        document.querySelector('.buton-text.active').classList.remove(localStorage.getItem('butonTextDrAcClass'))
        localStorage.setItem('butonTextClass','dark-active')
        document.querySelector('.buton-text').classList.add(localStorage.getItem('butonTextClass'))
        localStorage.setItem('blackButonClass','blck-buton')
        localStorage.setItem('butonsTextClass','dark-active')
        for (let index of butons) {
            
            index.onclick=()=>{
                document.querySelector('.buton-text.dark-active').classList.remove(localStorage.getItem('butonsTextClass'))
                index.classList.add(localStorage.getItem('butonsTextClass'))
            }
            index.classList.add(localStorage.getItem('blackButonClass'))

        }
       localStorage.setItem('btnLangClass','btn-dark')
       document.querySelector('.change-lang.btn-dark').classList.remove(localStorage.getItem('btnLangClass'))
       localStorage.setItem('btnLangClass2','btn-primary')
       langBtn.classList.add(localStorage.getItem('btnLangClass2'))
       localStorage.setItem('changeModeBtn','btn-dark')
       document.querySelector('.change-mode.btn-dark').classList.remove(localStorage.getItem('changeModeBtn'))
       localStorage.setItem('changeModeBtn2','btn-primary')
       changeModeBtn.classList.add(localStorage.getItem('changeModeBtn2'))
       localStorage.setItem('changeModeBtnInner','Light')
        changeModeBtn.innerHTML=localStorage.getItem('changeModeBtnInner')
    }else{localStorage.setItem('sectionBackColor','white')
        document.querySelector('section').style.background=localStorage.getItem('sectionBackColor')
        localStorage.setItem('sectionContainerColor','white')
        document.querySelector('section .container-fluid').style.background=localStorage.getItem('sectionContainerColor')
        localStorage.setItem('sectionIntoColor','white')
        document.querySelector('section .into').style.background=localStorage.getItem('sectionIntoColor')
        localStorage.setItem('textButtonsColor','white')
        document.querySelector('section .container-fluid .into .text-butons').style.background=localStorage.getItem('textButtonsColor')
        localStorage.setItem('butonColorBack','white')
        document.querySelector('.buton-color').style.background=localStorage.getItem('butonColorBack')
        localStorage.setItem('butonColorContainer','white')
        document.querySelector('.buton-color .container-fluid').style.background=localStorage.getItem('butonColorContainer')
        localStorage.setItem('sectionBackColor','white')
        document.querySelector('section').style.background=localStorage.getItem('sectionBackColor')
        localStorage.setItem('videosBorderRadius','0px')
        for (let index of videos) {
            index.style.borderRadius=localStorage.getItem('videosBorderRadius')
        }
        localStorage.setItem('headTextColor','black')
        headText.style.color=localStorage.getItem('headTextColor')
        localStorage.setItem('butonTextDrAcClass','dark-active')
        document.querySelector('.buton-text.dark-active').classList.remove(localStorage.getItem('butonTextDrAcClass'))
        localStorage.setItem('butonTextClass','active')
        document.querySelector('.buton-text').classList.add(localStorage.getItem('butonTextClass'))
        localStorage.setItem('blackButonClass','blck-buton')
        localStorage.setItem('butonsTextClass','active')
        for (let index of butons) {
            
            index.onclick=()=>{
                document.querySelector('.buton-text.active').classList.remove(localStorage.getItem('butonsTextClass'))
                index.classList.add(localStorage.getItem('butonsTextClass'))
            }
            index.classList.remove(localStorage.getItem('blackButonClass'))

        }
       
    
       localStorage.setItem('btnLangClass','btn-primary')
        document.querySelector('.change-lang.btn-primary').classList.remove(localStorage.getItem('btnLangClass'))
        localStorage.setItem('btnLangClass2','btn-dark')
        langBtn.classList.add(localStorage.getItem('btnLangClass2'))
        localStorage.setItem('changeModeBtn','btn-primary')
        document.querySelector('.change-mode.btn-primary').classList.remove(localStorage.getItem('changeModeBtn'))
        localStorage.setItem('changeModeBtn2','btn-dark')
        changeModeBtn.classList.add(localStorage.getItem('changeModeBtn2'))
       localStorage.setItem('changeModeBtnInner','Dark')
        changeModeBtn.innerHTML=localStorage.getItem('changeModeBtnInner')
    }
}

document.querySelector('section').style.background=localStorage.getItem('sectionBackColor')
document.querySelector('section .container-fluid').style.background=localStorage.getItem('sectionContainerColor')
document.querySelector('section .into').style.background=localStorage.getItem('sectionIntoColor')
document.querySelector('section .container-fluid .into .text-butons').style.background=localStorage.getItem('textButtonsColor')
document.querySelector('.buton-color').style.background=localStorage.getItem('butonColorBack')
document.querySelector('.buton-color .container-fluid').style.background=localStorage.getItem('butonColorContainer')
headText.style.color=localStorage.getItem('headTextColor')
for (let index of videos) {
    index.style.borderRadius=localStorage.getItem('videosBorderRadius')
}

document.querySelector('.buton-text').classList.add(localStorage.getItem('butonTextClass'))
document.querySelector('.buton-text.active').classList.remove(localStorage.getItem('butonTextDrAcClass'))
document.querySelector('.buton-text.dark-active').classList.remove(localStorage.getItem('butonTextDrAcClass'))
for (let index of butons) {
            
    index.onclick=()=>{
        document.querySelector('.buton-text.active').classList.remove(localStorage.getItem('butonsTextClass'))
        index.classList.add(localStorage.getItem('butonsTextClass'))
    }
    index.classList.remove(localStorage.getItem('blackButonClass'))

}
for (let index of butons) {
            
    index.onclick=()=>{
        document.querySelector('.buton-text.dark-active').classList.remove(localStorage.getItem('butonsTextClass'))
        index.classList.add(localStorage.getItem('butonsTextClass'))
    }
    index.classList.add(localStorage.getItem('blackButonClass'))

}

document.querySelector('.change-lang.btn-dark').classList.remove(localStorage.getItem('btnLangClass'))
langBtn.classList.add(localStorage.getItem('btnLangClass2'))
document.querySelector('.change-mode.btn-dark').classList.remove(localStorage.getItem('changeModeBtn'))
changeModeBtn.classList.add(localStorage.getItem('changeModeBtn2'))
changeModeBtn.innerHTML=localStorage.getItem('changeModeBtnInner')














