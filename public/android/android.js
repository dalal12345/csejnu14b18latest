const studentSection = document.getElementById('studentSection');
const loaderSection = document.getElementById("loaderSection");
const loader = document.getElementById("loader");

let loadAngle = 30;
let loadBarLoad = setInterval(()=>{
  loader.style.transform=`rotate(${loadAngle}deg)`;
  loadAngle += 20;
},200);



window.onload = ()=>{
  
  
  setTimeout(()=>{
    loaderSection.style.display="none";
    //studentSection.style.display="grid";
    clearInterval(loadBarLoad);
  },2000);
}

const students = async ()=>{
  try{
 const response = await fetch("https://csejnu14b18th.vercel.app/api");
 
 const data = await response.json();
 data.map((e)=>{
   console.log(e.studentPhoto);
   const studentBoxDiv = document.createElement("div");
   studentBoxDiv.classList.add("studentBox");
   studentBoxDiv.innerHTML=`
   
  <img src="${e.studentPhoto?"https://csejnu14b18th.vercel.app/uploads/"+e.studentPhoto:"https://csejnu14b18th.vercel.app/users/default.png"}" class="profilePhoto">
  

   
        ${e.studentName ? `<h1 class="student-info">${e.studentName.toUpperCase()}</h1>` : ""}
     


     ${e.studentCollegeName ? `<p class="student-info">${e.studentCollegeName.toUpperCase()}</p>` : ""}
     
     ${e.studentSchoolName ? `<p class="student-info">${e.studentSchoolName.toUpperCase()}</p>` : ""}
     

     
     ${e.favouriteQuote.length>0 ? `<p class="student-info">${e.favouriteQuote.toUpperCase()}</p>` : ""}
       
                 ${e.studentHomeTown ? `<p class="student-info studentHomeTown">${e.studentHomeTown.toUpperCase()}</p>` : ""}
       
       
      ${e.fbId ?`<a href="${e.fbId} target="_blank"><img class="fbLink" src="https://csejnu14b18th.vercel.app/android/facebook_android.png"></a>` : ""}
      


   `;
   studentSection.appendChild(studentBoxDiv);
   

   
   




   
 })
 
 
 
  } catch(err){
    console.log(err)
  }
}

students();
students();

