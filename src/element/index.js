// 导入自己需要的组件
import { Message ,Menu,MenuItem,Upload} from 'element-ui'

const element = {
    install: function (Vue) {
      Vue.use(Message).use(Menu).use(MenuItem).use(Upload)

    }
  }
  export default element
  