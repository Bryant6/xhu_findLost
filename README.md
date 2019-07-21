# xhu_findLost
### 接口文档

#### 动态

##### 1. 接口名字：findOwner/findAll
   + 概述：按时间先后排序获取全校发布信息
   + 传入参数：无
   + 返回数据：全校的发布信息列表，每一个元素有goodsId(ID),goodsName(名字),goodsPostscrit（附言）,goodsPubtime（发布时间）,goodsContact（联系方式）,goodsPhoto（照片地址）
   + 返回格式：json
##### 2. 接口名字：publish/findGoodsSubmit
   + 概述：将发布信息上传到后台，并录入数据库（有图片）
   + 传入参数和数据类型：
     + userId：上传者的id（String）
     + userName：上传者的名字（String）
     + goodsBigkind ：物品大类（String）
     + goodsSmallkind ：物品小类（String）
     + goodsPostscrit ：发布附言（String）
     + goodsContact ：联系方式（String）
     + goodsContact_way ：联系方式  qq weixn phone（String）
     + file：一张图片文件（File）
     + publishCategory ：发布种类？失物寻找：失物归还（String）
   + 返回数据：“yes”(成功上传)   “no” (失败上传)
   + 返回类型：String
##### 3. 接口名字：publish/findGoodsSubmitNoImg
   + 概述：将发布信息上传到后台，并录入数据库（无图片）
   + 传入的参数和数据类型：
     - userId：上传者的id（String）
     - userName：上传者的名字（String）
     - goodsBigkind ：物品大类（String）
     - goodsSmallkind ：物品小类（String）
     - goodsPostscrit ：发布附言（String）
     - goodsContact ：联系方式（String）
     - goodsContact_way ：联系方式  qq weixn phone（String）
     - publishCategory ：发布种类？失物寻找：失物归还（String）
   + 返回数据：“yes”(成功上传)   “no” (失败上传)
   + 返回类型：String
##### 4. 接口名字：personal/feedback
   + 概述：将用户反馈的信息上传到后台（有图片）
   + 传入的参数和数据类型：
      - suggest：用户建议（String）
      - contact：用户联系方式（String）
      - file：一张图片文件（File）
   + 返回数据：“yes”(成功上传)   “no” (失败上传)
   + 返回类型：String

##### 5.接口名字：personal/feedbackNoImg

+ 将用户反馈的信息上传到后台（无图片）
+ 传入的参数和数据类型：
  - suggest：用户建议（String）
  - contact：用户联系方式（String）
+ 返回数据：“yes”(成功上传)   “no” (失败上传)
+ 返回类型：String

 