var $tbody = document.querySelector('tbody');

var $dateInput = document.querySelector('#date');
var $cityInput = document.querySelector('#city');
var $stateInput = document.querySelector('#state');
var $countryInput = document.querySelector('#country');
var $shapeInput = document.querySelector('#shape');

var $searchBtn = document.querySelector('#search');
var $resetBtn = document.querySelector('#reset');

$searchBtn.addEventListener('click', handleSearchButtonClick);


var filtered_Data = dataSet;


function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filtered_Data.length; i++) {

        var element = filtered_Data[i];
        var fields = Object.keys(element);
        var $row = $tbody.insertRow(i);

    for (var j = 0; j < fields.length; j++) {

        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = element[field];
    }
  }
}

function handleSearchButtonClick(){
    var filteredtime = $dateInput.value.trim();
    if (filteredtime != ""){
        filtered_Data = dataSet.filter(function(date_seen) {
            var time_ = date_seen.datetime;
            return time_ === filteredtime;
        });
    };
    var filteredcity = $cityInput.value.trim().toLowerCase();
    if (filteredcity != ""){
        filtered_Data = dataSet.filter(function(city_seen){
            var city_ = city_seen.city.toLowerCase();
            return city_ === filteredcity;
        });
    };
    var filteredstate = $stateInput.value.trim().toLowerCase();
    if (filteredstate != ""){
        filtered_Data = dataSet.filter(function(state_seen){
            var state_ = state_seen.state.toLowerCase();
            return state_ === filteredstate;
        });
    };
    var filteredcountry = $countryInput.value.trim().toLowerCase();
    if (filteredcountry != ""){
        filtered_Data = dataSet.filter(function(country_seen){
            var country_ = country_seen.country.toLowerCase();
            return country_ === filteredcountry;
        });
    };
    var filteredshape = $shapeInput.value.trim().toLowerCase();
    if (filteredshape != ""){
        filtered_Data = dataSet.filter(function(shape_seen){
            var shape_ = shape_seen.shape.toLowerCase();
            return shape_ === filteredshape;
        });
    };
  renderTable();
};



renderTable();
