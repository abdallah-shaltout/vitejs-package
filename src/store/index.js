import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const useMainStore = defineStore("counter", () => {
  const name = ref("abdallah");
  const clicked = ref(0);
  const increment = () => {
    clicked.value++;
  };
  const plus = computed(() => {
    return clicked.value + 100;
  });
  return { name, clicked, increment, plus };
});
