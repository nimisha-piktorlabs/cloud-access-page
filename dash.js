// pagination start
let table = document.getElementById("table");
let tbodyRowCount = table.tBodies[0].rows.length;
let tbodyRow = table.tBodies;
console.log("tby" + tbodyRow);
let totalRowCount = table.rows.length;
let ul = document.getElementById("tfooterul");
let nxt = document.getElementById("nxt");
let prev = document.getElementById("prev");
let tbody = document.getElementById("tbodyId");
let tbldata = [
  ['ABC Security GroupGroup2Group2','John Smith','08/03/2021'],
  ['Alexa Security GroupGroup2Group2','John Smith','08/03/2021'],
  ['Berglunds Security GroupGroup2Group2','John Smith','08/03/2021'],
  ['Alexa Security GroupGroup2Group2','John Smith','08/03/2021'],
  ['James Security GroupGroup2Group2','John Smith','08/03/2021'],
  ['ABC Security GroupGroup2Group2','John Smith','08/03/2021'],
  ['ABC Security GroupGroup2Group2','John Smith','08/03/2021'],
  ['ABC Security GroupGroup2Group2','John Smith','08/03/2021'],
  ['ABC Security GroupGroup2Group2','John Smith','08/03/2021'],
  ['ABC Security GroupGroup2Group2','John Smith','08/03/2021'],
  ['ABC Security GroupGroup2Group2','John Smith','08/03/2021'],
  ['ABC Security GroupGroup2Group2','John Smith','08/03/2021'],
  ['ABC Security GroupGroup2Group2','John Smith','08/03/2021'],
  
]
let arrlen =tbldata.length;
let per_page = 10;
let pages = Math.ceil(arrlen/per_page);
console.log(pages)
for(var i=1;i<=pages;i++){
  let li = document.createElement("li");
  li.innerHTML =  i;
  li.setAttribute("onClick","gotoPage(" + i +")")
  ul.appendChild(li);
}
let count=0;
count++;
loadDataSet(count);
prev.addEventListener("click", function(){
  if(count-1<= 0){
    alert("no more prev");
    return 0;
  }
  count--;
  loadDataSet(count);
 });

 nxt.addEventListener("click", function(){
  count++;
  loadDataSet(count);
 
 });

 function loadDataSet(count){
  let stop =count * per_page;
  let start = stop - per_page;
  if(start + 1 >= arrlen){
    alert("no more next");
    return 0;
  }
   tbody.innerHTML ="";
  
let ar_slice =tbldata.slice(start,stop)
   for(let i=0;i<ar_slice.length;i++){
    
    createtr(ar_slice[i]);
   }

}
function createtr(j){
  let tr = document.createElement("tr");
  let td0 = document.createElement("td");
  td0.setAttribute("class","inputcheckbox-td");
  td0.innerHTML = '<input type="checkbox" id="checkbox" class="checkbox" name="checkbox" />';

  let td1 = document.createElement("td");
  td1.innerHTML = '<img src="images/Group_icon.svg" alt="grp_icon"/><a href="#"  title="ABC Security GroupGroup2Group2"  >' + j[0] +'</a>' ;
  td1.setAttribute("class","table-groupname td-overflow-txt");
  let td2 = document.createElement("td");
  td2.setAttribute("class","d-none");
  td2.innerHTML = '<i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp; <u>'+ j[1] +'</u>';
  let td3 = document.createElement("td");
  td3.innerHTML = j[2];
  let td4 = document.createElement("td");
  td4.setAttribute("class","text-align-center");
  td4.innerHTML = ' <button>+ Join</button>';
  
  tr.appendChild(td0);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  
  tr.appendChild(td4);
  tbody.appendChild(tr);
}
function inputGotoPage() {
  let inputval = document.getElementById("inputNo");
  let inputNo = inputval.value;
  console.log(inputNo);
  gotoPage(inputNo);
}
function gotoPage(go){
  count = go;
  loadDataSet(count);
}
// paginatiion end 

// aside hide
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

//  table sort

function sortTable() {
  let table, rows, i, x, y,switching ,shouldSwitch,sortorder,count=0;
  table = document.getElementById("table");
  switching = true;
   //setting the sort order
   sortorder = "ascending";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      console.log("x is" + x.innerText);
      console.log("y is" + y.innerText);
      //check if the two rows should switch place:
      if(sortorder == "ascending"){
        if (x.innerText.toLowerCase() > y.innerText.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          
          break;
        }
      }
      else if(sortorder == "decending"){
        if (x.innerText.toLowerCase() < y.innerText.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
     
      }
    if (shouldSwitch) {
      
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      count++;
    }
    else if(sortorder == "ascending" && count== 0){
        sortorder = "decending";
        switching = true;
      
    }
    
    console.log("switch val" + switching);
   }
  
}


