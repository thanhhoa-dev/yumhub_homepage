document.getElementsByClassName("gps_footer")[1].addEventListener("click", function() {
    var dropdownContent = document.getElementsByClassName("dropdown-content")[0];
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none"; // Ẩn dropdown content nếu đã hiển thị
    } else {
      dropdownContent.style.display = "block"; // Hiển thị dropdown content nếu chưa hiển thị
    }
  });
