# image-uploader

Monorepo containing a React.js client and an Express.js GraphQL backend

## Getting Started

After cloning down the repo, you'll notice both client and server folders. We will start with setting up the client. You will need to have Node.js installed (v14+ recommended). This repo is also using postgres as a datastore, so you'll need to make sure you've got pg installed and have access to it's helper functions via a CLI. To create your database table run the following.

```
createdb image-uploader
# if you need to nuke the db run: dropdb image-uploader
```

## Client

The client is using Create React App for simple setup. If you are familiar with react-scripts then this will be very straightforward.

```
cd client
npm i
npm run start
```

This will start your development server on localhost:3000 by default. You should be able to see you application live in a web browser window.

## Server

The express server by default is set to run on localhost:3300. Accessing that url via a browser should redirect you to localhost:3300/graphql, where you will see the interactive graphql playground. Here you can explore the schema, and available queries and mutations. 

To start the server run the following from the command line.

```
cd server
npm i
npm run dev
```

### Note on Images 

Images are being stored in the db as an encoded base64 string. This is a space overhead of approx 1/3 larger than a comparative BLOB. Due to the limited number of items used for this demo, the tradeoff for simplicity won over the need for space optimization. In production systems with millions of photos should investigate saving images as a BLOB or similar data format to reduce image size if needed. 

### Technologies

React
Express
GraphQL
PostgresQL
