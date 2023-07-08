////////////////////////////// Declaration
const urlSW = (request) => 'https://swapi.dev/api/' + request;		// Stars Wars API

////////////////////////////// Logs
console.log(
	fetch(urlSW('films/1/'))
		.then((response) => {
			if (response.ok) {
				console.log("RAW DATA:\n", response);
				return response.json();	
			}
			else throw Error("Error in request:", response.status, response.statusText)
		})
		.then((data) => console.log("\n\nAS JSON OBJECT:\n", data))
		.catch(err => console.log(err))
);