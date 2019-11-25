<template>
  <div class="home">
    <common-header></common-header>
    <div class="search-container">
      <div class="container">
        <div class="intro">
          <h1>查企业，就上企查查</h1>
          <el-radio-group v-model="activeSearchType" @change="handleChangeSearchType">
            <el-radio-button v-for="item in serachTypes" :key="item.name" :label="item.name">{{ item.label }}</el-radio-button>
          </el-radio-group>
          <el-autocomplete
            v-model="keywords"
            :fetch-suggestions="querySearch"
            placeholder="请输入企业名、人名、产品名，或地址电话/经营范围等，多关键词用空格隔开，如“小米 雷军”"
            :trigger-on-focus="false"
            @select="handleSelect">
            <template v-slot="{item}">
              <span class="match-item" v-html="item.nameH"></span>
            </template>
            <el-button slot="append" type="primary" @click="handleSearch">查一下</el-button>
          </el-autocomplete>
          <div class="hot-container">
            <p v-for="item in hotList" :key="item.name" v-show="activeSearchType == item.type">
              <span>热搜榜：</span>
              <span class="hot-list">
                <a v-for="ht in item.list" :key="ht.name" :href="ht.href" target="_blank">{{ ht.title }}</a>
                <a v-if="item.type == 'company'" href="#">查看更多></a>
              </span>
           </p>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-container">
      <div class="container">
        <ul class="clearfix">
          <li
            class="nav-item fl"
            :class="[`nav-item--${item.name}`, { z: item.clz}]"
            v-for="item in homeNavs"
            :key="item.name"
            @click="routerJump(item.name)"
          >
            <i :class="`bimg-${item.name}`"></i>
            <span class="nav-text">
              <span class="nav-text-title">{{ item.title }}</span>
              <p>{{ item.instruction }}</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="banner-container">
      <div class="container">
        <el-Carousel height="160px" trigger="click" arrow="never">
          <el-carousel-item v-for="item in banners" :key="item.name">
            <a href="#" @click="routerJump(item.name)"><img :src="item.href" alt="企查查" /></a>
          </el-carousel-item>
        </el-Carousel>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CommonHeader from "@/biz-components/CommonHeader";
import { searchEntList,
  getHotList } from "@/networks/home.api";

export default {
  name: "home",
  data() {
    return {
      keywords: "",
      entId: "",
      entName: "",
      activeSearchType: 'company',
      serachTypes: [
        { label: '查企业', name: 'company', placeholder: '请输入企业名、人名、产品名，或地址电话/经营范围等，多关键词用空格隔开，如“小米 雷军”' },
        { label: '搜老板', name: 'boss', placeholder: '请输入法定代表人、股东或高管姓名，如“雷军”' },
        { label: '查风险', name: 'risk', placeholder: '请输入企业名、人名，或案号、案件名称等' },
        { label: '查新闻', name: 'news', placeholder: '请输入企业名、人名，或新闻标题、新闻类型等，如“上市退市”' },
        { label: '找关系', name: 'relation', jump: true }
      ],
      hotList: [],
      homeNavs: [ 
        {
          name: "overseas",
          title: "全球企业",
          instruction: "亚洲、欧洲、美洲、大洋洲"
        },
        {
          name: "brands",
          title: "知识产权",
          instruction: "商标、专利、著作权"
        },
        {
          name: "shixins",
          title: "法律风险",
          instruction: "失信人、被执行人、裁判文书"
        },
        {
          name: "elib",
          title: "投融资",
          instruction: "30万+创业公司",
          clz: "z"
        },
        {
          name: "certpay",
          title: "企业认证",
          instruction: "完善企业信息，进行品牌推广"
        },
        {
          name: "monitor",
          title: "风险监控",
          instruction: "实时获取企业和人员的信息变动"
        },
        {
          name: "batchsearch",
          title: "批量查询",
          instruction: "一键查询最多5000家企业"
        },
        {
          name: "map",
          title: "千寻地图",
          instruction: "找到目标区域企业名录",
          clz: "z"
        }
      ],
      banners: [
        {
          name: "1",
          href:
            "https://co-image.qichacha.com/upload/chacha/img/20190919/1568898865495663.png"
        },
        {
          name: "2",
          href:
            "https://co-image.qichacha.com/upload/chacha/img/20190719/15634996693672.png"
        },
        {
          name: "3",
          href:
            "https://co-image.qichacha.com/upload/chacha/img/20190606/1559814646932838.png"
        },
        {
          name: "4",
          href:
            "https://co-image.qichacha.com/upload/chacha/img/20191112/1573526413506257.png"
        }
      ]
    };
  },
  methods: {
    handleChangeSearchType() {
      if (this.activeSearchType == 'relation') {
        this.$router.push({ name: this.activeSearchType });
      }
    },
    getHotListData() {
      getHotList().then(data => {
        this.hotList = this.serachTypes.filter(item => !item.jump).map(item => {
          return {
            type: item.name,
            list: data[item.name]
          }
        })
        console.log(this.hotList)
      });
    },
    querySearch(queryString, cb) {
      if (!queryString) return;
      searchEntList({ key: queryString }).then(data => {
        cb(data);
      });
    },
    handleSelect(item) {
      this.keywords = item.name;
      this.$router.push({ path: `/detail/${item.id}`});
    },
    handleSearch() {},
    routerJump(name) {
      this.$router.$open({ name });
    }
  },
  components: {
    CommonHeader
  },
  mounted() {
    this.getHotListData();
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
      .el-radio-group {
        margin-bottom: 10px;
      }
      .el-radio-button {
        margin: 10px 30px 10px 0;
        position: relative;
      }
      .el-radio-button__inner {
        position: relative;
        border: 0;
        background: transparent;
        color: #fff;
        box-shadow: none;
        border-radius: 2px;
        padding: 8px 10px;
        font-size: 16px;
        font-weight: normal;
      }
      .el-radio-button.is-active, .el-radio-button.is-focus, .el-radio-button:hover {
        .el-radio-button__inner {
          background: #fff;
          color: #128bed;
          transition: none;
          &::before {
            position: absolute;
            content: '';
            display: inline-block;
            width:0;
            height: 0;
            border-top: 6px solid #fff;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            left: 50%;
            margin-left: -6px;
            bottom: -6px;
          }
        }
      }
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
      background: #4d59e8;
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
    padding-bottom: 20px;
    .container {
      padding-left: 108px;
    }
    li {
      width: 290px;
      padding: 25px 10px 25px 15px;
      transition: background-color 0.2s;
      cursor: pointer;
      text-align: left;
      .nav-text-title {
        color: #3b426b;
        font-size: 16px;
        top: 2px;
        position: relative;
        transition: top 0.2s;
      }
      [class^="nav-icon-"] {
        margin-right: 10px;
      }
      p {
        opacity: 0;
        transition: opacity 0.2s;
      }
    }
    li.z {
      width: 230px;
    }
    li:hover {
      background-color: #f3f9fe;
      .nav-text-title {
        color: #128bed;
        font-weight: 600;
        top: -8px;
      }
      p {
        opacity: 1;
      }
    }
    .nav-text {
      display: inline-block;
      text-align: left;
    }
  }
}
.banner-container {
  background: #fff;
  padding-bottom: 40px;
  img {
    width: 100%;
    height: auto;
  }
  .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: rgba(0,0,0,0.2);
    opacity: 1;
  }
  .is-active button {
    background: rgba(200, 200, 200, 0.2);
  }
}
.match-item {
  em {
    font-style: normal;
    font-weight: 700;
    color: #fd485e;
  }
}
</style>
