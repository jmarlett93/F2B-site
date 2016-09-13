function pageInitializer(){
    'use strict';
    window.addEventListener("load", init);
    
    function init(){
        queryPage();   
        }
        
        function queryPage(){

            if(document.body.id == "homepage"){
                 setUpForm();
            }else if(document.body.id == "contact-page"){
                setUpForm();
            }
            
            function processForm(form){
                let inputs = form.querySelectorAll("input");
                let formData = [];
                for ( let i = 0; i < inputs.length; i++){
                    let input = inputs[i];
                    formData.push(input.value);
                }
                return formData;
            }
            
            function disableCompletedForm(form){
                form.reset();
                document.getElementById("submit").disabled = true;
                document.getElementById("submit").innerHTML = "Submitted";
                return form;
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
                    let emailData = processForm(formFB);
                    console.log(emailData);
                    disableCompletedForm(formFB);
                    sendEmail(emailData);
                    });
                
            }
        }         
}

let pageOps = pageInitializer();