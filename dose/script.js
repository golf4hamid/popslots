
const hideBtn = document.querySelector('#start');
const hideElement = document.querySelector('#main_container');
const showElement = document.querySelector('#full_post');
const modal1Btn = document.querySelector('#modal1-btn');

hideBtn.addEventListener('click', () => {
  hideElement.style.display = 'none';
  showElement.style.display = 'block';
});

const showResult = document.querySelector("#showResult")

showResult.addEventListener('click', () => {
    
  // Generate random indices
    const first_index = Math.floor(Math.random() * users.length);
    const second_index = Math.floor(Math.random() * users.length);
    // Make sure the two indices are different
    if (first_index === second_index) {
    second_index = (second_index + 1) % arr.length;
    }

    const winner1 = users[first_index];
    const winner1_img = images[first_index];
    const winner2 = users[second_index];
    const winner2_img = images[second_index];


    // Retrieve the corresponding elements
    const winner1_text_element = document.querySelector("#winner1_text");
    const winner1_image_element = document.querySelector("#winner1_image");

    const winner2_text_element = document.querySelector("#winner2_text");
    const winner2_image_element  = document.querySelector("#winner2_image"); 

   
    setInterval(function() {
         // Put Data into HTML Elements
        winner1_text_element.textContent = winner1;
        winner1_image_element.src = winner1_img;
        winner2_text_element.textContent = winner2;
        winner2_image_element.src = winner2_img;
    }, 10000);
});

const users = ['iwvx5', 'pg.skaw', 'pg_yazid', 'aymanesektaoui', 'mutaz_zizo', 'alshmryrd16', 'lpwso', 'ouassim_balibet', 'mad_iaq', 'pg.m76m', '7im_q', 'vaa_leader', 'ytluci0', 'pg_brlen', 'ay.95___', 'pg.nvralone', 'itsm.brato', 'horibil_', '_oij', 'pgtimon', 'mambay.pg', 'zoxpen', 'ad.el.22', 'pg.shrooud', 'its.obeidi.25', 'elpedri06', '1.7n1', 'f4rooooq', 'mao_casts', 'elguabbasmohammad', 'zikov7.1officiel', 'y05att', 'nolava.tx', 'a01ytt', 'sparta.ps', 'issam_badre_dine', '_benkhadra_', 'haritch_', 'its.vampireee', 'pg.marco777', 'pg.nothing', 'nizar_bousaba', 'eroooooooor.pg', 'patal_hh', 'andrwoemil', 'sharkoch47_', 'pg.mouniroxx'];


const images = ['/img/users/00.jpg', '/img/users/01.jpg', '/img/users/02.jpg', '/img/users/03.jpg', '/img/users/04.jpg', '/img/users/05.jpg', '/img/users/06.jpg', '/img/users/07.jpg', '/img/users/08.jpg', '/img/users/09.jpg', '/img/users/10.jpg', '/img/users/11.jpg', '/img/users/12.jpg', '/img/users/13.jpg', '/img/users/14.jpg', '/img/users/15.jpg', '/img/users/16.jpg', '/img/users/17.jpg', '/img/users/18.jpg', '/img/users/19.jpg', '/img/users/20.jpg', '/img/users/21.jpg', '/img/users/22.jpg', '/img/users/23.jpg', '/img/users/24.jpg', '/img/users/25.jpg', '/img/users/26.jpg', '/img/users/27.jpg', '/img/users/28.jpg', '/img/users/29.jpg', '/img/users/30.jpg', '/img/users/31.jpg', '/img/users/32.jpg', '/img/users/33.jpg', '/img/users/34.jpg', '/img/users/35.jpg', '/img/users/36.jpg', '/img/users/37.jpg', '/img/users/38.jpg', '/img/users/39.jpg', '/img/users/40.jpg', '/img/users/41.jpg', '/img/users/42.jpg', '/img/users/43.jpg', '/img/users/44.jpg', '/img/users/45.jpg', '/img/users/46.jpg'];





