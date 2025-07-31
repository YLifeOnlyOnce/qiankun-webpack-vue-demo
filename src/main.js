import './public-path';
import Vue from 'vue'
import VueRouter from 'vue-router';
import routes from './router';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const { name } = require('../package.json');
let router = null;
let instance = null;
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log('[vue] vue app unmounted');
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}


// 路由配置： 在微前端框架下，路由的base需要设置为 /{name}，也可以由主应用动态配置，目前按照该规则静态配置
router = new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? `/${name}` : '/',
  mode: 'history',
  routes,
});

// qiankun 渲染函数
function qiankunRender(props = {}) {
  // 在微应用环境下 props 会提供挂载的 container 和 微应用名称等信息
  const { container } = props;
  // 执行实际的 mount
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时渲染函数
function render(){
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#app');
}

window.__POWERED_BY_QIANKUN__ ? qiankunRender() : render();