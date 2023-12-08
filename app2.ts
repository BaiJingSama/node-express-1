import express from 'express'
const app = express()
const port = 4000

app.get('/', (request, response) => {
  response.send('宋二娃123')
  // 发送响应
})

app.listen(port, () => {
  console.log(`宋文倩正在竖着耳朵监听 ${port} 端口`)
})