let tempc;
var d=new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
var newD = new Date();
var n = newD.getDay()
let week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
document.getElementById("time").innerHTML =week[n]+" , "+d;
document.getElementById("city").onkeypress = function(event){
  if (event.keyCode == 13 || event.which == 13){
     process();
  }
};
function process()
{
      let selectedValue=document.getElementById("city").value;
      //console.log(selectedValue);
      if(selectedValue == "")
      {
       selectedValue=document.getElementById("state").textContent;
       //console.log(selectedValue);
      }
       var request = new XMLHttpRequest()
      // Open a new connection, using the GET request on the URL endpoint
       request.open('GET', 'http://api.openweathermap.org/data/2.5/find?q='+selectedValue+'&units=metric&appid=af8a888b5c0d1f1ce6a286db966af8ed', true)
       request.onload = function() {
        // Begin accessing JSON data here
       var data = JSON.parse(this.response)
       if(!(data.count==0))
        {
          console.log(data.count);
          // console.log(data.list[0].sys.country)
          document.getElementById("state").innerHTML=data.list[0].name;
        
          document.getElementById("Country").innerHTML=","+data.list[0].sys.country;
          //  Country
          document.getElementById("temp").innerHTML=data.list[0].main.temp;
          document.getElementById("condition").innerHTML=data.list[0].weather[0].description;
          document.getElementById("button1").style.color = "blue";
          document.getElementById("button2").style.color = "#666666";
          let icon="http://openweathermap.org/img/w/"+data.list[0].weather[0].icon+".png";
          $("#icon").attr("src",icon);
          document.getElementById("button1").style.visibility = "visible";
          document.getElementById("button2").style.visibility = "visible";
          document.getElementById("button2").disabled = false;
          }
          else
           {
             alert("Please Enter Valid City Name");
           }
          }
        request.send();

    }

 function findTemp()
 { 
   
  tempc=document.getElementById("temp").textContent;
  console.log(tempc);
  let NewData=Math.round((tempc*1.8)+32);
  document.getElementById("temp").innerHTML=NewData;
  document.getElementById("button1").style.color = "#666666";
  document.getElementById("button2").style.color = "blue";
  document.getElementById("button2").disabled = true;

}
class loadData{
   onloadData()
{
  alert("Allow Location?");
  getLocation();
}
 getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
    
  }
}
showPosition(position) {
  var request = new XMLHttpRequest()
  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&units=metric&appid=af8a888b5c0d1f1ce6a286db966af8ed', true)
     request.onload = function() {
    // Begin accessing JSON data here
     var data = JSON.parse(this.response);
      document.getElementById("state").innerHTML=data.name;
      document.getElementById("Country").innerHTML=","+data.sys.country;
      document.getElementById("temp").innerHTML=data.main.temp;
      document.getElementById("condition").innerHTML=data.weather[0].description;
     document.getElementById("button2").style.color = "#666666";
     document.getElementById("button1").style.color = "blue";
     document.getElementById("button1").style.visibility = "visible";
     document.getElementById("button2").style.visibility = "visible";
     let icon="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
     $("#icon").attr("src",icon);
   console.log(data);
   document.getElementById("button2").disabled = false;
 }
 request.send()
}
}