module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [//继承其他配置文件中的规则 
    'plugin:vue/vue3-essential',//这是 Vue.js 3 的基本规则集，用于确保代码质量。
    'eslint:recommended',//这是 ESLint 推荐的规则集。
    '@vue/typescript/recommended'//这是针对 TypeScript 的 Vue.js 推荐规则集。
  ],
  parserOptions: {
    ecmaVersion: 2020//指定使用 ECMAScript 2020 版本的语法。
  },
  rules: {//对象用于自定义规则
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
