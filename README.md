<h4 align="right"><strong>English</strong> | <a href="https://github.com/xiaole3349/backup/blob/master/README_CN.md">简体中文</a></h4>

<div align="center">
 <img  src="./src/images/logo.png" height="20%" width="20%" />
 <h1>Official site for beatosion.com</h1>
 <img src="https://img.shields.io/badge/version-0.0.4-%238C78B4" />
 <img src="https://img.shields.io/badge/typescript-v4.4.3-%2300FFFF" />
 <img src="https://img.shields.io/badge/gatsby-v3.10.2-%238A2BE2" />
 <img src="https://img.shields.io/badge/node-16.5.0-green" />
</div>

## Notes:
This item is a backup of an earlier development version.

## Introduction

- This is official site for beatosion.com that provides professional high-precision motion capture technology solutions based on artificial intelligence sign recognition.

- This project is developed based on [gatsby](https://www.gatsbyjs.com/).

## Installation

### macOS:

1.Install `nvm`:

```bash
$ brew install nvm
```

2.Then when you run nvm:

```bash
$ nvm use

Found '/path/to/beatosion-site/.nvmrc' with version <16.5.0>
Now using node v16.5.0 (npm v7.19.1)
```

3.Install `yarn`:

```bash
$ npm install -g yarn
```

4.Install `gatsby-cli`:

```bash
$ yarn global add gatsby-cli
```
### windows:

1.Install [nvm-windows](https://github.com/coreybutler/nvm-windows)

2.Then when you run nvm:
```bash
$ nvm use

Found '/path/to/beatosion-site/.nvmrc' with version <16.5.0>
Now using node v16.5.0 (npm v7.19.1)
```
3.Install `yarn`:

```bash
$ npm install -g yarn
```

4.Install `gatsby-cli`:

```bash
$ yarn global add gatsby-cli
```

### Linux:

1.Install [nvm](https://github.com/nvm-sh/nvm)

2.Then when you run nvm:
```bash
$ nvm use

Found '/path/to/beatosion-site/.nvmrc' with version <16.5.0>
Now using node v16.5.0 (npm v7.19.1)
```
3.Install `yarn`:

```bash
$ npm install -g yarn
```

4.Install `gatsby-cli`:

```bash
$ yarn global add gatsby-cli
```

### If you don't want to use nvm

1. Install [node.js](https://node.js)

2. Install `gatsby-cli`:

```bash
$ npm install -g gatsby-cli
```


## Usage

Run this repository in your local machine:

```bash
git clone https://github.com/xiaole3349/backup.git

cd backup

# Project setup
yarn install 

# Compiles and hot-reloads for development
yarn develop

# Compiles and minifies for production
yarn build
yarn serve


# if you dosen't using nvm

# Project setup
npm install ----legacy-peer-deps

# Compiles and hot-reloads for development
gatsby develop

# Compiles and minifies for production
gatsby build
gatsby serve
```

The default startup link is `http://localhost:8000/`

## Layout

```text
.
├── gatsby-config.js                           //gatsby plugin config file
├── package.json                               //package path
├── src                                        //source directory
│   ├── components
│   │   ├── css
│   │   │   ├── 404.scss                       //error page style
│   │   │   ├── about.scss                     //page style
│   │   │   ├── essay.scss                     //news module shape style
│   │   │   ├── header.scss                    //header style
│   │   │   ├── index.scss                     //homepage style
│   │   │   ├── layout.scss                    //global style
│   │   │   ├── loading.scss                   //loading style
│   │   │   ├── news.scss                      //news module style
│   │   │   └── swipers.scss                   //swipers style
│   │   ├── data.json                          //loading animation data file
│   │   ├── essay.tsx                          //news module shape components
│   │   ├── header.tsx                         //header common component
│   │   ├── layout.tsx                         //global common component
│   │   ├── loading.js                         //the animation component when page is initialized
│   │   ├── news.tsx                           //homepage news module component
│   │   ├── seo.tsx                            //seo component
│   │   └── swipers.tsx                        //swiper component
│   ├── fonts                                  //public fonts
│   ├── images                                 //public picture
│   └── pages
│       ├── 404.tsx                            //error detail page
│       ├── about.tsx                          //about detail page
│       ├── index.tsx                          //index page
│       └── komoto.tsx                         //komoto detail page
└── tsconfig.json                              //typescript config file

6 directories, 48 files

```

## Features

- [x] homepage -- finished
- [x] page about error -- finished
- [x] mobile adaptation -- finished
- [x] complete browser adaptations -- finished
- [ ] black and white mode switch
- [ ] page about news
- [ ] page about about
- [ ] page about komoto
- [ ] markdown file support

## Dependencies

- [yarnpkg/yarn](https://github.com/yarnpkg/yarn) as project development kit management tool
- [sass/node-sass](https://github.com/sass/node-sass) as stylesheet preprocessor
- [be5invis/Sarasa-Gothic](https://github.com/be5invis/Sarasa-Gothic) as site font library
- [airbnb/lottie-web](https://github.com/airbnb/lottie-web) as parses Adobe After Effects animations exported as json with Bodymovin and renders them natively on site!
- [nolimits4web/swiper](https://github.com/nolimits4web/swiper) as page touch slider with hardware accelerated transitions