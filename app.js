const app = Vue.createApp({
  data() {
    return {
      val1: "data",
    };
  },
  methods: {
    showAlert() {
      alert("!!!");
    },
  },
});

app.mount("#app");
