// server/routes/api/users/index.get.ts
import { defineEventHandler, getQuery } from 'h3';
import { userService } from './api/users/_ctx';
import { toHttp } from './api/users/_errors';
 
 

export default defineEventHandler(async (event) => {
   return {
     message: 'Hello World'
   };
});