<template>
  <div class="comments">
    <!-- <TimeLine></TimeLine> -->
    <light-timeline :items="items">
      <template slot="content" slot-scope="{ item }">
        <CommonList></CommonList>
      </template>
    </light-timeline>
  </div>
</template>

<script>
import TimeLine from "../timeline/TimeLine";
import CommonList from "./commentList";

export default {
  components: {
    TimeLine,
    CommonList,
    
  },
  data() {
    return {
      vactiveStep: 0,
      items: [
        {
          tag: "2018-01-12",
          content: "hallo",
          class: "fas fa-star"
        },

        {
          type: "star",
          tag: "2018-01-14",
          class: "fas fa-star",
          htmlMode: true,
          content: ``
        },
        {
          tag: "2018-01-13",
          color: "red",
          type: "circle",
          content: "world",
          class: "far fa-star"
        }
      ]
    };
  },
  computed: {
    vfinished() {
      return this.vactiveStep > 2;
    }
  },
  methods: {
    vhandleNext() {
      this.vactiveStep++;
    },
    vhandlePrev() {
      this.vactiveStep--;
    },
    vreset() {
      this.vactiveStep = 0;
    }
  }
};
</script>

<style >
.panel-body {
  position: relative;
  padding: 15px;
  display: block;
  margin-left: 25px;
  text-align: left;
  background: #f4f4f4;
  color: #797979;
}

.panel-body .arrow {
  border-right: 8px solid #f4f4f4;
}

.panel-body .arrow {
  border-bottom: 8px solid transparent;
  border-top: 8px solid transparent;
  display: block;
  height: 0;
  left: -7px;
  position: absolute;
  top: 13px;
  width: 0;
}
.panel-body h1.blue,
.panel-body span a.blue {
  color: #56c9f5;
}

.panel-body h1 {
  font-size: 16px;
  font-weight: 300;
  margin: 0 0 5px;
}
.panel-body p {
  font-size: 12px;
  margin-bottom: 0;
  margin: 0 0 10px;
}
.panel-body a {
  display: inline-block;
  color: #ef6f66;
}
.panel-body .album {
  display: flex;
  margin-top: 20px;
}
.panel-body .album a {
  margin-right: 5px;
  float: left;
}
.panel-body .album img {
  width: 48px;
  height: 32px;
}
</style>
