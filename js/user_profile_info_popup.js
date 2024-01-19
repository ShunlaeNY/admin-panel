const profile = document.querySelector(".user_profile");
const profileInfo = document.querySelector(".user_profile_info");
const other = document.querySelector(".main");

profile.addEventListener("click",()=>{
    profileInfo.style.display="inline-block";
});
other.addEventListener("click",()=>{
    profileInfo.style.display="none";
});