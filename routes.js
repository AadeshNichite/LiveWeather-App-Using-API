const city = [
  {  name: "Maharashtra", city: "Pune"},
  {  name: "Maharashtra", city: "Mumbai"},
  {  name: "Karnataka", city: "Benguluru"},
  {  name: "Maharashtra", city: "Kolhapur"},
  {  name: "Maharashtra", city: "Satara"},
  {  name: "Maharashtra", city: "Karad"},
  {  name: "Maharashtra", city: "Sangali"},
  {  name: "Tamilnadu", city: "Chennai"},
  {  name: "Goa", city: "Panaji"}

];
let tempc;
var d=new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
var newD = new Date();
var n = newD.getDay()
let week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
document.getElementById("time").innerHTML =week[n]+" , "+d;

function process()
{
      var selectedValue=document.getElementById("city").value;
      console.log(selectedValue);
      var request = new XMLHttpRequest()
      // Open a new connection, using the GET request on the URL endpoint
      request.open('GET', 'https://api.openweathermap.org/data/2.5/find?q='+selectedValue+'&units=metric&appid=af8a888b5c0d1f1ce6a286db966af8ed', true)
      request.onload = function() {
        // Begin accessing JSON data here
      var data = JSON.parse(this.response);
      console.log(data);
      console.log(data.list[0].main.temp);
      tempc=data.list[0].main.temp;
      console.log(data.list[0].weather[0].description);
      var temp=city.filter((v)=> v.city===selectedValue);
      document.getElementById("state").innerHTML=temp[0].city+" , "+temp[0].name;
      document.getElementById("temp").innerHTML=data.list[0].main.temp+""+"&#8451;";
      document.getElementById("condition").innerHTML=data.list[0].weather[0].description;
      }
     request.send();
}
function findTemp()
{
  var selectedValue=document.getElementById("city").value;
  var request = new XMLHttpRequest()
  // Open a new connection, using the GET request on the URL endpoint
     request.open('GET', 'https://api.openweathermap.org/data/2.5/find?q='+selectedValue+'& units=imperial&appid=af8a888b5c0d1f1ce6a286db966af8ed', true)
      request.onload = function() {
    // Begin accessing JSON data here
       var data = JSON.parse(this.response);
       var temp=city.filter((v)=> v.city===selectedValue);
      document.getElementById("state").innerHTML=temp[0].city+" , "+temp[0].name;
      document.getElementById("temp").innerHTML=data.list[0].main.temp+""+"&#8457;";
      document.getElementById("condition").innerHTML=data.list[0].weather[0].description;
  }
  request.send()
}


