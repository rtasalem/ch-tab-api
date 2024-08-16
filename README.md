# ch-tab-api
GraphQL API for querying and mutating data stored in Azure Cosmos DB for the Take A Bao website.
## Prerequisites
- Docker
- Docker Compose
## Environment Variables
The following table lists all environment variables that need to be listed in the `.env`.
| Variable | Value | Description |
| -------- | ----- | ----------- |
| `COSMOS_ENDPOINT` | `https://ch-tab-api-cosmos-db:8081` | Endpoint of the Cosmos emulator. This value is universal and provided in the [Microsoft documentation](https://learn.microsoft.com/en-us/azure/cosmos-db/emulator#authentication). | 
| `COSMOS_KEY` | `C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==` | Key used by the Cosmos emulator. This value is universal and provided in the [Microsoft documentation](https://learn.microsoft.com/en-us/azure/cosmos-db/emulator#authentication). | 
