import express from 'express'
import path from 'path'

const app: express.Express = express()
const router: express.Router = express.Router()

app.use(express.static(path.join(__dirname, "public"), {maxAge: 31557600000}));

app.use("/", router)

router.get('/api/test', (req:express.Request, res:express.Response) => {
  res.send("HelloWorld")
})

// 3000番ポートでAPIサーバ起動
app.listen(3000,()=>{ console.log('Listening on port 3000...') })