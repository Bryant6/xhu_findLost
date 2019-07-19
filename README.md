# xhu_findLost
### 接口文档

#### 动态

1. 接口名字：findOwner/findAll
   + 概述：按时间先后排序获取全校发布信息
   + 传入参数：无
   + 返回数据：全校的发布信息列表，每一个元素有goodsId(ID),goodsName(名字),goodsPostscrit（附言）,goodsPubtime（发布时间）,goodsContact（联系方式）,goodsPhoto（照片地址）
   + 返回格式：json
2. 接口名字：publish/findGoodsSubmit
   + 概述：将失物寻找的发布信息上传到后台，并录入数据库
   + 传入参数：
     + userId：上传者的id
     + userName：上传者的名字
     + goodsBigkind ：物品大类
     + goodsSmallkind ：物品小类
     + goodsPostscrit ：发布附言
     + goodsContact ：联系方式
     + goodsContact_way ：联系方式  qq weixn phone
   + 返回数据：“yes”(成功上传)   “no” (失败上传)
   + 返回类型：String
