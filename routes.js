let tempc;
var d=new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
var newD = new Date();
var n = newD.getDay()
let week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
document.getElementById("time").innerHTML =week[n]+" , "+d;

function process()
{
      var selectedValue=document.getElementById("city").value;
      //console.log(selectedValue);
       var request = new XMLHttpRequest()
      // Open a new connection, using the GET request on the URL endpoint
       request.open('GET', 'http://api.openweathermap.org/data/2.5/find?q='+selectedValue+'&units=metric&appid=af8a888b5c0d1f1ce6a286db966af8ed', true)
       request.onload = function() {
        // Begin accessing JSON data here
       var data = JSON.parse(this.response)
       console.log(data);
       //console.log(data.list[0].name)
       document.getElementById("state").innerHTML=data.list[0].name;
       document.getElementById("temp").innerHTML=data.list[0].main.temp;
       document.getElementById("condition").innerHTML=data.list[0].weather[0].description;
       document.getElementById("button1").style.color = "black";
       document.getElementById("button2").style.color = "#666666";
       let icon="http://openweathermap.org/img/w/"+data.list[0].weather[0].icon+".png";
       $("#icon").attr("src",icon);
       document.getElementById("button1").style.visibility = "visible";
       document.getElementById("button2").style.visibility = "visible";
      }
     request.send();
}

 function findTemp()
 {
   var selectedValue=document.getElementById("city").value;
   //console.log(selectedValue);
   var request = new XMLHttpRequest()
   // Open a new connection, using the GET request on the URL endpoint
      request.open('GET', 'http://api.openweathermap.org/data/2.5/find?q='+selectedValue+'&units=metric&appid=af8a888b5c0d1f1ce6a286db966af8ed', true)
      request.onload = function() {
             // Begin accessing JSON data here
      var data = JSON.parse(this.response);
      document.getElementById("state").innerHTML=data.list[0].name;
      let NewData=Math.round((data.list[0].main.temp*1.8)+32);
      document.getElementById("temp").innerHTML=NewData;
      document.getElementById("condition").innerHTML=data.list[0].weather[0].description;
      document.getElementById("button2").style.color = "black";
      document.getElementById("button1").style.color = "#666666";
      document.getElementById("button1").style.visibility = "visible";
      document.getElementById("button2").style.visibility = "visible";
      let icon="http://openweathermap.org/img/w/"+data.list[0].weather[0].icon+".png";
      $("#icon").attr("src",icon);
  }
  request.send()
}
function onloadData()
{
  alert("Allow Location?");
  getLocation();
  showPosition(position);
}



  function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
    
  }
}

function showPosition(position) {
  var request = new XMLHttpRequest()
  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&units=metric&appid=af8a888b5c0d1f1ce6a286db966af8ed', true)
     request.onload = function() {
    // Begin accessing JSON data here
     var data = JSON.parse(this.response);
      document.getElementById("state").innerHTML=data.name;
      document.getElementById("temp").innerHTML=data.main.temp;
      document.getElementById("condition").innerHTML=data.weather[0].description;
     document.getElementById("button2").style.color = "black";
     document.getElementById("button1").style.color = "#666666";
     document.getElementById("button1").style.visibility = "visible";
     document.getElementById("button2").style.visibility = "visible";
     let icon="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
     $("#icon").attr("src",icon);
   console.log(data);
 }
 request.send()
}