import 'body-parser'
import koaRouter from 'koa-router'
import {insert, search } from '../db/func/base'


const router = koaRouter()

router.post('/api/base',async(ctx,next)=>{
  let find = await search(ctx.request.body)
  let result
  if(find.code === 404){
    result = await insert(ctx.request.body)
  }else if(find.code === 0){
    result = find
  }else{
    result = {
      code:500,
      msg:"服务器错误"
    }
  }
  ctx.body = result
})

export default router