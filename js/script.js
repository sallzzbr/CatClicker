var cats = [
	{
		"name": "Javier",
		"pic": "imgs/Javier.jpg",
		"clicks": 0
	},
	{
		"name": "Jayme",
		"pic": "imgs/Jayme.jpg",
		"clicks": 0
	},
	{
		"name": "Jorge",
		"pic": "imgs/Jorge.jpg",
		"clicks": 0
	},
	{
		"name": "Juan",
		"pic": "imgs/Juan.jpg",
		"clicks": 0
	},
	{
		"name": "Juarez",
		"pic": "imgs/Juarez.jpg",
		"clicks": 0
	}
];

function makeCatRows() {
	var toAdd = "";
	$.each(cats, function(catIndex, cat) {
		toAdd += "<div class='cat col-xs-6'><div class='container'><div class='name'>" + cat.name + "</div><img src='" + cat.pic + "' class='clickable'/><div id='" + catIndex.toString() + "' class='count'>" + cat.clicks.toString() + "</div></div></div>";
    console.log(this, cat, catIndex);
	});
	$("#main").append("<div class='row'><div class='container'>" + toAdd + "</div></div>");
}

$(document).ready(function() {
	makeCatRows();
	$(".clickable").click(function(obj) {
		var elem = obj.target.parentElement.childNodes[2];
		cats[elem.id].clicks += 1;
		$("#" + elem.id).text(cats[elem.id].clicks);
	});
});
