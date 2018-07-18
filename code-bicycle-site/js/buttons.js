function buttonHome(){
    document.write("Please, leave your contact info on the 'Contact Page'. Thank you!");
};


var salesButton = document.getElementsByClassName("accordion");

var i;

for (i=0; i<salesButton.length; i++) {
    salesButton[i].addEventListener("click", function() {
        //adding - removing "active" class
        this.classList.toggle("active");
        
        //hiding - showing panel
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}