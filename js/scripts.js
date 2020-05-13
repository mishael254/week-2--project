var akan=function(dob,gender) {
var akanFemaleNames=["Akosua","Adwoa","Abenua","Akua","Yao","Afua","ama"];
  var akanMaleNames=["Kwasi","Kwadwo","Kwabena","Kwahu","Yaw","kofi","Kwame"];
  var day=new Date(dob);
if(gender==="female") {
return day&&akanFemaleNames[day.getDay()]
}else {
return day&&akanMaleNames[day.getDay()];
}
}





$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var person1Input=$("input#person1").val();


        $(".person1").text(person1Input);


        $("#description").show();

        event.preventDefault();
        var gender = $("input:radio[name=flavor]:checked").val()
        var dob = $("#born").val();





        $("output").text(result);
      });
    });
