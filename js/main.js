function toggleRotate(){
    var toggle = document.getElementById("toggleIcon")

    if (toggle.classList) { 
        toggle.classList.toggle("toggleRotate");
    } else {
      var classes = toggle.className.split(" ");
      var i = classes.indexOf("toggleRotate");
  
      if (i >= 0) 
        classes.splice(i, 1);
      else 
        classes.push("toggleRotate");
        toggle.className = classes.join(" "); 
    }
}


function openSearch(){
  var element = document.getElementById("searchDiv");

  if (element.classList) {
    element.classList.toggle("searchVisible");
  } else {
    // For IE9
    var classes = element.className.split(" ");
    var i = classes.indexOf("searchVisible");
  
    if (i >= 0)
      classes.splice(i, 1);
    else
      classes.push("searchVisible");
      element.className = classes.join(" ");
  }
}


function closeSearch(){
  var element = document.getElementById("searchDiv");
  element.classList.remove("searchVisible")
}