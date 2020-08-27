# 集成友盟+小程序统计sdk

## 1.注册友盟+账号

[参考官网原生小程序文档](https://developer.umeng.com/docs/147615/detail/147619)

## 2.友盟官网申请小程序appkey

[参考官网原生小程序文档](https://developer.umeng.com/docs/147615/detail/147619)

## 3.域名白名单配置

 [官网微信小程序文档](https://developer.umeng.com/docs/147615/detail/147619) 
 [官网原生支付宝小程序接入](https://developer.umeng.com/docs/147615/detail/147727)
 
## 4.创建 Remax 应用


如果是新工程，直接按照官网方法初始化
```bash
$ npx init remax-app my-app
$ cd my-app
```
 
## 5.安装sdk

```bash
$ cd my-app
$ npm install umtrack-alipay --save
$ npm install umtrack-wx --save
```
## 6.跨平台集成最佳实践

*不能像taro一样动态require [原因参见](https://zhuanlan.zhihu.com/p/52990313)*
本教程使用文件名后缀区分不同平台代码,跟taro多文件跨平台类似，[参考跨平台介绍](https://remaxjs.org/one/intro)

*src/uma/index.wechat.js* 定义微信小程序环境需要导入的模块并初始化
```js
import uma from 'umtrack-wx';

uma.init({
    appKey: 'YOUR_APP_KEY',
    useOpenid: false,
    autoGetOpenid: false,
    debug: true
});
export default uma;
```
*src/uma/index.alipay.js*定义支付宝小程序需要导入的模块并初始化
```js
import uma from 'umtrack-alipay';

uma.init({
    appKey: 'YOUR_APP_KEY',
    debug: true
});
export default uma;
```
*src/uma/index.js*
```js
export { default } from  './index.wechat';

```
*app.js*

```js
import '@/uma';//app.js中 uma模块一定要放在最前头
import './app.css';

const App = props => props.children;
export default App;

```
## 7.自定义事件

*pages/index/index.js*导入uma模块

```js
import  { useReady } from 'remax';
import uma from '@/uma';

export default () => {
  useReady(()=>{
    uma.trackEvent('buy',{car:'bmw'});
  });
  return 'showtime';
};
```
