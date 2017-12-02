$(document).ready(function () {
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = decodeURIComponent(window.location.search.substring(1)),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;
	
		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');
	
			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	};
	// var boxColors = ['yellow','black','red','white','blue','green','brown','orange','violet'];

	$('#marker').html(`
		<a-box position='-0.5 0.5 -0.5' width='0.25' height='0.25' depth='0.25' material='color: ${getUrlParameter('box1')||'yellow'};'></a-box>
            <a-box position='0 0.5 -0.5' width='0.25' height='0.25' depth='0.25' material='color: ${getUrlParameter('box2')||'black'};'></a-box>
            <a-box position='0.5 0.5 -0.5' width='0.25' height='0.25' depth='0.25' material='color: ${getUrlParameter('box3')||'red'};'></a-box>

            <a-box position='-0.5 0.5 0' width='0.25' height='0.25' depth='0.25' material='color: ${getUrlParameter('box4')||'white'};'></a-box>
            <a-box position='0 0.5 0' width='0.25' height='0.25' depth='0.25' material='color: ${getUrlParameter('box5')||'blue'};'></a-box>
            <a-box position='0.5 0.5 0' width='0.25' height='0.25' depth='0.25' material='color: ${getUrlParameter('box6')||'green'};'></a-box>

            
            <a-box position='-0.5 0.5 0.5' width='0.25' height='0.25' depth='0.25' material='color: ${getUrlParameter('box7')||'brown'};'></a-box>
            <a-box position='0 0.5 0.5' width='0.25' height='0.25' depth='0.25' material='color: ${getUrlParameter('box8')||'orange'};'></a-box>
            <a-box position='0.5 0.5 0.5' width='0.25' height='0.25' depth='0.25' material='color: ${getUrlParameter('box9')||'violet'};'></a-box>
	`)
});
