import Koa from 'koa'
import koaStatic from 'koa-static'
import bodyParser from 'koa-bodyparser'
import baseRouter from './controller/base'
import path from 'path'

const app = new Koa()
app.use(bodyParser())
app.use(koaStatic(path.join(__dirname,'/public')))

app.use(baseRouter.routes())

app.listen(3000)
