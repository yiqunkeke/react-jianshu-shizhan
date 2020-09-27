import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from "./style";
import { IconfontStyle } from "./statics/iconfont/iconfont";
// import { GlobalStyle, Button, TomatoButton} from "./style";
import App from './App';

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <IconfontStyle />
    {/* <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
    <TomatoButton as="a" href="http://www.baidu.com">Tomato Button</TomatoButton> */}
    <App />

  </Fragment>,
  document.getElementById('root')
);

//#region 【styled-components与 reset.css的结合使用】
// 
// 在 .js 文件中，如果以 import './index.css' 方式引入css文件，则这个css文件【作用在全局】。
// 它是一个全局样式文件，在所有的组件内都有效。
// 全局样式弊端：存在【样式冲突】

// 推荐使用第三方模块【styled-components】对样式文件进行管理。官网 https://styled-components.com/

// PC项目，推荐使用reset css, 进行样式重置。官网 https://meyerweb.com/eric/tools/css/reset/
//#endregion


//#region 【使用styled-components完成Header组件布局】
// 推荐使用 styled-components 在React项目中进行页面布局
//#endregion

//#region 【使用iconfont嵌入头部】
//#endregion
