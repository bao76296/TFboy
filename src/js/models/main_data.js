

const main_swiper = () => {
    return $.ajax({
        url : '/api/restapi/shopping/openapi/entries?latitude=47.352424&longitude=123.931074&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5',
        type : 'get',
        success : res => {
            return res;
        }
    })
}
const main_two_swiper = () => {
    return $.ajax({
        url : '/api/restapi/shopping/v2/banners?consumer=1&type=1&latitude=47.352424&longitude=123.931074',
        type : 'get',
        success : res => {
            return res;
        }
    })
}
export default {
    main_swiper,
    main_two_swiper
};