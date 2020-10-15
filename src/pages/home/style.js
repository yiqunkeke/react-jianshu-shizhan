import styled from 'styled-components'

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`
export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float:left;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`
export const HomeRight = styled.div`
    width: 280px;
    float:right;
`

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    height: 32px;
    line-height:32px;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    color: #000;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    .topic-pic {
        display: block;
        float: left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        width: 120px;
        height: 100px;
        display: block;
        float: right;
        border-radius: 10px;
    }
`

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        font-size:18px;
        line-height: 27px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        font-size: 13px;
        line-height: 18px;
        color: #999;
    }
`

export const RecommendWrapper = styled.div`
    padding-top:20px;
    margin-bottom: 30px;
    .pic {
        width: 280px;
        height: auto;
        margin-top: 10px;
        display: block;
    }
`

export const WritterWrapper = styled.div`

`
export const WritterTitle = styled.div`
    font-size:14px;
    color: #969696;
`

export const WritterSwitch = styled.p`
    float: right;
    cursor: pointer;
    .iconfont {
        display: block; //只有block才能进行transform
        float: left;
        font-size: 13px;
        margin-right: 3px;
        transition: all .3s ease-in;
        transform-origin: center center;
    }
`
export const WritterItem = styled.div`
    margin-top: 15px;
    .pic {
        display: block;
        float: left;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        border:1px solid #ddd;
        margin-right: 10px;
    }
`
export const WritterFocus = styled.span`
    display: block;
    cursor: pointer;
    float: right;
    color: #42c02e;
    font-size: 13px;
    margin-top: 10px;
    text-decoration: none;
`

export const WriiterText = styled.div`
    padding-top: 10px;
    .title {
        font-size: 14px;
    }
    .desc {
        font-size: 12px;
        margin-top: 8px;
        color: #969696;
    }
`
export const WritterAll = styled.button`
    margin-top:20px;
    outline: none;
    color: #787878;
    font-size: 13px;
    width: 100%;
    border: 1px solid #dcdcdc;
    padding: 7px 7px 7px 12px;
    border-radius: 4px;
    background-color: #f7f7f7;
`
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    border-radius: 20px;
    margin: 30px auto;
    color: #fff;
    cursor: pointer;
    text-align: center;
`
export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    font-size:12px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    cursor: pointer;
`