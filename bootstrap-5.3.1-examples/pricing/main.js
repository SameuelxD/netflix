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

