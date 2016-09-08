function pageInitializer(){
    
    var isReady = false; 
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
                registerButtons("down");
                registerButtons("sparkle");
                
            }else if(document.body.id == "contactpage"){
                //call contactpage functions
                registerButtons("sparkle");
            }
        
            function registerButtons(ID){
                var action = '';
                if (ID == "down"){
                    action = scrollToContent;
                }else if (ID == "sparkle"){
                    action = animateStars; 
                }
                
                var button = document.getElementById(ID);
                button.addEventListener("click", action, false);
                return button; 
             }
    
            function scrollToContent(){
                console.log("clicked");
                var elem = document.getElementById("link-container");
                elem.scrollIntoView(false);
                return elem; }
            
            /*create a cover div, insert pretty stars at intervals on cover then remove after 5 seconds*/

        }
    }/*end function init*/    
} /* end function pageInitializer*/


var pageOps = pageInitializer();

