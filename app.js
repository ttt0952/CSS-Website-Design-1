// Movement Animation objects to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const photo = document.querySelector('.photo img');
const confirm = document.querySelector('.confirm button');

// Set Events
container.addEventListener('mousemove', (e) => {
    // pageXY 為當下滑鼠所在的座標，除法只是為了降低數值，避免過度rotate
    let xAxis = (window.innerWidth / 2 - e.pageX)/25;
    let yAxis = (window.innerHeight / 2 - e.pageY)/25;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
});
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    //3D pop out
    photo.style.transform = 'translateZ(100px)';
    title.style.transform = 'translateZ(80px)';
    description.style.transform = 'translateZ(60px)';
    confirm.style.transform = 'translateZ(40px)';
});
container.addEventListener('mouseleave', (e) => {
    // 當滑鼠離開 container 讓物件們平滑地回歸原狀
    // 因此 card 加入 transition
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateX(0deg) rotateY(0deg)`
    photo.style.transform = 'translateZ(0px)';
    title.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    confirm.style.transform = 'translateZ(0px)';
});