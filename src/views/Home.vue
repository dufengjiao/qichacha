<template>
  <div class="home">
    <common-header></common-header>
    <div class="search-container">
      <div class="container">
        <div class="intro">
          <h1>查企业，就上企查查</h1>
          <div></div>
          <el-autocomplete
            v-model="keywords"
            :fetch-suggestions="querySearch"
            placeholder="请输入企业名、人名、产品名，或地址电话/经营范围等，多关键词用空格隔开，如“小米 雷军”"
            @select="handleSelect"
          >
            <template v-slot="{item}">
              <span class="match-item" v-html="item.nameH"></span>
            </template>
            <el-button slot="append" type="primary" @click="handleSearch">查一下</el-button>
          </el-autocomplete>
          <div class="hot-container">
            <span>热搜榜：</span>
            <div class="hot-list">
              <a v-for="item in hostList" :key="item.name" :href="item.href">{{ item.title }}</a>
              <a href="#">查看更多></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-container">
      <div class="container">
        <ul class="clearfix">
          <li
            class="nav-item fl"
            :class="[`nav-item-${item.name}`, { z: item.clz}]"
            v-for="item in homeNavs"
            :key="item.name"
            @click="routerJump(item.name)"
          >
            <i :class="`nav-icon-${item.name}`"></i>
            <span class="nav-text">
              <span class="nav-text-title">{{ item.title }}</span>
              <p>{{ item.instruction }}</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CommonHeader from "@/biz-components/CommonHeader";
import { searchEntList } from '@/networks/home.api';

export default {
  name: "home",
  data() {
    return {
      keywords: "",
      entId: '',
      entName: '',
      hostList: [
        { name: "a", title: "罗永浩限制消费", href: "" },
        { name: "b", title: "比特大陆法人变更", href: "" },
        { name: "c", title: "拉夏贝尔日关13店", href: "" },
        { name: "d", title: "腾讯恢复NBA直播", href: "" }
      ],
      homeNavs: [
        { name: "overseas", title: "全球企业", instruction: '亚洲、欧洲、美洲、大洋洲' },
        { name: "brands", title: "知识产权", instruction: '商标、专利、著作权' },
        { name: "shixins", title: "法律风险", instruction: '失信人、被执行人、裁判文书' },
        { name: "elib", title: "投融资", instruction: '30万+创业公司', clz: 'z' },
        { name: "certpay", title: "企业认证", instruction: '完善企业信息，进行品牌推广' },
        { name: "monitor", title: "风险监控", instruction: '实时获取企业和人员的信息变动' },
        { name: "batchsearch", title: "批量查询", instruction: '一键查询最多5000家企业' },
        { name: "map", title: "千寻地图", instruction: '找到目标区域企业名录', clz: 'z' }
      ]
    };
  },
  methods: {
    querySearch(queryString, cb) {
      if (!queryString) return;
      searchEntList({ key: queryString }).then(data => {
        cb(data);
      })
    },
    handleSelect(item) {
      this.keywords = item.name;
    },
    handleSearch() {

    },
    routerJump(name) {
      this.$router.$open({ name })
    }
  },
  components: {
    CommonHeader
  }
};
</script>
<style lang="less">
.home {
  .container {
    width: 1250px;
    margin: 0 auto;
  }
  .search-container {
    background: url(~@/assets/img/bg-company-2.png) no-repeat top;
    background-size: cover;
    .intro {
      width: 950px;
      margin: 0 auto;
      padding: 100px 0;
    }
    h1 {
      font-size: 45px;
      color: #fff;
      margin-bottom: 30px;
    }
    .el-autocomplete {
      width: 100%;
    }
    .el-input__inner {
      height: 51px;
    }
    .el-input-group__append {
      color: #fff;
      background: #616dff;
      font-size: 20px;
      border: 0;
    }
    .el-input-group__append:hover {
      background: #4D59E8;
    }
  }
  .hot-container {
    color: #fff;
    font-size: 15px;
    padding: 0 20px;
    margin: 20px 0;
    text-align: left;
    .hot-list {
      display: inline-block;
    }
    a {
      color: #bceaff;
      padding: 5px 10px;
    }
    a:hover {
      color: #fff;
    }
  }
  .nav-container {
    background: #fff;
    .container {
      padding-left: 108px;
    }
    li {
      width: 290px;
      padding: 25px 10px 25px 15px;
      transition: background-color .2s;
      cursor: pointer;
      text-align: left;
      .nav-text-title{
        color:#3B426B;
        font-size: 16px;
        top: 2px;
        position: relative;
        transition: top .2s;
      }
      [class^='nav-icon-'] {
        margin-right: 10px;
      }
      p{
        opacity: 0;
        transition: opacity .2s;
      }
    }
    li.z {
      width: 230px;
    }
    li:hover {
      background-color: #F3F9FE;
       .nav-text-title{
        color:#128bed;
        font-weight: 600;
        top: -8px;
      }
      p{
        opacity: 1;
      }
    }
    .nav-text {
      display: inline-block;
      text-align: left;
    }
  }
}
.match-item {
  em {
    font-style: normal;
    font-weight: 700;
    color: #FD485E;
  }
}

</style>
