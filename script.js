//your JS code here. If required.
function removeColor() {
	const btn = document.querySelector('input[type="button"]');
	btn.addEventListener("click", () => {
	  const select = document.getElementById("colorSelect");
	  if (select.selectedIndex !== -1) {
	    select.remove(select.selectedIndex);
	  }
});
}

document.querySelector('input[type="button"]').addEventListener("click", removeColor);