<template>
  <div class="header-container">
    <div class="container clearfix">
      <router-link to="/" class="logo">
        <img src="@/assets/img/logo4.png" alt="logo" />
      </router-link>
      <ul class="clearfix">
        <li class="nav" @mouseenter="showApp" @mouseleave="hideApp">
          <a href="#">应用</a>
          <section class="dropdown-menu app-box clearfix" v-show="applicatonShow" @mouseenter="showApp" @mouseleave="hideApp">
            <template v-for="item in applicatons">
              <div v-if="item.type == 'split'" class="nav-split" :key="item.name">
                <label>{{ item.label }}</label>
                <span></span>
              </div>
              <div v-else :key="item.label" class="col-xs">
                <a href='#' class="header-icon-text" @click="routerJump(item.name)">
                  <span class="block"><i :class="'header-icon-' + item.name"></i></span>
                  <span>{{ item.label }}</span>
                </a>
              </div>
            </template>
          </section>
        </li>
        <li class="head-line">|</li>
        <template v-for="item in navList">
          <li :key="item.name" class="nav">
            <a href>{{ item.title }}</a>
            <template v-if="item.children"></template>
            <ul v-show="item.show">
              <li v-for="cld in item.children" :key="cld.name">
                <a href>{{ cld.title }}</a>
              </li>
            </ul>
          </li>
          <li :key="`${item.name}-line`" class="head-line">|</li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      applicatonShow: false,
      applicatons: [
        { type: "split", label: "热门服务" },
        { name: "deadbeat", label: "查老赖" },
        { name: "monitor", label: "风险监控" },
        { name: "map", label: "千寻地图" },
        { name: "recruit", label: "招聘查询" },
        { name: "muhouperson", label: "大咖搜索" },
        { name: "industry", label: "行业数据" },
        { type: "split", label: "批量查询" },
        { name: "company", label: "企业" },
        { name: "report", label: "信用报告" }
      ],
      navList: [
        { name: "app", title: "APP下载" },
        { name: "vip", title: "VIP服务" },
        { name: "qiye", title: "企业套餐" },
        {
          name: "hezuo",
          title: "合作通道",
          show: false,
          children: [
            { name: "media", title: "媒体通道" },
            { name: "pro", title: "专业版试用" },
            { name: "openapi", title: "数据接口平台" }
          ]
        }
      ]
    };
  },
  methods: {
      showApp() {
        this.applicatonShow = true;
      },
      hideApp() {
        this.applicatonShow = false;
      },
      routerJump(name) {
        // this.$router.push({ name: name });
        this.$router.$open({ name: name });
      }
  }
};
</script>
<style lang="less">
.header-container {
  height: 56px;
  background: #fff;
  padding: 0 50px;
  .logo {
    line-height: 56px;
    float: left;
    img {
      height: 37px;
      vertical-align: middle;
    }
  }
  .nav {
    float: left;
    display: inline-block;
    position: relative;
    .dropdown-menu {
      position: absolute;
      top: 100%;
      background: #fff;
      z-index: 1000;
      border-radius: 2px;
      font-size: 13px;
      text-align: left;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }
    .app-box {
      width: 542px;
      line-height: initial;
      padding: 15px 0;
      margin-left: -220px;
      .nav-split {
        font-size: 15px;
        color:#000000;
        font-weight: bold;
        position: relative;
        margin-top: 5px;
        margin-bottom: 5px;
        padding-left: 15px;
        float:left;
        width: 100%;
        line-height: 1.8;
        label{
          font-size: 15px;
          position: relative;
          z-index: 2;
          padding-right: 10px;
          background: #fff;
        }
        span {
         position: relative;
         float: left;
          height: 1px; 
          width: 100%;
          background: #eee;
          margin-top: -13px;

        }
      }
      .col-xs {
        float: left;
        display: inline-block;
        width: 90px;
        padding: 0 15px;
        .header-icon-text {
          i { vertical-align: top; }
        }
        .block {
          margin-bottom: 5px;
        }
      }
    }
  }
  ul {
    float: right;
    & > li {
      line-height: 56px;
      padding: 0 10px;
      //   border-right: 1px solid #efefef;
    }
    .head-line {
      line-height: 56px;
      float: left;
      color: #efefef;
    }
    a {
      color: #222;
      font-size: 14px;
    }
    a:hover {
      color: #128bed;
    }
  }
}
</style>
