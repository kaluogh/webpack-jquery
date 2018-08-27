//在pathmap.json 里面配置了commons.css的alias别名 commonCss
var $ = require("jquery");
var _=require('_')
require('commonCss');
require('../css/index.scss');
require('@/components/header/header.js')//引入header组件
require('@/components/footer/footer.js')//引入footer组件
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';//引入Bootstrap CSS
$("<div>这是jquery生成的</div>").appendTo("body");
