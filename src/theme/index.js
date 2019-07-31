import theme from 'muse-ui/lib/theme';/* 主题设置 */
/* @parm add(name, config, extendName) 添加新的主题,name 主题名称
config 主题配置对象
extendName 继承哪个主题， 默认 ‘light’ */
theme.add('dark', {
  primary: '#424a5d',
  secondary: '#ff4081',/* a标签color */
  success: '#4caf50',/* 成功的背景色 */
  warning: '#fdd835',/* 警告背景色 */
  info: '#2196f3',/* 信息提示背景色 */
  error: '#f44336',/* 错误背景色 */
  track: '#757575',
  text: {/* 文本 */
    primary: '#fff',/* 在body标签中设置全局字体color颜色 */
    secondary: 'rgba(255, 255, 255, 0.7)',
    alternate: '#303030',
    asidetext:'#aeb2b7',
    asideactive:'rgb(104, 223, 240)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    hint: 'rgba(255, 255, 255, 0.3)' // 提示文字颜色
  },
  divider: 'rgba(255, 255, 255, 0.3)',
  background: {
    paper: '#424242',
    chip: '#616161',
    default: '#303030'/* 默认body背景色 */
  }
}, 'dark');
/* 浅绿色主题 */
theme.add('LightGreen', {
    primary: '#66CCFF',
    secondary: '#ff4081',
    success: '#4caf50',
    warning: '#fdd835',
    info: '#2196f3',
    error: '#f44336',
    track: '#757575',
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      alternate: '#303030',
      asidetext:'#aeb2b7',
      asideactive:'rgb(104, 223, 240)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      hint: 'rgba(255, 255, 255, 0.3)' // 提示文字颜色
    },
    divider: 'rgba(255, 255, 255, 0.3)',
    background: {
      paper: '#424242',
      chip: '#616161',
      default: '#CCFFCC'
    }
  }, 'LightGreen');
/* 浅绿色主题 */


/* 如果有新加入的样式，需要添加到主题样式中， 则需要使用 addCreateTheme(func) 添加到themes集中控制。 */

theme.addCreateTheme((theme) => {
  return `
  .mu-hello-word {
    color: ${theme.text.primary}
  }
  .site-footer{
      background:${theme.primary}
  }
  #sidebar{
    background:${theme.primary}
  }
  .el-menu{
    background:${theme.primary}!important;
}
.el-menu-item{
    color:${theme.text.asidetext}!important;
}
.el-menu-item.is-active{
    color:${theme.text.asideactive}!important;
}
  `;
});
theme.use('light')
export default theme;