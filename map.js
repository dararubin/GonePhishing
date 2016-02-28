function addFilter(st) {
	console.log(st);
	if ($('button:contains("'+st+'")').length==0) {
      var button='<button class="btn btn-primary" onclick="removeFilter(this)">'+st+' <span class="glyphicon glyphicon-remove"></span></button>&nbsp;';
      $("#filters").append(button);
      replaceMap("images/MAP.2.jpg");
    }
}

function removeFilter(button) {
	var parent = document.getElementById("filters");
	parent.removeChild(button);
	console.log(parent.children);
	if (parent.children.length == 0) {
		replaceMap("images/MAP.1.jpg");
	}
}

function replaceMap(path) {
	var map = document.getElementById("map");
	map.src = path;
}