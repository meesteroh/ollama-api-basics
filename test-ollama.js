// BIG IDEA:
// How does our code talk to another program (AI) using HTTP?


// Think of this entire file as:
// Your app → sends request → AI → sends response back


// Ollama must be installed and running. Running `ollama run llama3` in terminal will start it if needed.


// This line creates an http object to access the built-in http tools.
// require is a function that allows us to import modules in Node.js. We use it to import the built-in http module.
// It imports the http module. 
const http = require("http");


// This block of code prepares the data to be sent in the POST request. It creates a JSON string with the model, prompt, and stream parameters.
const data = JSON.stringify({
  model: "llama3",
  prompt: "Say hello in 5 words.",
  stream: false
});

// This block of code specifies how and where the HTTP request should be sent. 
const options = {
  hostname: "localhost",           //this machine
  port: 11434,                     //a numbered entry point telling us which program/service on my machine to receive the data.
  path: "/api/generate",           // this is the endpoint on the server i want to talk to. The action we want from the server.
                                   // combine those 3 to get http://localhost:11434/api/generate
  method: "POST",                  //here's my form, process it. posting up my request. not a 'get' request.
  headers: {                             //metadata about the http post request
    "Content-Type": "application/json",  //json format is being sent
    "Content-Length": data.length        //and here's the size
  }
};

// Arrow Function Syntax  (args) => {} 
// http.request(options, callbackFunction) means send a request, WAIT, response arrives,callback function runs. 
// res = response object from the server.

//This line sends the request and uses a calllback function to handle the response.
// When the server sends a response, this callback runs and the response is passed in as the res parameter.
const req = http.request(options, (res) => {
  let body = "";                //empty string to fill up with the response chunks as they come in
  
  //Listen for data event and append each chunk to body
  res.on("data", chunk => {
    body += chunk;
  });

  //Listen for end event, convert the json string to js object, and log the response
  res.on("end", () => {
    const result = JSON.parse(body);      
    console.log("AI:", result.response);
  });
});


//Listen for error event and log that error message to the console
req.on("error", (error) => {
  console.error(error);
});


//options: address on envelope
//headers: labels on the envelope
//write(data): the letter inside the envelope
req.write(data);

//Done sending data, now send the request.This actually sends the request.
req.end();

/*
1. Create request (http.request)
2. Attach data to the request body (req.write)
3. Send request (req.end)
4. Server responds
5. res.on("data") → collect chunks
6. res.on("end") → process full response

*/