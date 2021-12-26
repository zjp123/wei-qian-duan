# hello-vue3

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### // "vue-template-compiler": "^2.6.11" vue3 不用这个包了 用的是这个@vue/compiler-sfc

# 您的 Laravel 混合设置已经隐式加载了 VueLoaderPlugin，因此再次重新加载会导致此错误。 通过阅读他们的文档，它写道他们支持 .vue 文件编译，无需额外配置。

# 不用额外在配置VueLoaderPlugin 默认已经支持

    
# vue3 用不到 // "vue-template-compiler": "^2.6.11" ？ 

# 把"vue-loader": "^15.9.3" 》  16.0.0 可以解决：TypeError: Cannot read property 'parseComponent' of undefined
