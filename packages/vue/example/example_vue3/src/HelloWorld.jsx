import { defineComponent, ref } from 'vue';
/*
1.props, name …
在 defineComponent 组件块内，完全和 vue3 新语法等同，还可以使用 props 对上层传入进行限制、指定，以及使用 name 等关键词
2.render
render 才是 jsx 的核心部分，所有的 jsx 要在此处顶层返回。
和 react 的函数式相比，在 render 内的 jsx ，你还需要使用 this 取得 setup 阶段返回的值。
*/
const Demo = defineComponent({
  name: 'Demo',
  /*
 定义完组件就是 setup 了，为什么不用 vue2 的 template 呢？那就不是 jsx 了 
  */
  setup(props) {
    const input = ref(null);
    const click = (e) => {
      console.log(e);
      console.log(input.value);
      console.log('jsx-tesx-props', props);
    };
    return {
      click,
      input,
    };
  },
  render() {
    return (
      <>
        <div>test</div>
        <button onClick={this.click}>点击</button>
        <input v-model={this.input} placeholder="啊这" />
      </>
    );
  },
});

export default Demo;
