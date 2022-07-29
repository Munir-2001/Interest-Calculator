
function compute() {
	var principal = document.getElementById("principal").value;
	if(parseInt(principal) < 1 || principal=="") {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return;
	}
	var years = document.getElementById("years").value;
	var rate = document.getElementById("rate").value;
	var interest = years * rate * principal / 100;
    var t = new Date();
    var amount = interest;
	var yow = parseInt(t.getFullYear())+parseInt(years);
	document.getElementById("amountm").innerHTML = amount;
	document.getElementById("depositm").innerHTML = ""+principal;
	document.getElementById("yearm").innerHTML = ""+yow;
	document.getElementById("interestm").innerHTML = ""+rate;
	disp();
	return false;
};
        function updaterange() {
        var rate = document.getElementById("rate").value;
        document.getElementById("ratevalue").innerHTML = rate;
        }
function disp() {
	document.getElementById("result").style.display = "block";
};
