function pageInitializer(){
    
    let isReady = false; 
    window.addEventListener("load", init);
    console.log(isReady);
    
    function init(){

        isReady = true;  
        queryPage();   
        } //init
        
        /*load different UI features based on page*/
        function queryPage(){

            if(document.body.id == "homepage"){
                //call homepage functions

                let formContent = setUpForm();
                
            }else if(document.body.id == "contact-page"){
                //call contactpage functions
                registerButtons("submit");
            }
            
            function processForm(){
                let mailInputs = document.getElementsByClassName("form-control");
                return mailInputs;
            }//process form

            function sendEmail(data){
                 
                emailjs.send("gmail","template_bxGX1vPI",{first_name: data[0], last_name: data[1], email: data[2], phonenumber:data[3], address: data[4] })
                .then(function(response) {
                    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                }, function(err) {
                console.log("FAILED. error=", err);
                });
            }  //sendEmail
            
            function setUpForm(){
                let form = document.getElementById("email-form");
                form.addEventListener('submit', function (event){
                    event.preventDefault();
                    let data = processForm();
                    console.log(data);

                    });
                return form;
            }/*end function setUpForm */
        }/*queryPage*/
          
} /* end function pageInitializer*/

var pageOps = pageInitializer();