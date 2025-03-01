const step1 = document.querySelector(".step"),
  step2 = document.querySelector(".step2"),
  step3 = document.querySelector(".step3");
  emailAddress=document.getElementById("emailAddress"),
  verifyEmail=document.getElementById("verifyEmail"),
  inputs = document.querySelectorAll(".otp-group input"),
  nextButton=document.querySelector(".nextButton"),
  verifyButton=document.querySelector(".verifyButton");

window.addEventListener("load",()=>{
    emailjs.init("RYIvWcj3x8dk7if6f");
    step2.style.display="none";
    step3.style.display="none";
    nextButton.classList.add("disable");
    verifyButton.classList.add("disable");
});

const validateEmail = (email)=>{
    let re=/\S+@\S+\.\S=/;
    if(re.test(email)){
        nextButton.classList.remove("disable");
    } else {
        nextButton.classList.add("disable");
    }
};


const serviceID = "service_uxmub12";
const templateID = "template_tf2nwxh";
nextButton.addEventListener("click",()=>{ 

    let templateParameter={
        from_name:"",
        OTP:"",
        message:"",
        reply_to: "emailAddress.value",
    };

    emailjs.send(serviceID, templateID, templateParameter),then((res) => {
        console.log(res);
    },
    (err) => {
        console.log(err);
    }
  );
});

    