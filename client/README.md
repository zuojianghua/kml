# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 学习笔记

### 安装一个扩展
```
cnpm install ts-md5 --save
```

```
import {Md5} from "ts-md5/dist/md5";
```

```
constructor() {
    console.log(Md5.hashStr("123456"));
}
```

### 创建一个模块
```
ng generate service common/tabHistoryData
```


### 页面
html模版写法 https://segmentfault.com/a/1190000004071388

Typescript中文手册 https://www.gitbook.com/book/zhongsp/typescript-handbook/details

angular2常见问题 http://www.jianshu.com/p/588f8effa324