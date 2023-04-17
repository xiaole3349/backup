<h4 align="right"><a href="https://github.com/xiaole3349/backup/blob/master/README.md">English</a>| <strong>简体中文</strong></h4>

<div align="center">
 <img  src="./src/images/logo.png" height="20%" width="20%" />
 <h1>Official site for beatosion.com</h1>
 <img src="https://img.shields.io/badge/version-0.0.4-%238C78B4" />
 <img src="https://img.shields.io/badge/typescript-v4.4.3-%2300FFFF" />
 <img src="https://img.shields.io/badge/gatsby-v3.10.2-%238A2BE2" />
 <img src="https://img.shields.io/badge/node-16.5.0-green" />
</div>

## 注意

这是一个早期开发版本的备份。

## 简介

- 这是beatosion.com的官方网站，它提供基于人工智能符号识别的专业高精度动作捕捉技术解决方案。

- 本项目基于[gatsby](https://www.gatsbyjs.com/)开发。

## 安装

### macOS:

1.安装 `nvm`:

```bash
$ brew install nvm
```

2. 然后运行nvm:

```bash
$ nvm use

找到 '/path/to/beatosion-site/.nvmrc' with version <16.5.0>
然后使用 node v16.5.0 (npm v7.19.1)
```

3.安装 `yarn`:

```bash
$ npm install -g yarn
```

4.安装 `gatsby-cli`:

```bash
$ yarn global add gatsby-cli
```

### windows:

1.安装 [nvm-windows](https://github.com/coreybutler/nvm-windows)

2. 然后运行nvm:

```bash
$ nvm use

找到 '/path/to/beatosion-site/.nvmrc' 版本 <16.5.0>
然后使用 node v16.5.0 (npm v7.19.1)
```

3.安装 `yarn`:

```bash
$ npm install -g yarn
```

4.安装 `gatsby-cli`:

```bash
$ yarn global add gatsby-cli
```

### Linux:

1.安装 [nvm](https://github.com/nvm-sh/nvm)

``` bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```



2.然后运行 nvm:

```bash
$ nvm use

找到 '/path/to/beatosion-site/.nvmrc' 版本 <16.5.0>
然后使用 node v16.5.0 (npm v7.19.1)
```

3.安装 `yarn`:

```bash
$ npm install -g yarn
```

4.安装 `gatsby-cli`:

```bash
$ yarn global add gatsby-cli
```

### 如果你不想使用nvm

1. 安装 [node.js](https://node.js)

2. 安装 `gatsby-cli`:

```bash
$ npm install -g gatsby-cli
```

## 使用方法

在本地运行 `beatosion-site` :

```bash
git clone git@git.beatosion.cn:web-designer/beatosion-site.git

# 项目安装
yarn install

# 项目开发的编译和热加载
yarn develop

# 项目打包和预览
yarn build
yarn serve


# 如果你没有使用nvm

# 项目安装
npm install ----legacy-peer-deps

# 用于开发的编译和热加载
gatsby develop

# 项目打包和预览
gatsby build
gatsby serve
```

默认启动链接`http://localhost:8000/`

## 布局

```text
.
├── gatsby-config.js                           //gatsby插件的配置文件
├── package.json                               //package路径
├── src
│   ├── components
│   │   ├── css
│   │   │   ├── 404.scss                       //错误页面的样式
│   │   │   ├── about.scss                     //页面的样式
│   │   │   ├── essay.scss                     //新闻模块的布局样式
│   │   │   ├── header.scss                    //标题的样式
│   │   │   ├── index.scss                     //首页的样式
│   │   │   ├── layout.scss                    //全局的样式
│   │   │   ├── loading.scss                   //加载页面的样式
│   │   │   ├── news.scss                      //新闻模块的样式
│   │   │   └── swipers.scss                   //轮播图的样式
│   │   ├── data.json                          //加载动画的数据文件
│   │   ├── essay.tsx                          //新闻模块的布局组件
│   │   ├── header.tsx                         //标题组件
│   │   ├── layout.tsx                         //全局组件
│   │   ├── loading.js                         //页面初始化时的动画组件
│   │   ├── news.tsx                           //新闻模块组件
│   │   ├── seo.tsx                            //seo组件
│   │   └── swipers.tsx                        //轮播组件
│   ├── fonts                                  //公共字体
│   ├── images                                 //公共图片
│   └── pages
│       ├── 404.tsx                            //错误详情页
│       ├── about.tsx                          //关于我们详情页
│       ├── index.tsx                          //主页
│       └── komoto.tsx                         //看板娘详情页
└── tsconfig.json                              //typescript配置文件

6个目录, 48个文件

```

## 功能

- [x] 主页 -- 已完成
- [x] 错误详情页 -- 已完成
- [x] 移设备适配 -- 已完成
- [x] 完整浏览器适配 -- 已完成
- [ ] 夜间模式切换
- [ ] 新闻页面
- [ ] 关于我们页面
- [ ] komoto页面
- [ ] 支持markdown文件

## 项目依赖

- [yarnpkg/yarn](https://github.com/yarnpkg/yarn) 项目开发工具包的管理工具
- [sass/node-sass](https://github.com/sass/node-sass) 样式预处理程序
- [be5invis/Sarasa-Gothic](https://github.com/be5invis/Sarasa-Gothic) 网站字体库
- [airbnb/lottie-web](https://github.com/airbnb/lottie-web) 解析用Bodymovin导出为json的Adobe After Effects动画，并在网站上进行原生渲染！
- [nolimits4web/swiper ](https://github.com/nolimits4web/swiper)具有硬件加速转换功能的页面触摸滑块。
