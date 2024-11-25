
$(document).ready(function () {

	//alert("dashboard");

	//clearFormBoxes();
	
	displayAllActivityRecords();

});

function displayAllActivityRecords() {

	console.debug(" -> :: dieeeesplayAllActivityRecords()");	


	$.ajax({

		type: "GET",
		
	//	url: "https://api.softwareshinobi.online/activity-manager/all-activities",

        url: "https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=f89da497df4f438d308b21aa620e7b9c&regions=us&markets=h2h,spreads&oddsFormat=american",

contentType : 'application/json',
dataType : 'json',
		
	crossDomain: true,				

		success: function (data, status, jqXHR) {

            console.log("everything went good.");
                        
			console.log("data");

            console.log(data);
            
     //       setResultsArea(data);
            
       //     showResultsArea();

		},

		error: function (jqXHR, status) {

			console.log("Something Went wrong");

			console.log("exception");
			
			console.log(jqXHR);

			console.log("status");
			
			console.log(status);

		}

	});

}


function setResultsArea(responseData) {
	
	console.log("responseData: ")
	
	console.log( responseData);

	console.log("|");

	var trHTML = '';

    for (var i = 0; i < responseData.length; i++) {
	
		trHTML += '<tr>';

		trHTML += '<td class="">' + responseData[i].date + '</td>';

		trHTML += '<td class="">' + new Intl.NumberFormat().format(responseData[i].amount) + '</td>';

if(responseData[i].type == "payment"){

	trHTML += '<td class="">'+'<div class="badge badge-inverse-success"> payment </div>'+ '</td>';

}else{

	trHTML += '<td class="">'+'<div class="badge badge-inverse-danger"> charge </div>'+ '</td>';

}		

//trHTML += '<td class="">' + responseData[i].type + '</td>';

		trHTML += '</tr>';
	   
	}
	    
	console.log("trHTML", trHTML);
			
	$('#rent-payment-table  > tbody').html(trHTML);
	
}

function clearFormBoxes(){

    setcategory("");

    setRemoteServerIP("");

    setRemoteServerPort(""); 

   // hideResultsArea();
    
}
