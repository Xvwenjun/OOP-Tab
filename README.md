# OOP-Dynami-Tab
Object Oriented Programming动态标签 

# 学习目标
* 练习JS高级，面向对象编程，学会类的创建和使用、constructor构造函数、方法
* 

# 功能描述
1、Tab标签的动态切换Toggletab、增addtab、删removetab、改edittab
2、动态改变节点封装为函数init，每次动态改变节点后都要重新调用

####  要点：
1、面向对象编程，所有基于实例使用的方法、对象都要添加指向this（初学者最爱犯的错误，多练！）

2、双击禁止选中文字：`` window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();``

3、``insertAdjacentHTML`` 的使用，直接添加文本节点，比createElement方法更便捷

4、再次练习icnfont的使用：

```  @font-face {
    font-family: "iconfont";
    src: url('./iconfont/iconfont.eot?t=1553960438096');
    /* IE9 */
    src: url('./iconfont/iconfont.eot?t=1553960438096#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAK4AAsAAAAABmwAAAJrAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAp4fwE2AiQDCAsGAAQgBYRtBzAbpQXIrrApw71oi3CCOyzEy8RvE4yIN8TD036/zp03qCYRjaJZNBFFS/gREoRGipQKofjuNrb+9XbTqrmXcqWzfTRDqFqWkhAJzYToaE6LQ7Q30CirRqSKMnj58DdIdrNAdhoTQJa5VGfLrtiAy+lPoAcZdUC57UljTR4TMAo4oL0xiqwYG8YueIHPCdTqYajty/t+bUpmrwvEnUK42lQhLMssVy1UNhzN4kmF6vSQVvMY/T5+HEU1SUXBbti7uBBrx++cgqJULp0GhAgBna5AgSkgE0eN6R1NwTitNt0yAI5VG7wr/8AljmoX7K+zq+tBF1Q8k9JTPWp1AjnJDgCzmM3bU0V31dsvV3M2eC6fHjaGfX/qS7U5Gr58vj6uD0bgxudyrV/OtHHyP+NZnpO1txbktjdY+3FB61+7nxeOzq8niGYnRwT3v3aZxeXf6rrNxl5//49WlEtZUUL1Pj3Bv1EO7MuG2namrCkbvcnApLUJtWpRhv2tzlRLx43kQ7WO2/FW6c5QqDZEZnYKFeosoVK1NdSa5E/XaVM1Ra7BhAEQmk0kjV5QaLbIzG5U6HRRqTkK1DqJtivrjMT1zJaNnIsihAiyQE3JdbszcW0Xiadzdl4d8UO0HSUGNDNXzl2hifYSO5pPjrorgdjUAAavoa5TKDZVUXD3kuuOOzh70fShvUiN2owtNsRxIREIIiATUCYpGO2aqXy/CxEeHcfuaKrLDiGbQ5kcEMsNIK8M5qCmR3mn8RFHOpcECBtlAAwWIZ2OAqV5kQoJXHvShORYBzrDZKhhb3uT8QPlrA3bmsKZV6i89DiTV2o1AAAA') format('woff2'), url('./iconfont/iconfont.woff?t=1553960438096') format('woff'), url('./iconfont/iconfont.ttf?t=1553960438096') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont/iconfont.svg?t=1553960438096#iconfont') format('svg');
    /* iOS 4.1- */
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-close::before {
    content: "\e676";
} ```
