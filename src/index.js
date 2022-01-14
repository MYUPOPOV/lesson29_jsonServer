/* jshint esversion: 8 */

import { render } from './modules/render';
import { UserService } from './modules/userService';

const userService = new UserService();

window.userService = new UserService();

render(userService.users);
