
const hideBtn = document.querySelector('#start');
const hideElement = document.querySelector('#main_container');
const showElement = document.querySelector('#full_post');
const modal1Btn = document.querySelector('#modal1-btn');

hideBtn.addEventListener('click', () => {
  hideElement.style.display = 'none';
  showElement.style.display = 'block';
});


const users = ['iwvx5', 'pg.skaw', 'pg_yazid', 'aymanesektaoui', 'mutaz_zizo', 'alshmryrd16', 'lpwso', 'ouassim_balibet', 'mad_iaq', 'pg.m76m', '7im_q', 'vaa_leader', 'ytluci0', 'pg_brlen', 'ay.95___', 'pg.nvralone', 'itsm.brato', 'horibil_', '_oij', 'pgtimon', 'mambay.pg', 'zoxpen', 'ad.el.22', 'pg.shrooud', 'its.obeidi.25', 'elpedri06', '1.7n1', 'f4rooooq', 'mao_casts', 'elguabbasmohammad', 'zikov7.1officiel', 'y05att', 'nolava.tx', 'a01ytt', 'sparta.ps', 'issam_badre_dine', '_benkhadra_', 'haritch_', 'its.vampireee', 'pg.marco777', 'pg.nothing', 'nizar_bousaba', 'eroooooooor.pg', 'patal_hh', 'andrwoemil', 'sharkoch47_', 'pg.mouniroxx'];


const images = ['https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/341207599_614390477254721_6759371469864333716_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=52v2r8cF0YIAX_WAN8_&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCKw8iXCeJjIsJcog8n6TeeZCJg87a2JSyD_AC6OjxeCQ&oe=64493A43&_nc_sid=1527a3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/332571583_243784307979348_2118574544891792483_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=AzvpQ6FUHL8AX8a63x6&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAl4mRwcFgxNm6rBCd93MqpWylfkTGcQ-Ldp4l7ju-gFg&oe=6448A5F6&_nc_sid=1527a3',
 'https://instagram.ffez2-2.fna.fbcdn.net/v/t51.2885-19/329429307_1193957657948551_7009649838235040603_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=RC9V-4zrTgIAX9_KZrP&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDPtunXTmkbNBwxYIhyG5A2Au0xiZ4ToJSjHRwD0X8gxw&oe=64490C0A&_nc_sid=1527a3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/340491654_169559762283193_2049616106028772266_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=8T6LhKVdiiIAX_PLTp1&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCv2B-W67J0VDtKKbN5XPokALQdoyV5fMIhk1UUAdccPQ&oe=64488D1A&_nc_sid=1527a3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/300651128_756568495407624_6527575917851940648_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=yFvLPId7frUAX908hl5&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCvSew5fM1ax2VSWZPItxnl7ogEWbWH-sZiUBw_VeS37w&oe=6448A0C4&_nc_sid=8fd12b',
 'https://instagram.ffez2-2.fna.fbcdn.net/v/t51.2885-19/301818422_1373567203171461_7766682221113445856_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=l_dihciE8OYAX_1fOk_&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAlcbdPw8gAnRLBNfZbLg7xIznvX7L0-5KVlXUDMTW6oA&oe=6448D33D&_nc_sid=8fd12b',
 'https://instagram.ffez2-2.fna.fbcdn.net/v/t51.2885-19/341794132_780861369899323_3947565497809544520_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=FB03B2sdj18AX9gHdbP&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBp6km7m6Wt-nm_M-3xdR-WlT5aAJm9PHlckhzYkP-Z3Q&oe=64490A0B&_nc_sid=8fd12b',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/278730688_523496156076564_6447910407845195748_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=kwlGGND3vAgAX-XyYGI&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfB58lDrPrYCxGwOR6MDRPyN-PsQsM1a19ggrSaMd7DlwA&oe=6449A5E4&_nc_sid=8fd12b',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/336969830_777456403750370_6217089489321527057_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=FiLFMsVR958AX9jJpIa&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCahlDd_o8cqjz312kXcOtWj8y4MSyXpxOxnRqO3jMWug&oe=6449E238&_nc_sid=8fd12b',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/339970559_171587089136617_4410690487736924427_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=AMkpwo0FevUAX9p25RU&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDKojgbdmJW-B3Fo8CnZaNhqVhrNzPvszr-F2zSsG0nbg&oe=64493E09&_nc_sid=1527a3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/271131972_668108077683438_3196439349689242761_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=JRsr0dhHmhkAX-jMECZ&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBAVhAtrbJ1k8eiaUNmPmT40nKW3M4WjyAZG1AaphmIPg&oe=6449BC62&_nc_sid=1527a3',
 'https://instagram.ffez2-2.fna.fbcdn.net/v/t51.2885-19/339349510_145284598246281_5352689549568960120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=QOiF1o56B7IAX_FkwXS&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCBwnK3bFtlDRbz83rzh0ttSJntrozUwpS-9UaOIc5d8g&oe=6448937C&_nc_sid=1527a3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/334299774_669662058265782_2851222199199780367_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=0ETcJQJnfGEAX86DYx4&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfC9PbpwHIQgLcQMdKutgaJFXvPxmL4J5nhzWw1Mps9hfw&oe=64485FBE&_nc_sid=1527a3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/333206440_879123446713478_8332227766793071308_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=tfMYyN6N1F0AX_1jjg6&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA9o9SWg6-f9iEG5l9WL3gwTbvue4ZNn_cjxQZxI-iVzw&oe=6449CDDA&_nc_sid=8fd12b',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/340787374_139560365705118_7975964605002105709_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=c56dq_eymswAX93pdov&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBYpFx6Yx_AMyyfCfqvf1ByPDoIn9gTp3Dfr2qvUSEecg&oe=64481113&_nc_sid=8fd12b',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/342223269_763774942081986_6659809953731712376_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=RbTwjcfek7kAX8Hg-5W&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAt9V7wlGSdZEiXpSr9Lh4jSJlQhbQu8Krbmb2MN-jJMA&oe=644996E9&_nc_sid=1527a3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/335529848_1190047608311496_2270424980236151999_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Ht8epTED-z8AX--_jIq&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBCTI86vhcumPkcVTsNmTQde4T9sjdq9AtV-epYMt9DYw&oe=6449DEA3&_nc_sid=1527a3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/339333537_788046219011330_2531901631773031511_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=uoI_kBS9rKIAX_ADKLe&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDnKfqbt094wPVGNWL0G3boLnvUCkrXRxjpHcx8YiPwbg&oe=64497E71&_nc_sid=1527a3',
 'https://instagram.ffez2-2.fna.fbcdn.net/v/t51.2885-19/341198016_121987794193363_4309481113155004672_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ou1pp0hCxkgAX9t8ek2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDhNi3wubJcsnX4q0wGwCm-lWMKere4VLV7uJUKWiRfHw&oe=64491B6D&_nc_sid=8fd12b',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/333671285_874485750478729_5891195674293384902_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=FzUlGnkal00AX-G7Ymv&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfA0vx7blG4KUCgL8i9EiMu_8E0hU_vc70LtRsEuOLxJKA&oe=64499FC6&_nc_sid=1527a3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/337896339_599514328764985_7455521857514897303_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=yg-4IG-9nmIAX-gMwTt&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBo3rhEJ6Q0j1Vlwsm7enca3A9M5O6qECZOgO5S501OhQ&oe=6449A6A2&_nc_sid=1527a3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/315184319_622502712956537_2065541742715867918_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=6zy9HyfIovUAX93ZXZG&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDD_KNc8WB2rQD1Eo7ezh3-1lqoJp3qNWbNsjFQwX08OQ&oe=6449CC40&_nc_sid=1527a3',
 'https://instagram.ffez2-2.fna.fbcdn.net/v/t51.2885-19/341899087_769615777896513_4237128048837547584_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=ksXV9yZev_AAX9ixNoZ&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAIDpytmUDPguzt4vfBVuLpHJ-cH0QIW44x3YgpLQ5Lew&oe=6448207C&_nc_sid=1527a3',
 'https://instagram.ffez2-2.fna.fbcdn.net/v/t51.2885-19/341748511_1213569322632203_8238867615754131379_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=NiOXJvpOCjwAX83MCLd&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDILzMqRMEBnz2MgcFf2MCEAKWNo4bqK7A5AG0BNJ5ryQ&oe=644863AB&_nc_sid=8fd12b',
 'https://instagram.ffez2-2.fna.fbcdn.net/v/t51.2885-19/293880451_1093923967912244_1371862565682540819_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=8SluhFUSTxMAX_ZFnIk&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCmLioZdavwhf11_Ozy3NzBrBWOjfEQSw1XuDdEbip4eQ&oe=64484AEC&_nc_sid=8fd12b',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/285184410_1390568924777787_78043876867102227_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=DES-F52XMm4AX_M0Seu&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfC8YYRWQ5z_jnq-rxAbi8vWWdEjsXDuwGBU2qR4PlFs9g&oe=6448FC7B&_nc_sid=8fd12b',
 'https://instagram.ffez2-2.fna.fbcdn.net/v/t51.2885-19/341921559_751989999724294_8424336775790065120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=pkqoUMCripEAX-bvolm&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfD1GDIpiDxiRe1ifpeCHuYBo-t4Co2N8_Txz_vE5utqTA&oe=6448721E&_nc_sid=1527a3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/334699714_232427202644461_5022237571371509403_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=u8KJOWAFiiUAX-xPjdp&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBs8NHSQ4j3rf0u2_oL_jbFmjwmpsOelonUs_wCtEFOkw&oe=6449C635&_nc_sid=8fd12b',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/337911670_976683499982403_6649710795184293565_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=d9IfsloImZ0AX8sMIwV&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfA6HsDOr2n0aXUqVZRW5vm71nw4BxdgcZoX5OvrlDWPmw&oe=64483227&_nc_sid=1527a3',
 'https://instagram.ffez2-2.fna.fbcdn.net/v/t51.2885-19/36479776_408982896286988_8848526128986456064_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=3VbqjSd5cQoAX9eYJ0p&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAoDMGIyb6hmYVMk4dr-5Rdm6RElFgL4sCPl-14XoZixw&oe=64487CF9&_nc_sid=1527a3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/319584651_193389433244448_4023000342040976268_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=_chIA-ddNbkAX_LVSHm&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAzJ2KWPHsv7sWHSzwPCyy4HOTlUADjEERGAB3MmrXNLQ&oe=64488B1A&_nc_sid=8fd12b',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/341370253_263497469355232_7208830188152751877_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=C9u6DPZ9nV8AX_KFe1P&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfC_S-zz8pJdt8MZk-l0BYZOx5Ay1VjmH58tOAdnXkzrBg&oe=64492008&_nc_sid=8fd12b',
 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-dus1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=DM-1yod52ScAX9-bTQ4&edm=AL4D0a4BAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfANIBNILyandNrJ5IcqE8Gm6cbYq9KKAes7uckVUOtVeg&oe=6448890F&_nc_sid=712cc3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/341178007_793855555014493_7474422614812951466_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=qekFtiz_vVYAX8siELr&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBu5tuCnt7Hcz91IxaBl5GK8O0bDv3mVsoW6bpYPkumOg&oe=64487D9D&_nc_sid=8fd12b',
 'https://instagram.ffez2-2.fna.fbcdn.net/v/t51.2885-19/330350994_902589761014617_8980117194525761832_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=ftgKDAoLPxgAX8t747O&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfD2JYCKnPzK6Wya5joPVmB1qi2KeZCFkJDKmH6Yfah0iQ&oe=64483189&_nc_sid=1527a3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/331257467_954424862168201_7837439457867855713_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=v-UMChe6aIgAX-JRPk4&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDnyOw7wl42Llz2zQrSJI9CnMD2ADRxmqLjma0U5w88sQ&oe=644848C0&_nc_sid=1527a3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/286130844_314280004243359_4557343856709452029_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=vTHP0NBM9UgAX_ZWiKz&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCQtm6tqiXXYUoYlgC7I8meYHTgugqoHzbpaD5IsL1OIA&oe=64495D4A&_nc_sid=1527a3',
 'https://instagram.ffez2-2.fna.fbcdn.net/v/t51.2885-19/334429779_1496672670856796_3544732640679988695_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=8euXvVCQEnAAX9Spia9&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfD_gQnI5sMqeSa5wYBl1dzUWpdpFIyFmogSumhid64KkQ&oe=644846DA&_nc_sid=1527a3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/334558753_9686687711357088_1673803698070198705_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=sgPencBHqHcAX9iuQdk&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDqD7Jcz2l4Sz-2kewMFpMjjO2uNq3zi_Xw23uGWW5Z3Q&oe=6448E444&_nc_sid=1527a3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/338893170_776764714007510_4991249228214425039_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=P78bVd3W1rUAX8RO-3M&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDNmZc7CTmmqc77d5xZFziJm81xAgxymNcT7Uxf_dKB9g&oe=6449BCD1&_nc_sid=8fd12b',
 'https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=DM-1yod52ScAX9skGLA&edm=ALB854YBAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfCmw1_cgCl0BvhTwi0uSmER1DDUAPhLdhBumObSNV-dTA&oe=6448890F&_nc_sid=04cb80',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/333011851_539908744879241_1668722031665690745_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=7zERJ4xB5uMAX_DSMoj&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBcDM-x-itwE37rpOrMOcR2vvnv_w-mZdtQDeCgLUQuQQ&oe=6449782A&_nc_sid=8fd12b',
 'https://instagram.ffez2-2.fna.fbcdn.net/v/t51.2885-19/342399386_1436231223815409_6510919577781905506_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=5WQJwHG_IaYAX-2ZKuf&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDbqxCdq0FyjWWM7SdKaUUo3eNkSq_ka5KP5sdJe3PGgQ&oe=644984E5&_nc_sid=1527a3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/342521056_765590565077762_4092899933253142232_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=qAP-izR_gsIAX8dZX-F&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAwYsKRmeK5q03zRU0Mg4t_wJScPfDcOSIv5ozDy_ShtQ&oe=6447FE3B&_nc_sid=8fd12b',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/341341360_1311083776156513_7921352154534995399_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=19OeDXmu4DUAX_KTAku&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBMikvbOA9XqFDehobMw79jgvp6AoCAHrmNXiSDC8yaOQ&oe=64499701&_nc_sid=1527a3',
 'https://instagram.ffez2-1.fna.fbcdn.net/v/t51.2885-19/342064075_609923307420486_7508321581832357903_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=T7CybYQAjW4AX8peIZj&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCLb9Q8XCOYYKA6j0O2qdqMOxN0ZYipsBsKBQH2Z_GFzw&oe=644871EA&_nc_sid=1527a3',
 'https://instagram.ffez2-2.fna.fbcdn.net/v/t51.2885-19/338915921_742586007414323_5374167942470589342_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffez2-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=dSLXV-_P5_gAX_J4eda&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBLRGM0iGFXOMGAtSE7UfF7UlnwDl8-CwrKBZoslNRbXQ&oe=64485502&_nc_sid=1527a3'];


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
const winner1_text_element = document.getElementById("winner1_text");
const winner1_image_element = document.getElementById("winner1_image");

const winner2_text_element = document.getElementById("winner2_text");
const winner2_image_element  = document.getElementById("winner2_image"); 

// Put Data into HTML Elements
winner1_text_element.textContent = winner1;
winner1_image_element.src = winner1_img;
winner2_text_element = winner2;
winner2_image_element = winner2_img;

