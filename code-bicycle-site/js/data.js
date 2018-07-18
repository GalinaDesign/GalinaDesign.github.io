var priceObject = datatable;

//console.log(priceObject);
    
    
document.getElementById("row1").innerHTML = priceObject.service[0].name[0];
    
document.getElementById("row2").innerHTML = priceObject.service[0].name[1];
    
document.getElementById("row3").innerHTML = priceObject.service[0].name[2];
    
    
document.getElementById("row4").innerHTML = priceObject.service[1].name[0];
    
document.getElementById("row5").innerHTML = priceObject.service[1].name[1];
    
document.getElementById("row6").innerHTML = priceObject.service[1].name[2];
    
    
document.getElementById("row7").innerHTML = priceObject.service[2].name[0];
    
document.getElementById("row8").innerHTML = priceObject.service[2].name[1];
    
document.getElementById("row9").innerHTML = priceObject.service[2].name[2];
    
    
document.getElementById("price50").innerHTML = priceObject.service[0].price;
     
document.getElementById("price80").innerHTML = priceObject.service[1].price;
    
    
document.getElementById("price200").innerHTML = priceObject.service[2].price;

