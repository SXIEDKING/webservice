"use strict"

let img=document.createElement("img")
    document.body.appendChild(img)

async function fetchData(url) {  //Uniform Resource Locator
    let headers = await fetch(url);   //Get the headers 
    let data = await headers.text();  //get the document 'payload'
    
    let obj=JSON.parse(data)

    
    img.src=obj.message
   
  }

  function showDoggies(){
  fetchData("https://dog.ceo/api/breeds/image/random") //Hit the endpoint of the service
  }