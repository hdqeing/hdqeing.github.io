const myImage = document.querySelector("img");

myImage.onclick = () =>{
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/bg-shanghai.jpg"){
        myImage.setAttribute("src", "images/beach-watermelone.jpg");
    } else {
        myImage.setAttribute("src", "images/bg-shanghai.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserLocation(){
    const myLocation = prompt("Please enter your location.");
    if (!myLocation){
        setUserLocation();
    } else {
        localStorage.setItem("location", myLocation);
        myHeading.textContent = `Here are some cool activities in ${myLocation}`;
    }
}

if (!localStorage.getItem("location")){
    setUserLocation();
} else {
    const storedLocation = localStorage.getItem("location");
    myHeading.textContent = `Here are some cool activities in ${storedLocation}`;
}

myButton.onclick = ()=>{
    setUserLocation();
};