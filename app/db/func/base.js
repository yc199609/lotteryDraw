import Base from '../model/base'
import { reject } from 'any-promise'

export const insert = function(obj){
  var base = new Base({
    phone: obj.phone,
    isdel: false,
    code: obj.code
  })
  return new Promise((resolve,reject)=>{
    base.save((err,res)=>{
      if(err) {
        resolve({
          code: err.code,
          msg: err.errmsg
        })
      }else{
        resolve({
          code:0,
          msg:"成功",
          data:res
        })
      }
    })
  })
}

export const search = function(obj){
  var where = {
    phone: obj.phone,
    isdel: false
  }
  return new Promise((resolve,reject)=>{
    Base.findOne(where,(err,res)=>{
      if(err) {
        resolve({
          code: err.code,
          msg: err.errmsg,
        })
      }else if (!res) {
        resolve({
          code: 404,
          msg: '未找到',
          data: res
        })
      } else {
        resolve({
          code:0,
          msg:'成功',
          data:res
        })
      }
    })
  })
}