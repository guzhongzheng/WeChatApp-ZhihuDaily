//index.js
//获取应用实例
var app = getApp()
var utils = require('../../utils/util.js')

const latestArticlesUrl='http://news-at.zhihu.com/api/4/news/latest';

function getLatestArticles (onSuccess){
  wx.request({
    url: latestArticlesUrl,
    success: onSuccess
  });
}

Page({
  data:{
    articles:[]
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    const that = this;
    getLatestArticles(function(res){
      that.setData({
        articles: res.data.stories
      })
      console.log(res.data.stories)
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})