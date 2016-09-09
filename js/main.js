function pageInitializer(){
    
    let isReady = false; 
    document.addEventListener("DOMContentLoaded", init, false);
    console.log(isReady);
    
    function init(){

        isReady = true;  
        queryPage();
        
        return {
           isReady }
        
        /*load different UI features based on page*/
        function queryPage(){
            if(document.body.id == "homepage"){
                //call homepage functions
                registerButtons("submit");
                
            }else if(document.body.id == "contact-page"){
                //call contactpage functions
                registerButtons("submit");
            }
        
            function registerButtons(ID){
                let action = '';
                if (ID == "submit"){
                     action = processForm;
                }
                
                let button = document.getElementById(ID);
                button.addEventListener("click", action, false);
                return button;
             }
             
            function processForm(){
                
            }
            function sendEmail(){
                console.log("clicked");
                
                emailjs.send("gmail","template_bxGX1vPI",{name: "James", notes: "Check this out!"})
                .then(function(response) {
                    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                }, function(err) {
                console.log("FAILED. error=", err);
});
                
            }
            function scrollToContent(){
                console.log("clicked");
                let elem = document.getElementById("link-container");
                elem.scrollIntoView(false);
                return elem; }
            
            /*create a cover div, insert pretty stars at intervals on cover then remove after 5 seconds*/

        }
    }/*end function init*/    
} /* end function pageInitializer*/

var pageOps = pageInitializer();

