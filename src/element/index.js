// 导入自己需要的组件
import { Message ,Menu,MenuItem,Upload,Table,TableColumn} from 'element-ui'

const element = {
    install: function (Vue) {
      Vue.use(Message).use(Menu).use(MenuItem).use(Upload).use(Table).use(TableColumn)

    }
  }
  export default element
  