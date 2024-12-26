<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-sider width="300" style="background: #e6f92a">
        <div class="sidebar-container">
          组件列表
          <components-list
            :list="defaultTextTemplates"
            @onItemClick="addItem"
          />
        </div>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content class="preview-container">
          <p>画布区域</p>
          <div class="preview-list" id="canvas-area">
            <component
              v-for="component in components"
              :key="component.id"
              :is="component.name"
              v-bind="component.props"
            ></component>
          </div>
        </a-layout-content>
      </a-layout>
      <a-layout-sider
        width="300"
        style="background: #66016e"
        class="settings-panel"
      >
        组件属性
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store/index";
import ComponentsList from "@/components/ComponentsList.vue";
import { defaultTextTemplates } from "../defaultTemplates";
import LText from "@/components/LText.vue";
export default defineComponent({
  components: {
    LText,
    ComponentsList,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const components = computed(() => store.state.editor.components);
    const addItem = (props: any) => {
      store.commit("addComponent", props);
    };
    return {
      components,
      defaultTextTemplates,
      addItem,
    };
  },
});
</script>

<style>
</style>