# weather-app

## Description

A simple web application with a home page. This page has a current weather section, with the location respecting the timezone and a brief description of the current weather, it has some measurements like pressure, wind speed, UV index, humidity and others.

The next section is the hourly weather, it has the temperature in the next few hours with their respective hours. And finally the daily weather section, with the maximum and minimum temperature, and humidity. In both measures, the tracking is in the next five days and from the next day. The same for the hourly weather section.

## Resources


The resources on the page are consumed with an API called [Open Weather Map](https://openweathermap.org/) and here are other libraries and resources:

* [husky](https://www.npmjs.com/package/husky)
* [eslint](https://www.npmjs.com/package/eslint)
* [prettier](https://www.npmjs.com/package/prettier)
* [commitlint](https://www.npmjs.com/package/@commitlint/cli)
* [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton)

## Configuration instructions

This app has been developed with [create-react-app](https://github.com/facebook/create-react-app)

### Build production
```shell
git clone https://github.com/agustinbarbalase/weather-app.git
npm install
npm build
```

### Dev
```shell
git clone https://github.com/agustinbarbalase/weather-app.git
npm install
npm start
```

## Deploy on Vercel

This application was deployed in Vercel with Github actions. Here is the action and [here](https://weather-app-drab-six.vercel.app/) is the deployment page

```yml
name: deploy website on vercel

on: 
  push:
    branches:
    - main

jobs:
  
  test: 
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [14.x]

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm install
      - run: npm test -- --watchAll=false 

  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
        env:
          REACT_APP_API_KEY: ${{ secrets.REACT_APP_API_KEY }}
```

## License

This app has an [MIT License](https://opensource.org/licenses/MIT)