/* jshint esversion: 8 */

import { first } from './modules/first';
import { userService } from './modules/userService';

const userService = new UserService();

first(userService);
