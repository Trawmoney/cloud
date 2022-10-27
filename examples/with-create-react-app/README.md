# Create React App example

This example uses [Create React App](https://create-react-app.dev/)

## Starting dev mode

Start the CRA dev server using:

`cloud dev`

To use port 3002 for the CRA dev server:

`PORT=3002 cloud dev`

## Deploying

Deploy to a stage named "prod" using:

`cloud deploy prod`

## Loading params into environment variables

The example includes a shim "loadenv.mjs" that lets you load Serverless Cloud params into env vars.
