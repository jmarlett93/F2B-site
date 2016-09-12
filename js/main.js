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
            
            function processForm(form){
                let inputs = form.querySelectorAll("input");
                let arr = [];
                console.log(inputs);
                for ( let i = 0; i < inputs.length; i++){
                    let input = inputs[i];
                    arr.push(input.value);
                }
                let formData = JSON.stringify(arr);
                return formData;
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
                let formFB = document.getElementById("email-form");
                formFB.addEventListener('submit', function (event){
                    event.preventDefault();
                    let data = processForm(formFB);
                    console.log(data);
                    });
                return formFB;
            }/*end function setUpForm */
        }/*queryPage*/
          
} /* end function pageInitializer*/

var pageOps = pageInitializer();