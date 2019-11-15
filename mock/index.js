module.exports = function (app) {
  app.get('/api/searchEntList', (req, res) => {
    res.json({
      code: 200,
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
}
