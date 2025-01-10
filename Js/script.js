function sendemail(event){

  const username= document.getElementById("name").value
  const email= document.getElementById("email").value
  const subject= document.getElementById("subject").value
  const message= document.getElementById("message").value
  const link =document.createElement('a')
  link.href= "mailto:israelbekeletulu@gmail.com?subject="+subject+"&body="+encodeURIComponent(message +"\n\n"+email)
  link.target = "_blank"
  link.click()
}
document.getElementById('submit').addEventListener('click', sendemail)


const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});