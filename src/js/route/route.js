import main_controller from '../controller/main_controller';
import find_controller from '../controller/find_controller';
import order_controller from '../controller/order_controller';
import mine_controller from '../controller/mine_controller';
// import login_controller from '../controller/login_controller';

const routes = {
    '#/index' : main_controller,
    '#/find' : find_controller,
    '#/order' : order_controller,
    '#/mine' : mine_controller,
    // '#/login' : login_controller
}

export default routes;