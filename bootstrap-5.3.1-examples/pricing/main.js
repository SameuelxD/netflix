const path="config";
let buildLogo=async()=>{
    let petition=await fetch(`${path}.json`);
    let res=await petition.json();
    let selection=document.querySelector("#myJsonLogo");
    selection.insertAdjacentHTML("beforeend", /* html */ `<img src= 
    ${res.logo.imagen} alt="logo" style="width: 50%;">
    `);
}
buildLogo();
let buildNav=async()=>{
    let petition=await fetch(`${path}.json`);
    let res=await petition.json();
    let selection=document.querySelector("#myJsonNav");
    selection.insertAdjacentHTML("beforeend", /* html */ `
    <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#">
    ${res.nav.option1}</a>
    <a class="me-3 py-2 link-body-emphasis text-decoration-none" href="#">
    ${res.nav.option2}</a>`);
}
buildNav();
let buildHeader=async()=>{
    let petition=await fetch(`${path}.json`);
    let res=await petition.json();
    let selection=document.querySelector("#myJsonSection");
    selection.insertAdjacentHTML("beforeend", /* html */ `
    <h1 class="display-4 fw-normal text-body-emphasis">
        ${res.section.title}</h1> 
    <p class="fs-5 text-body-secondary">
        ${res.section.paragraph} 
    </p>
    `);
};
buildHeader();
async function buildCardsTitles(plansNumber, plansElementId) {
    try {
        const petition = await fetch(`${path}.json`);
        const res = await petition.json();
        const selection = document.querySelector(`#${plansElementId}`);
        selection.insertAdjacentHTML("beforeend", /* html */ `
            <h4 class="my-0 fw-normal">
                ${res.plans[`title${plansNumber}`]}
            </h4>
        `);
    } catch (error) {
        console.error(`Error al construir el título del plan ${plansNumber}:`, error);
    }
}

const plansInfo = [
    { number: 1, plansElementId: "myJsonPlans1" },
    { number: 2, plansElementId: "myJsonPlans2" },
    { number: 3, plansElementId: "myJsonPlans3" }
];

plansInfo.map(info => buildCardsTitles(info.number, info.plansElementId));



async function buildCard(cardNumber, targetElementId) {
    try {
        const petition = await fetch(`${path}.json`);
        const res = await petition.json();
        const selection = document.querySelector(`#${targetElementId}`);
        selection.insertAdjacentHTML("beforeend", /* html */ `
            <h1 class="card-title pricing-card-title">
            ${res.cards[`price${cardNumber}`]}
            <small class="text-body-secondary fw-light">${res.cards.subtitle}</small>
            </h1>
            <ul class="list-unstyled mt-3 mb-4">
                <li style="font-size: 1.5rem";>${res.cards[`quality${cardNumber}`]}
                </li>
                <br>
                <li style="font-size: 1rem";>${res.cards[`resolution${cardNumber}`]}
                </li>
                <li style="font-size: 1rem";>
                ${res.cards[`device${cardNumber}`]}
                </li>
            </ul>    
        `)
        
    } catch (error) {
        console.error(`Error al construir la tarjeta ${cardNumber}:`, error);
    }
}

const cardInfo = [
    { number: 1, targetElementId: "myJsonCard1" },
    { number: 2, targetElementId: "myJsonCard2" },
    { number: 3, targetElementId:
    "myJsonCard3"}
];

cardInfo.map(info => buildCard(info.number, info.targetElementId));

async function buildButtoms(buttomsElementId) {
    try {
        const petition = await fetch(`${path}.json`);
        const res = await petition.json();
        const selection = document.querySelector(`#${buttomsElementId}`);
        selection.insertAdjacentHTML("beforeend", /* html */ `
            <button type="button" class="w-100 btn btn-lg btn-danger">
                ${res.start.buttom}
            </button>
        `);
    } catch (error) {
        console.error(`Error al construir el botón en ${buttomsElementId}:`, error);
    }
}

const buttomsInfo = [
    { number: 1, buttomsElementId: "myJsonStart1" },
    { number: 2, buttomsElementId: "myJsonStart2" },
    { number: 3, buttomsElementId: "myJsonStart3" }
    
];

buttomsInfo.forEach(info => buildButtoms(info.buttomsElementId));

let buildComparePlans=async()=>{
    let petition=await fetch(`${path}.json`);
    let res=await petition.json();
    let selection=document.querySelector("#myJsonCompare");
    selection.insertAdjacentHTML("beforeend", /* html */ `
    <h2 class="display-6 text-center mb-4">${res.compare.title}</h2>
    `);
};
buildComparePlans();


async function buildSub(subNumber, subElementId) {
    try {
        const petition = await fetch(`${path}.json`);
        const res = await petition.json();
        const selection = document.querySelector(`#${subElementId}`);
        selection.insertAdjacentHTML("beforeend", /* html */ `    
            <th style="width: 22%;" id="${subElementId}">
                ${res.plans[`title${subNumber}`]}
            </th>
        `);
    } catch (error) {
        console.error(`Error al construir el subtítulo en ${subElementId}:`, error);
    }
}

const subInfo = [
    { number: 1, subElementId: "myJsonSub1" },
    { number: 2, subElementId: "myJsonSub2" },
    { number: 3, subElementId: "myJsonSub3" }
    // Agrega más subtítulos según sea necesario
];

subInfo.forEach(info => buildSub(info.number, info.subElementId));




/* 
let buildCard1=async()=>{
    let petition=await fetch(`${path}.json`);
    let res=await petition.json();
    let selection=document.querySelector("#myJsonCard1");
    selection.insertAdjacentHTML("beforeend", /* html  `
    <h4 class="my-0 fw-normal">
        ${res.cards.plan1}
    </h4>
    `)  
}
buildCard1();
let buildCard2=async()=>{
    let petition=await fetch(`${path}.json`);
    let res=await petition.json();
    let selection=document.querySelector("#myJsonCard2");
    selection.insertAdjacentHTML("beforeend", /* html  `
    <h4 class="my-0 fw-normal">
        ${res.cards.plan2}
    </h4>
    `) 
}
buildCard2();
let buildCard3=async()=>{
    let petition=await fetch(`${path}.json`);
    let res=await petition.json();
    let selection=document.querySelector("#myJsonCard3");
    selection.insertAdjacentHTML("beforeend", /* html  `
    <h4 class="my-0 fw-normal">
        ${res.cards.plan3}
    </h4>
    <h1 class="card-title pricing-card-title">
    ${res.cards.price3} 
    <small class="text-body-secondary fw-light">
    ${res.cards.subtitle}</small>
    </h1>
    `) 
}
buildCard3();


selection.insertAdjacentHTML("beforeend", /* html 
<h4 class="my-0 fw-normal">
${res.cards[`plan${cardNumber}`]}
</h4>
`); 

*/
