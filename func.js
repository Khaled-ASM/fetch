const fdk=require('@fnproject/fdk');

fdk.handle(function(input, ctx){
	async function fetchData() {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
			if (!response.ok) {
			  throw new Error(`HTTP error! status: ${response.status}`);
			}
			console.log(response);
			const data = await response.json();
			console.log(data);
			return data;
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}
  return {"response": fetchData()}
})