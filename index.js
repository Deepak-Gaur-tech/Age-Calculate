let input=document.querySelector("input");
let btn=document.querySelector("button");
let h4=document.querySelector("h4");

btn.addEventListener("click",()=>{
    if(input.value===""){
        alert("write your age");
    }else{
        console.log("input",input.value);
        
        const dob=new Date (input.value);
        console.log("dob",dob);

        const dobyear=dob.getFullYear();
        console.log("dobyear",dobyear);

        // current

        const now=new Date();
        console.log("now",now);

        const nowyear=now.getFullYear();
        console.log("nowyear",nowyear);

        const age=nowyear-dobyear;
        console.log(age);

        h4.innerHTML=`Your age is:${age}`
        
        
        
        
    }

    
})

