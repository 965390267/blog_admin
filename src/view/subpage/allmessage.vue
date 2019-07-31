<template>
  <div class="messagewrap">
  信息总览
  </div>
</template>
<script>
import CalendarBox from "@/components/calendar";

export default {
  components: {
    CalendarBox
  },

  data() {
    return {
      visitnums: ""
    };
  },
  methods: {
    getusermes() {
      this.$http.get("api/login").then(res => {
        if (res.data.code == 200) {
          this.visitnums = res.data.data[0].visitnums;
        }
      });
    }
  },
  mounted() {
    this.getusermes();
  }
};
</script>
<style scoped>
.messagewrap h3 {
  font-family: "Ruda", sans-serif;
  font-size: 24px;
  color: rgb(121, 121, 121);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
.messagewrap hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #797979;
}
.col-md-2 h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

