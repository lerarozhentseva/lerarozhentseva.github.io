const getInfo = () => {
  let popup = document.getElementById("popup");
  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
}