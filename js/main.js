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
                registerButtons("down");
                registerButtons("sparkle");
                
            }else if(document.body.id == "contactpage"){
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
            function animateStars(){
                var elem = document.getElementById("star-pic");
                var dimensions = [elem.offsetWidth, elem.offsetHeight];
                var animateOverlay = document.
                elem.insertBefore
                                
            }
            function star(){}
    }
    }/*end function init*/    
} /* end function pageInitializer*/


var pageOps = pageInitializer();

