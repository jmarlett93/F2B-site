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

                let formContent = setUpForm();
                
            }else if(document.body.id == "contact-page"){

                let formContent = setUpForm();
   
            }
            
            function processForm(){
                let htmlInputs = document.getElementsByClassName("form-control");
                let mailInputs = [].forEach.call(htmlInputs, function(v,i,a){
                    return htmlInputs[i];
                })
                console.log(mailInputs);             
                return mailInputs;
            }

            function sendEmail(data){
                
                emailjs.send("gmail","template_bxGX1vPI",{first_name: data[0], last_name: data[1], email: data[2], phonenumber:data[3], address: data[4] })
                .then(function(response) {
                    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                }, function(err) {
                console.log("FAILED. error=", err);
                });
            }
            
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