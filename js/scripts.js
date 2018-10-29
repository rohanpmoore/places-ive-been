// Back end logic goes here

function Place(name, date, landmarks, notes) {
  this.name = name;
  this.dateVisited = date;
  this.landmarks = landmarks;
  this.notes = notes;
}

Place.prototype.displayInfo = function(selector){
  selector.append('<li class="locationHeader" id=' + this.name + '>Destination: ' + this.name + '</li><span id=' + this.name + 'Details><li>Date Visited: ' + this.dateVisited + '</li><li>Landmarks: ' + this.landmarks[0] + '</li><li>Notes: ' + this.notes + '</li></span>');
  $("#" + this.name + "Details").hide();
}

function attachContactListeners() {
  $("ul#output").on("click", ".locationHeader", function() {
    var idVar = this.id + "Details";
    $("#" + idVar).toggle();
  });
}


var portland = new Place("Portland", "09-24-2006", ["The Columbia River Gorge", "The Bonneville Dam", "Portlandia"], "This is where we live.");
var richmond = new Place("Richmond", "08-12-2001", ["Virginia War Memorial", "St. John's Church", "Lewis Ginter Botanical Garden"], "Rohan used to live here!");
var ashland = new Place("Ashland", "06-12-1996", ["Oregon Shakespeare Festival", "Marijuana Tours"], "Rob is from here.");
var list = [portland, richmond, ashland]
// Front end logic

$(function() {
  var titleOutput = $("#output");
  list.forEach(function(each){
    each.displayInfo(titleOutput);
  });
  attachContactListeners();
});
