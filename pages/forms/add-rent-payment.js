
$(document).ready(function () {

	//alert("aaa");

	resetForm();

});

function resetForm(){

	$("#isPayment").prop("checked", true);

	$("#isCharge").prop("checked", false);

	$("#paymentDate").val(new Date().toLocaleDateString('en-CA'));

	$("#paymentAmount").val("");

}

function processForm() {

	//paymentType=$("#paymentType").groupVal();
	
//paymentType=$("input[name='paymentType']").groupVal();
paymentType = $("input[name='paymentType']:checked").val();

	console.debug("paymentTysspe: " + paymentType);

	//
	
    paymentDate=$("#paymentDate").val();

	console.debug("paymentDate: " + paymentDate);

	//
	
    paymentAmount=$("#paymentAmount").val();

	console.debug("paymentAmount: " + paymentAmount);

	//
	
	$.ajax({

		type: "POST",
		
		 url: "http://desktop.mateomontenegro.online:8080/rent-payment/add-rent-payment",

		//url: "https://api.softwareshinobi.online/activity-manager/all-activities",

        data: JSON.stringify({
        
            paymentType: paymentType,

            paymentDate: paymentDate,

            paymentAmount: paymentAmount     
              
        }),

		contentType: "text/plain",
		
		crossDomain: true,
		
		dataType: "text",		

		success: function (data, status, jqXHR) {
			console.log("all good");
		},

		error: function (jqXHR, status) {

			console.log("Something Went wrong");

			console.log("exception: ");
console.log( jqXHR);

			console.log("status");
console.log( status);

		}

	});

}
