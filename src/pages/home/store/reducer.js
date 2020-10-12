import { fromJS } from 'immutable'

const defaultState = fromJS({
   topicList: [
       {
           id: 1,
           title: '社会热点',
           imgUrl: 'https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
       },
       {
           id: 2,
           title: '手绘',
           imgUrl: 'https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
       }
   ],
   articleList: [
       {
           id: '1',
           title: '上海滩最后一位名媛，中年丧夫，入狱七年女儿自杀，背后的故事多唏嘘！',
           desc: '迄今为止，我写了很多令我敬佩的女性，但是的确，近代时期的女性比较少，并不是这段时间没有杰出的女性，而是因为她们的资料和图片都太难找了。 之前我就...',
           imgUrl: 'https://upload-images.jianshu.io/upload_images/301940-df783f52eeab5d79?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        },
       {
           id: '2',
           title: '44岁的极痛时刻：“过去7天，我经历了当妈后最狰狞的疼！”',
           desc: '作者 | 卢璐 来源 | 卢璐说 （公众号：lulu_blog) 今天是十月七日，在过去的七天里，我经历了我生命中非常非常艰难的一个周，度日如年...',
           imgUrl: 'https://upload-images.jianshu.io/upload_images/301940-7cb96e81a80dc7f7?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        }
   ],
   recommendImg: [
       {
           id: '1',
           imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
       },
       {
           id: '2',
           imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
       },
       {
           id: '3',
           imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
       },
       {
           id: '4',
           imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
       }
   ]
})

export default (state = defaultState, action) => {
    switch(action.type) {
        
        default:
            return state
    }
}