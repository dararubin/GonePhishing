

	// document.getElementById("result").innerHTML = localStorage.getItem("lastname");
	function edit() {
		edits=document.getElementsByClassName("editable");
		var arrayLength = edits.length;
		for (var i = 0; i < arrayLength; i++) {
			edits[i].setAttribute("contenteditable", "true"); 
		}
		document.getElementById("edit-button").setAttribute("value", "Save")
		document.getElementById("edit-button").setAttribute("onclick", "save()")

		console.log("edit")
	}
	function save() {
		edits=document.getElementsByClassName("editable");
		var arrayLength = edits.length;
		for (var i = 0; i < arrayLength; i++) {
			edits[i].setAttribute("contenteditable", "false"); 
		}
		document.getElementById("edit-button").setAttribute("value", "Edit")
		document.getElementById("edit-button").setAttribute("onclick", "edit()")

		console.log("save")
	}
