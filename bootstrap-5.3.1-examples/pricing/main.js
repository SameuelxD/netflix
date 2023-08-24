const path="config";
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