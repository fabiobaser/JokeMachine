const fetch = require("node-fetch")

const unserRequest = fetch("http://api.icndb.com/jokes/random")

function printJSON(dasJson) {
  const witz = dasJson.value.joke

  console.log("Dein Witz des tages: ", witz)
}

function getResults(result) {
  result.json().then(printJSON)
}

unserRequest.then(getResults)
