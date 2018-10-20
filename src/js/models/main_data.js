
//第一个轮播图  和  banner 数据
const main_swiper = () => {
    return $.ajax({
        url : '/api/restapi/shopping/openapi/entries?latitude=47.352424&longitude=123.931074&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5',
        type : 'get',
        success : res => {
            return res;
        }
    })
}

//第二个轮播图
const main_two_swiper = () => {
    return $.ajax({ 
        url : '/api/restapi/shopping/v2/banners?consumer=1&type=1&latitude=47.352424&longitude=123.931074',
        type : 'get',
        success : res => {
            return res;
        }
    })
}

//商家列表  https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=47.352424&longitude=123.931074&offset=8&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=7f96ecea64244bbb8150e686d2f2cb47&terminal=h5
const main_shoplist = () => {
    return $.ajax({
        url : '/api/restapi/shopping/v3/restaurants?latitude=47.352424&longitude=123.931074&offset=8&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=7f96ecea64244bbb8150e686d2f2cb47&terminal=h5',
        type : 'get',
        success : res => {
            return res;
        }
    })
}

export default {
    main_swiper,
    main_two_swiper,
    main_shoplist
};