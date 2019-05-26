const ul = document.getElementById('bvn-submit');
var num = document.getElementById('bvnnum').value;

var bvndeets = {};

ul.addEventListener('click', async function() {
	num = document.getElementById('bvnnum').value;
 	console.log("Running bvn check on", num);
 	var url = 'https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/'+num+'?seckey=FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X';


  await fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    // Here you get the data to modify as you please
    console.log(data);
    console.table(data.data);
    bvndeets = data.data;
   })
  .catch(function(error) {
    // If there is any error you will catch them here
  });
for (datum in bvndeets) {
    	console.log("Pasting data: ", bvndeets[datum]);
    	let result = document.getElementById('results');
    	console.log(result);
    	var para = document.createElement("P");
  		para.innerHTML = datum + ": " + bvndeets[datum];
  		document.getElementById("results").appendChild(para);
    }
});