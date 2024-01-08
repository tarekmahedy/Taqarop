function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}




  function loadShops(data) {
  
   console.log(data);
  //alert(data.result.shops[0].title);
  var shops=data.result.shops;
  var a=0;
var rows="";
template="";
   var template="<div class='item' ><div class='row'>";
   var newrow=0;
  while(shops.length>a){
   newrow++;
  
  var shop=shops[a];
  rows="<div class='col-lg-12'><div class='listing-item'> <div class='left-image'> <a href='#'><img src='https://tarekmahedy.github.io/Taqarop/imgs/logo/"+shop.icon_url+"' alt='' width='500px' height='370px'></a></div> <div class='right-content align-self-center'>  <a href='#'><h4>"+shop.title+"</h4></a> <h6>by: Sale Agent</h6><ul class='rate'> <li><i class='fa fa-star-o'></i></li> <li><i class='fa fa-star-o'></i></li> <li><i class='fa fa-star-o'></i></li> <li><i class='fa fa-star-o'></i></li> <li><i class='fa fa-star-o'></i></li> <li>(24) التقيمات</li></ul><span class='price'><div class='icon'><img src='assets/images/listing-icon-01.png' alt=''></div> $3,600 / month with taxes</span> <span class='details'>التفاصيل: <em>3660 sq ft</em></span> <ul class='info'> <li><img src='assets/images/listing-icon-02.png' alt=''> 5 Bedrooms</li><li><img src='assets/images/listing-icon-03.png' alt=''> 3 Bathrooms</li></ul> <div class='main-white-button'> <a href='contact.html'><i class='fa fa-eye'></i> اتصل الان</a> </div> </div> </div> </div>";
template=template+rows;

   a++;
    }
  
  document.getElementById("containershops").innerHTML = template+"</div> </div>";
    
  
}



fetchJSONFile('api/block0.json',loadShops);

