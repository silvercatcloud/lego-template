<template>
  <div class="content-container">
    <TemplateList :list="testData"></TemplateList>
  </div>
</template>
    
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { GlobalDataProps } from "@/store/index";
import TemplateList from "@/components/TemplateList.vue";
export default defineComponent({
  components: {
    TemplateList,
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const testData = computed(() => store.state.templates.data);
    console.log("Vuex state.templateList:", store.state.templates);
    console.log("testData.value in parent component:", testData.value);
    return { testData };
  },
});
</script>
    
<style>
.page-title {
  color: #fff;
}
.content-container {
  background: #fff;
  padding: 0 24px 24px 30px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 50px auto;
  width: 100%;
}
</style>