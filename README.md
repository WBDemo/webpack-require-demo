# webpack-require-demo

- webpack-require-demo

### Error Log

```
Module not found: Error: a dependency to an entry point is not allowed
```

change:
```
 entry: {
        index: './index', //我们开发时的入口文件
        ensure: './ensure'
    },
```
to: 
```
 entry: {
        index: './index', //我们开发时的入口文件
        ensure: ['./ensure']
    },
```
