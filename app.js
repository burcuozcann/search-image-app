const formWrapper=document.querySelector(".form-wrapper");
const form=document.querySelector("#form");
const searchInput=document.querySelector("#searchInput");
const buttonWrapper=document.querySelector(".button-wrapper");
const searchButton=document.querySelector("#searchButton");
const clearButton=document.querySelector("#clearButton");
const imageListWrapper=document.querySelector(".imagelist-wrapper");

runEventListener();

function runEventListener(){
    form.addEventListener("submit",search);

}

function search(e){
   const value=searchInput.value.trim();

    e.preventDefault();

}