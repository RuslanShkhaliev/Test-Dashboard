// Register global components
import Vue from 'vue';
// import upperFirst from 'lodash/upperFirst';
// import camelCase from 'lodash/camelCase'

const requireComponent = require.context("../components/global", false, /\w+\.vue$/);

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName.replace(/\.\//, "").replace(/\.\w+$/, "")
   /*     upperFirst(
        camelCase(fileName.replace(/^\.\//, "").replace(/\.\w+$/, ""))
    )*/
    Vue.component(componentName, componentConfig.default || componentConfig);
})