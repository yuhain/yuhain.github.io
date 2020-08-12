var chinese = document.getElementById('chi_click'),
english = document.getElementById('en_click'),
english2 = document.getElementById('en_click2'),
chinese2 = document.getElementById('chi_click2'),
fr_txt = document.querySelectorAll('.chi'),
en_txt = document.querySelectorAll('.en'),
nb_fr = fr_txt.length,
nb_en = en_txt.length;

chinese.addEventListener('click', function() {
langue(chinese,english);
}, false);

english.addEventListener('click', function() {
langue(english,chinese);
}, false);

chinese2.addEventListener('click', function() {
    langue(chinese2,english2);
    }, false);
    
english2.addEventListener('click', function() {
    langue(english2,chinese2);
}, false);

function langue(langueOn,langueOff){
if (!langueOn.classList.contains('current_lang')) {
    langueOn.classList.toggle('current_lang');
    langueOff.classList.toggle('current_lang');
}
if(langueOn.innerHTML == 'Chinese'){
    document.getElementById("eng_nav").style.display = "none";
    document.getElementById("chinese_nav").style.display = "flex";
    afficher(fr_txt, nb_fr);
    cacher(en_txt, nb_en);
}
else if(langueOn.innerHTML == 'English'){
    document.getElementById("chinese_nav").style.display = "none";
    document.getElementById("eng_nav").style.display = "flex";
    afficher(en_txt, nb_en);
    cacher(fr_txt, nb_fr);
}
else if(langueOn.innerHTML == 'English'){
    document.getElementById("chinese_nav").style.display = "none";
    document.getElementById("eng_nav").style.display = "flex";
    afficher(en_txt, nb_en);
    cacher(fr_txt, nb_fr);
}
else if(langueOn.innerHTML == 'Chinese'){
    document.getElementById("eng_nav").style.display = "none";
    document.getElementById("chinese_nav").style.display = "flex";
    afficher(fr_txt, nb_fr);
    cacher(en_txt, nb_en);
}
}

function afficher(txt,nb){
for(var i=0; i < nb; i++){
    txt[i].style.display = 'block';
}
}
function cacher(txt,nb){
for(var i=0; i < nb; i++){
    txt[i].style.display = 'none';
}
}
function init(){
langue(english,chinese);
}
init();