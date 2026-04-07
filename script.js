//your JS code here. If required.
function removeColor() {
	  const select = document.getElementById("colorSelect");
	  if (select.options.length > 0) {
	    select.remove(select.selectedIndex);
	  }
}

document.querySelector('input[type="button"]').addEventListener("click", removeColor);