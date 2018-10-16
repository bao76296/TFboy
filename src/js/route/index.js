

import rotes from './route';

class Route {
    constructor({initial}){
        this.routes = rotes;
        this.initial = initial || '#/index'
    }
    init(){
        this.initialLoacl();
        this.listenHashChange();
    }

    initialLoacl(){
        if(!location.hash){
            location.hash = this.initial;
            console.log('ok')
        }
    }

    listenHashChange(){
        window.addEventListener('load',this.refresh.bind(this));
        window.addEventListener('hashchange',this.refresh.bind(this))
    }
    
    refresh(){
        console.log()
        let hash = location.hash; //?
       
        if(!this.routes[hash]){
            location.hash = this.initial;
            console.log(location.hash)
            return ;
        }
        this.routes[hash].render();
        this.switchActive();
    }

    switchActive(){
        $('.nav-link').each(function(item){
            //底部转化,
            if ( $(this).attr('path') === location.hash ) {
                $(this).addClass('active');
            }else {
                $(this).removeClass('active');
            }
        })
    }
}
export default Route;