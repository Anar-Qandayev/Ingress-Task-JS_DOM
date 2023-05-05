const dataProduct = [
    {
      id: 1,
      image:"assets/foto/img_1.jpg.webp",
      title:"STANDARD ROOM",
      price:"$350.00/per night",
      alt:"room image"
    },
    {
      id: 2,
      image:"assets/foto/img_2.jpg.webp",
      title:"FAMILY ROOM",
      price:"$400.00/per night",
      alt:"room image"
    },
    {
      id: 3,
      image:"assets/foto/img_3.jpg.webp",
      title:"SINGLE ROOM",
      price:"$255.00/per night",
      alt:"room image"
    },
    {
      id: 4,
      image:"https://preview.colorlib.com/theme/suites/images/img_4.jpg",
      title:"DELUXE ROOM",
      price:"$150.00/per night",
      alt:"room image"
    },
    {
      id: 5,
      image:"assets/foto/img_2.jpg.webp",
      title:"LUXURY ROOM",
      price:"$200.00/per night",
      alt:"room image"
    },
    {
      id: 6,
      image:"assets/foto/img_3.jpg.webp",
      title:"SINGLE ROOM",
      price:"$150.00/per night",
      alt:"room image"
    }
  ];

const content = document.querySelector(".rooms-card");

dataProduct.map((item) => {
content.innerHTML += `
<figure>
    <img src="${item.image}" alt="${item.alt}">
    <figcaption>
        <p>${item.title}</p>
        <span>${item.price}</span>
    </figcaption>
</figure>
`;
});

const aboutData = [
    {
        id:1,
        image:"assets/foto/person_1.jpg.webp",
        alt:"client png",
        name:"ANGELLA LOPEZ",
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.",
        span:"Read More ->"

    },
    {
        id:2,
        image:"assets/foto/person_2.jpg.webp",
        alt:"client png",
        name:"MARINA STALKS",
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.",
        span:"Read More ->"
    },
    {
        id:3,
        image:"assets/foto/person_3.jpg.webp",
        alt:"client png",
        name:"ETHAN HOOVER",
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.",
        span:"Read More ->"
    },
    {
        id:4,
        image:"assets/foto/person_4.jpg.webp",
        alt:"client png",
        name:"MEGAN PEARSON",
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.",
        span:"Read More ->"
    },
    {
        id:5,
        image:"assets/foto/person_1.jpg.webp",
        alt:"client png",
        name:"ANGELLA LOPEZ",
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.",
        span:"Read More ->"
    },
    {
        id:6,
        image:"assets/foto/person_3.jpg.webp",
        alt:"client png",
        name:"ETHAN HOOVER",
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore recusandae soluta quis.",
        span:"Read More ->"
    },
]

const content2 = document.querySelector(".reviews-cards");

aboutData.map((item) => {
content2.innerHTML += `
<figure>
    <img src="${item.image}" alt="${item.alt}">
    <figcaption>
        <h3>${item.name}</h3>
        <p>${item.title}</p>
        <span>${item.span}</span>
    </figcaption>
</figure>
`;
});



// ? Carousel-i YouTube-da baxaraq  yazdım :)

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}





const carousel=document.querySelector(".r-carousel"),
firstImg=carousel.querySelectorAll("img")[0],
arrowIcons=document.querySelectorAll(".r-wrapper i");

let isDragStart=false , isDragging=false,prevPageX, prevScrollLeft ,positionDiff;

const showHiddeIcons=()=>{
    let scrollWidth=carousel.scrollWidth-carousel.clientWidth;
    arrowIcons[0].style.display=carousel.scrollLeft==0 ? "none" : "block";
    arrowIcons[1].style.display=carousel.scrollLeft==scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon=>{
    icon.addEventListener("click",()=>{
        let firstImgWidth=firstImg.clientWidth+14;
        carousel.scrollLeft+=icon.id=="left" ? -firstImgWidth : firstImgWidth;
        setTimeout(()=> showHiddeIcons(),60);
    });
});

const autoSlide=()=>{
    if(carousel.scrollLeft-(carousel.scrollWidth-carousel.clientWidth))return;
    positionDiff=Math.abs(positionDiff);
    let firstImgWidth=firstImg.clientWidth+14;
    let valDifference=firstImgWidth-positionDiff;
    if(carousel.scrollLeft>prevScrollLeft){
        return carousel.scrollLeft+=positionDiff>firstImgWidth/3 ? valDifference : -positionDiff; 
    }
    carousel.scrollLeft-=positionDiff>firstImgWidth/3 ? valDifference : -positionDiff;
}
const dragStart=(e)=>{
    isDragStart=true;
    prevPageX=e.pageX || e.touches[0].pageX;
    prevScrollLeft=carousel.scrollLeft;
}
const dragging =(e) => {
    if(!isDragStart)return;
    e.preventDefault();
    isDragging=true;
    carousel.classList.add("dragging");
    positionDiff=(e.pageX || e.touches[0].pageX)-prevPageX;
    carousel.scrollLeft=prevScrollLeft-positionDiff;
    showHiddeIcons();
}

const dragStop=()=>{
    isDragStart=false;
    carousel.classList.remove("dragging");

    if(!isDragging)return;
    isDragging=false;
    autoSlide();
}

carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("touchstart",dragStart);

document.addEventListener("mousemove",dragging);
carousel.addEventListener("touchmove",dragging);



