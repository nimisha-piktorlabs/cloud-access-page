
function showAside() {

    var element = document.getElementById("aside");
    // alert(element);
    // console.log(element);
    element.classList.toggle("asideshow");

    var element1 = document.getElementById("close");
    element1.classList.toggle("fa-times");
    console.log(element1);
    var element2 = document.getElementById("close");
    element2.classList.toggle("fa-bars");
 };

 function scrollleft() {
    var elmnt = document.getElementById("card");
     elmnt.scrollLeft =250;
   
    
  };

  function scrollright() {
    var elmnt2 = document.getElementById("card");
    
     elmnt2.scrollLeft= -350;
    
  };
  function toggle(source) {
    console.log(source);
   var checkboxes = document.getElementsByName("checkbox");
   console.log(checkboxes);
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
//     for(var checkbox in checkboxes){
//     checkbox.checked = source.checked;
// }
  };

  function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("find-group");
    filter = input.value.toUpperCase();
    
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      console.log(td);
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  // aisde bottom active 
 
// var btns = document.querySelector(".aside-bottom-menu");
// console.log(btns);
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     alert("hhii");
//   // var current = document.getElementsByClassName("active");
  
//   // current[0].classList.remove("active"); 
//   // this.classList.add("active");
//   });
  
// }


