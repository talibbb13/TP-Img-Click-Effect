    var heading = document.getElementById("heading");
    var para = document.getElementById("para");
    var content = document.getElementById("content");
    var flag = true;

    content.addEventListener('click', function() {
      if (flag == true) {
        heading.style.display = "block";
        para.style.display = "block";
        content.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
        flag = false;
      }
      else {
        heading.style.display = "none";
        para.style.display = "none";
        content.style.backgroundColor = "rgba(255, 0, 0, 0)";
        flag = true;
      }

    })