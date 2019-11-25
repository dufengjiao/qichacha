module.exports = function (app) {
  const OK = 200;
  app.get('/api/searchEntList', (req, res) => {
    res.json({
      code: OK,
      data: [{
          name: '企查查集团',
          id: '1',
          nameH: '<em>企查查</em>集团'
        },
        {
          name: '企查查分公司',
          id: '2',
          nameH: '<em>企查查</em>分公司'
        }
      ]
    })
  })
  app.get('/api/getHotList', (req, res) => {
    res.json({
      code: OK,
      data: {
        company: [
          { name: "a", title: "罗永浩限制消费", href: "http://www.baidu.com" },
          { name: "b", title: "比特大陆法人变更", href: "http://www.baidu.com" },
          { name: "c", title: "拉夏贝尔日关13店", href: "http://www.baidu.com" },
          { name: "d", title: "腾讯恢复NBA直播", href: "http://www.baidu.com" }
        ],
        boss: [
          { name: "2a", title: " 庞青年", href: "http://www.baidu.com", img: 'https://co-image.qichacha.com/PersonImage/pc464dd4c2d1df467ac4fb6b35dd5a94.jpg' },
          { name: "2b", title: " 沈向洋", href: "http://www.baidu.com", img: 'https://co-image.qichacha.com/PersonImage/pc464dd4c2d1df467ac4fb6b35dd5a94.jpg' },
          { name: "2c", title: " 马云", href: "http://www.baidu.com", img: 'https://co-image.qichacha.com/PersonImage/pc464dd4c2d1df467ac4fb6b35dd5a94.jpg' },
          { name: "2d", title: " 蔡崇信", href: "http://www.baidu.com", img: 'https://co-image.qichacha.com/PersonImage/pc464dd4c2d1df467ac4fb6b35dd5a94.jpg' },
          { name: "2e", title: "  蒋凡", href: "http://www.baidu.com", img: 'https://co-image.qichacha.com/PersonImage/pc464dd4c2d1df467ac4fb6b35dd5a94.jpg' }
        ],
        risk: [
          { name: "3a", title: "蔚来汽车科技经营异常", href: "http://www.baidu.com" },
          { name: "3b", title: "百度起诉东方IC", href: "http://www.baidu.com" },
          { name: "3c", title: "戴维被股权冻结", href: "http://www.baidu.com" },
          { name: "3d", title: "熊猫直播被股权冻结", href: "http://www.baidu.com" }
        ],
        news: [
          { name: "4a", title: "东阿阿胶董事长辞职", href: "http://www.baidu.com" },
          { name: "4b", title: "京东状告商评委", href: "http://www.baidu.com" },
          { name: "4c", title: "山东金博会", href: "http://www.baidu.com" },
          { name: "4d", title: "山东金博会", href: "http://www.baidu.com" }
        ]
      }

    })
  })

}
