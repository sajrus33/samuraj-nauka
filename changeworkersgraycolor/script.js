//pobieranie DOM-u
const colorImg = document.querySelector(".color");
const grayImg =document.querySelector('.gray');
const h1 =document.querySelector('.member h1');
const h2 =document.querySelector('.member h2');


//[][0]=color,1=gray,2=names,3=professions
const workersArray=[
    ['img/s1.png','img/s2.png','img/s3.png'],//0  color
    ['img/s1a.png','img/s2a.png','img/s3a.png'],//1  gray
    ['Anna Baugart','Marek Feliksiak','Arek Pawłowicz'],//2  h1
    ['Programistka js','UX i UI Designer','Front-End Developer']//3  h2
    ];
//zmienne
const changeTime = 4000;
    
let showThisWorker = 0;    

function ChangeWorkers(){
    showThisWorker++;

    if(showThisWorker==workersArray[1].length)showThisWorker=0;
    
    colorImg.src=workersArray[0][showThisWorker];
    grayImg.src=workersArray[1][showThisWorker];
    h1.textContent=workersArray[2][showThisWorker];
    h2.textContent=workersArray[3][showThisWorker];
    
}

setInterval(ChangeWorkers,changeTime);