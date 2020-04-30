require('body-parser')
const koaRouter = require('koa-router')
const user = require('./userData.json')
const page = require('./pageData.json')
const material = require('./material.json')
const menus = require('./menu.json')

const router = koaRouter()

router.get('/api/user/login', async(ctx, next) => {
    let result = {
        code: 0,
        msg: '成功',
        data: user
    }
    ctx.cookies.set('ycyao','lll',{ httpOnly: false })
    ctx.body = result
})

router.get('/api/user/getMenus', async(ctx, next) => {
    let result = {
        code: 0,
        msg: '成功',
        data: menus
    }
    ctx.body = result
})

router.get('/charge/list', async(ctx, next) => {
    let result = {
        code: 0,
        msg: '成功',
        data: page
    }
    ctx.body = result
})

router.get('/charge/purchase/:id', async(ctx, next) => {
    let result = {
        code: 0,
        msg: '成功',
        data: material
    }
    ctx.body = result
})

module.exports = router
