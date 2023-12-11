import Storage from "@/libs/storage";

export default {
  namespaced: true,
  // 对数据的全局存储
  state: {
    i18n: Storage.getLocalItem("i18n") || "zh-cn",
  },
  // 获取声明的属性值，实时监听动态变化，对数据进行计算
  getters: {
    getI18n: (state) => {
      return state.i18n;
    },
  },
  // 对数据的同步更改
  mutations: {
    i18n(state, value) {
      Storage.setLocalItem("i18n", value);
      state.i18n = value;
    },
  },
  // 对数据的异步更改
  actions: {
    setI18n(context, value) {
      context.commit("i18n", value);
    },
  },
};
