<template>
  <div class="taskcard">
    <div class="card-header">
      <div class="card-title">All Tasks</div>
    </div>
    <div class="card-body">
      <div class="chats-wrap">
        <div class="chat-details">
          <h4 class="mb-0">
            <span class="font-weight-normal">Sales Report</span>
            <span class="float-right">
              <b>95</b>%
            </span>
          </h4>
          <div class="progress">
            <div
              class="progress-bar violet progress-bar-striped progress-bar-animated bg-primary-gradient"
              style="width: 70%"
            ></div>
          </div>
        </div>
        <div class="chat-details">
          <h4 class="mb-0">
            <span class="font-weight-normal">List Completion</span>
            <span class="float-righ">
              <b>84</b>%
            </span>
          </h4>
          <div class="progress">
            <div
              class="progress-bar blue progress-bar-striped progress-bar-animated bg-info-gradient"
              style="width: 60%"
            ></div>
          </div>
        </div>
        <div class="chat-details">
          <h4 class="mb-0">
            <span class="font-weight-normal">Purchase Report</span>
            <span class="float-right">
              <b>43%</b>
            </span>
          </h4>
          <div class="progress">
            <div
              class="progress-bar orange progress-bar-striped progress-bar-animated bg-warning-gradient"
              style="width: 47%"
            ></div>
          </div>
        </div>
        <div class="chat-details">
          <h4 class="mb-0">
            <span class="font-weight-normal">Revert Messages</span>
            <span class="float-righ">
              <b>34%</b>
            </span>
          </h4>
          <div class="progress">
            <div
              class="progress-bar green progress-bar-striped progress-bar-animated bg-success-gradient"
              style="width: 25%"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.taskcard {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
}

.taskcard .card-header {
  background: none;
  padding: 0.5rem 1.5rem;
  display: flex;
  min-height: 60px;
  align-items: center;
}

.card-header {
  padding: 25px 25px;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid #eaeaea;
}
.taskcard .card-title {
  font-size: 1.125rem;
  font-weight: 500;
}
.taskcard .card-body {
  position: relative;
  flex: 1 1 auto;
  padding: 25px 25px;
}
.taskcard .chat-details {
  padding: 20px;
  margin-bottom: 4px;
}
.taskcard .mb-0 {
  margin-bottom: 6px;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.1;
  font-size: 16px;
}

.float-right {
  float: right;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 0.03em;
  font-size: 0.8125rem;
  min-width: 2.375rem;
  color: #707070;
}

.float-right b {
  font-weight: 600;
}

.taskcard .progress {
  position: relative;
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: 0.703125rem;
  background-color: #f6f6f6;
  border-radius: 3px;
}
.taskcard .progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  transition: width 0.6s ease;
}
.taskcard .progress-bar-animated {
  -webkit-animation: progress-bar-stripes 1s linear infinite;
  animation: progress-bar-stripes 1s linear infinite;
}
.taskcard .progress-bar-striped {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  ) !important;
  background-size: 1rem 1rem;
}
.chats-wrap .violet {
  background-color: rgb(98, 58, 162);
  background-image: -webkit-gradient(
    linear,
    right bottom,
    left top,
    color-stop(0, rgb(98, 58, 162)),
    color-stop(100, rgb(148, 81, 174))
  );
  background-image: -moz-linear-gradient(
    center bottom,
    rgb(98, 58, 162) 0%,
    rgb(249, 119, 84) 100%
  );
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(98, 58, 162, 0.4);
}
.chats-wrap .blue {
  background-color: rgba(34, 192, 200);
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0, rgb(34, 192, 200)),
    color-stop(1, rgb(30, 99, 195))
  );
  background-image: -moz-linear-gradient(
    center bottom,
    rgb(0, 242, 254) 37%,
    rgb(30, 99, 195) 69%
  );
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(51, 51, 204, 0.4) ;
}
.chat-details .orange {
  background-color: rgb(251, 176, 52);
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0, rgb(241, 211, 19)),
    color-stop(1, rgb(251, 176, 52))
  );
  background-image: -moz-linear-gradient(
    center bottom,
    rgb(241, 211, 19) 37%,
    rgb(251, 176, 52) 69%
  );
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(98, 58, 162, 0.4);
}
.chat-details .green {
  background-color: rgb(43, 194, 83);
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0, rgb(43, 194, 83)),
    color-stop(1, rgb(84, 240, 84))
  );
  background-image: -moz-linear-gradient(
    center bottom,
    rgb(43, 194, 83) 37%,
    rgb(84, 240, 84) 69%
  );

  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.4);
}

@keyframes progress-bar-stripes {
  0% {
    background-position: 1rem 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>

