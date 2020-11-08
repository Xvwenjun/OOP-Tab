var that;
//添加一个全局变量，创建实例后用于指向实例对象
class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.addtab');
        this.ul = this.main.querySelector('nav ul');
        this.tabcont = this.main.querySelector('.tabcont');
        //在实例创建后构造函数会自动执行
        this.init();

    }
    init() {
        this.updateNode(); //每次动态更新节点后，都要重新初始化，为所有的对象绑定事件
        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.text[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
            this.close[i].onclick = this.removeTab;

        }
    }

    // 动态更新节点
    updateNode() {
            //所有动态变化的节点，都要封装在这个函数中，每次节点更新，init函数都要被重新调用
            this.lis = this.main.querySelectorAll('li');
            this.close = this.main.querySelectorAll('.icon-close');
            this.text = this.main.querySelectorAll('ul span:first-child')
            this.sections = this.main.querySelectorAll('section');
        }
        // 切换标签
    toggleTab() {
            that.clearClass();
            this.className = "liactive";
            that.sections[this.index].className = "conactive";
        }
        // 添加标签
    addTab() {
            that.clearClass();
            var random = Math.random();
            var li = '<li class = "liactive"> <span>新选项卡</span><span class="iconfont icon-close"></span></li>';
            var con = ' <section class="conactive">' + random + '</section>';
            that.ul.insertAdjacentHTML('beforeend', li);
            that.tabcont.insertAdjacentHTML('beforeend', con);
            that.init();
        }
        // 编辑标签
    editTab() {
            //获取标签的内容，存入变量str中
            var str = this.innerText;
            //双击禁止选定文字
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            this.innerHTML = '<input type="text">';
            //获取输入框
            var input = this.children[0];
            input.value = str;
            input.select(); //默认文字为选中状态
            input.onblur = function() {
                //当输入框失去焦点，就把输入框里的文本赋值给它的父节点li
                this.parentNode.innerHTML = this.value;
            }
            input.onkeyup = function(e) {
                if (e.keyCode == 13) {
                    this.blur();
                    //当按下回车键，手动调用表单失去焦点事件
                }
            }
        }
        // 删除标签
    removeTab(e) {
            e.stopPropagation();
            var index = this.parentNode.index;
            that.lis[index].remove();
            that.sections[index].remove();
            //如果删除的不是当前选中的选项卡，函数执行结束
            that.init();
            if (document.querySelector('.liactive')) return;
            //如果删除的是当前选中的选项卡，则将前一个选项卡设置为选中状态
            index--;
            index && that.lis[index].click();

        }
        // 清除标签的选中状态，因为每一次标签的切换或删除，都会改变标签的选中状态（先清除所有的类，再添加选中的类），所以就为清除所有的类封装一个函数
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = "";
            this.sections[i].className = "";
        }
    }


}
//创建类的实例
new Tab('#tab');