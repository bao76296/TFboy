
const main_swiper =  () => {
    return  $.ajax({
        url : "/api/restapi/shopping/openapi/entries?latitude=47.352424&longitude=123.931074&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5",
        type:"get",
        success : res => {
            return res ;
        }
    })
}


module.exports = {
    main_swiper
}