$(document).ready(function () {
	$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (results==null){
		   return null;
		}
		else{
		   return decodeURI(results[1]) || 0;
		}
	}
	// var boxColors = ['yellow','black','red','white','blue','green','brown','orange','violet'];
	console.log($.urlParam('box1'));

	$('#marker').html(`
		<a-box position='-0.5 0.5 -0.5' width='0.25' height='0.25' depth='0.25' material='color: ${'#'+$.urlParam('box1')||'yellow'};'></a-box>
            <a-box position='0 0.5 -0.5' width='0.25' height='0.25' depth='0.25' material='color: ${'#'+$.urlParam('box2')||'black'};'></a-box>
            <a-box position='0.5 0.5 -0.5' width='0.25' height='0.25' depth='0.25' material='color: ${'#'+$.urlParam('box3')||'red'};'></a-box>

            <a-box position='-0.5 0.5 0' width='0.25' height='0.25' depth='0.25' material='color: ${'#'+$.urlParam('box4')||'white'};'></a-box>
            <a-box position='0 0.5 0' width='0.25' height='0.25' depth='0.25' material='color: ${'#'+$.urlParam('box5')||'blue'};'></a-box>
            <a-box position='0.5 0.5 0' width='0.25' height='0.25' depth='0.25' material='color: ${'#'+$.urlParam('box6')||'green'};'></a-box>

            
            <a-box position='-0.5 0.5 0.5' width='0.25' height='0.25' depth='0.25' material='color: ${'#'+$.urlParam('box7')||'brown'};'></a-box>
            <a-box position='0 0.5 0.5' width='0.25' height='0.25' depth='0.25' material='color: ${'#'+$.urlParam('box8')||'orange'};'></a-box>
            <a-box position='0.5 0.5 0.5' width='0.25' height='0.25' depth='0.25' material='color: ${'#'+$.urlParam('box9')||'violet'};'></a-box>
	`)
});
