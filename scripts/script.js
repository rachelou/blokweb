document.querySelector(".container").addEventListener("click", myFunction);

function myFunction() {
  var element = document.querySelector(".nav-items");
  var products = document.querySelector (".products");
  var hero = document.querySelector (".hero");
  var second = document.querySelector (".second");
  var article = document.querySelector ("article")

  document.body.classList.toggle('change');
  if(element.style.display === "block"){
          element.style.display = "none";
          document.body.style.overflow = 'auto';

      }else{
          element.style.display = "block";
            document.body.style.overflow = 'hidden';
      }


}
