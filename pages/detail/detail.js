Page({
  data:{
    article:{}
  },
  onLoad:function(options){
    var that = this
    wx.request({
        url: 'http://news-at.zhihu.com/api/4/news/' + options.id,    
        success: function (res){
            that.setData({
                article: res.data
            })
            
            wx.setNavigationBarTitle({
                title: that.data.article.title
            })
            console.log(that.data.article)
        }
    })
  },
  onReady:function(){
  },
  onShow:function(){
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})