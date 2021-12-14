<h1 align="center">My Home</h1>

<p align="center">
<a href="https://travis-ci.org/Alamofire/varandrew/Petrichor-Music"><img src="https://travis-ci.org/varandrew/Petrichor-Music.svg?branch=master" alt="Build Status"></a>
<a href="https://github.com/varandrew/my-home"><img src="https://img.shields.io/npm/v/npm.svg" alt="Version"></a>
<a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/framework-ReactNative-orange.svg" alt="Framework"></a>
</p>

> A React Native app about room air quality.

## Screenshot

### List

<img src="https://github.com/varandrew/my-home/blob/main/screenshots/screenshot-1.png" width="647.5" height="1295"/>

### Chart

<img src="https://github.com/varandrew/my-home/blob/main/screenshots/screenshot-2.png" width="647.5" height="1295"/>

## Project Layout

```bash
.
├── __tests__
│   └── App-test.tsx
├── screenshots
│   ├── screenshot-1.png
│   └── screenshot-2.png
├── scripts
│   └── stfu.js
├── src
│   ├── assets
│   │   ├── cloudy.jpeg
│   │   ├── cloudy.svg
│   │   ├── menu.svg
│   │   ├── moon.svg
│   │   ├── night2.jpg
│   │   ├── rain.svg
│   │   ├── rainy.jpg
│   │   ├── search.svg
│   │   ├── sun.svg
│   │   ├── sunny.jpg
│   │   └── weather.png
│   ├── components
│   ├── models
│   │   └── locations.ts
│   ├── pages
│   │   ├── Chart.tsx
│   │   └── List.tsx
│   ├── routes
│   │   ├── Router.tsx
│   │   └── routes.ts
│   ├── types
│   │   └── index.ts
│   ├── typings
│   │   └── file.d.ts
│   ├── utils
│   │   ├── config.ts
│   │   └── request.ts
│   └── App.tsx
├── LICENSE
├── README.md
├── app.json
├── babel.config.js
├── index.js
├── metro.config.js
├── package.json
├── tsconfig.json
└── yarn.lock

12 directories, 34 files
```

## Running the app

```bash
# git clone
git clone https://github.com/varandrew/my-home.git

# change dir
cd my-home

# install dependencies
yarn

# postinstall
yarn postinstall

# link
yarn link

# serve with hot reload at ios
yarn ios

```

For detailed explanation on how things work, checkout the [guide](https://reactnative.dev/) and [docs for react](https://reactjs.org/).
