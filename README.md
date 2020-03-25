# Azure Function Timer Covid-19 News Sentiment

⏲ Fetch coronavirus news sentiment on a regular schedule via Azure Functions.

## Requirements

- [Microsoft Azure](https://portal.azure.com) Account
- [VS Code](https://code.visualstudio.com/) for Production Deployment
and Local Development
- [Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)
VS Code Extension for Local Development
- [Node.js LTS Version](https://nodejs.org/en/about/releases/)

## Installation

Create a `.env` file and include the following values:

```sh
AZURE_TENANT_ID=XXX
AZURE_CLIENT_ID=XXX
AZURE_CLIENT_SECRET=XXX
AZURE_STORAGE_CONTAINER=XXX
BLOB_SERVICE_ACCOUNT_NAME=XXX
INCREMENT=XX
JOB_DATA_FILENAME=XXX.json
THROTTLE_LIMIT=X
THROTTLE_INTERVAL=XXX
```

`INCREMENT` is the number added to the start of the messages to fetch.

`JOB_DATA_FILENAME` is the meta data file containing the first and last message
ID's from the last job.

`THROTTLE_LIMIT` is the number of concurrent requests processed when fetching
data and requesting data from Azure Cognitive Services.

`THROTTLE_INTERVAL` is the number of milliseconds between each batched request
for data.

Next, Create a `local.settings.json` file as well for running the Azure Function
locally in VS Code.

If you don't know where to obtain the other values in Azure,
look at the [AZURE.md](AZURE.md) document.

```js
{
  "IsEncrypted": false,
  "Values": {
		"AzureWebJobsStorage": "CREATED-BY-AZURE-FUNCTION-IN-VS-CODE"
		"FUNCTIONS_WORKER_RUNTIME": "node",
		"AZURE_TENANT_ID": "XXX",
		"AZURE_CLIENT_ID": "XXX",
		"AZURE_CLIENT_SECRET": "XXX",
		"AZURE_STORAGE_CONTAINER": "XXX"
		"BLOB_SERVICE_ACCOUNT_NAME": "XXX",
		"INCREMENT": "10",
		"JOB_DATA_FILENAME": "XXXX.json",
		"THROTTLE_LIMIT": X,
		"THROTTLE_INTERVAL": XXXX
  }
}
```

## Deployment

- In VS Code, [deploy this function](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)
from the root of this directory.
- Verify in the Portal


## Tests

```sh
npm i -D
npm test
```

## License

MIT
