# Ollama API Basics

This project demonstrates how a Node.js application sends an HTTP request to a local AI model using Ollama.

The goal is to help students understand:
- HTTP requests and responses
- APIs
- JSON data
- Asynchronous programming in Node.js

--------------------------------------------------

REQUIREMENTS

Before running this project, you MUST install:

1. Node.js  
   Download from: https://nodejs.org  
   (Install the LTS version)

2. Ollama  
   Download from: https://ollama.com

--------------------------------------------------

STEP-BY-STEP SETUP

1. Install Node.js

After installing, verify it works by running:

node -v

You should see a version number like:
v20.x.x

--------------------------------------------------

2. Install Ollama

After installing, verify it works by running:

ollama --version

--------------------------------------------------

3. Download and run a model

Run this command:

ollama run llama3

What happens:
- The model will download (this may take a few minutes)
- You will see a prompt like:

>>>

Type something (for example: hello) to confirm it works.

--------------------------------------------------

4. Exit Ollama

Press Ctrl + C

Note: Ollama will continue running in the background.

--------------------------------------------------

RUNNING THE DEMO

In this project folder, run:

node test-ollama.js

--------------------------------------------------

EXPECTED OUTPUT

You should see something like:

AI: Hello, how can I help you today?

--------------------------------------------------

WHAT THIS CODE DOES

This script:
1. Creates an HTTP request
2. Sends a JSON payload to Ollama
3. Receives the response in chunks
4. Reconstructs the full response
5. Prints the AI output

--------------------------------------------------

IMPORTANT NOTES

- Ollama MUST be running for this to work
- The model must be downloaded first using:
  ollama run llama3
- This project will NOT run directly on GitHub
- It must be run on your local machine

--------------------------------------------------

TEACHING NOTES

This project is intended as a learning demo.

Focus on:
- How the HTTP request is constructed
- How JSON is used to send data
- How asynchronous callbacks handle responses
