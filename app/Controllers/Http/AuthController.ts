// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import user from 'App/Models/User'
import RegisterUserValidator from "../../Validators/RegisterUserValidator";

export default class AuthController {
    public async register({request}:HttpContextContract){
        const data = await request.validate (RegisterUserValidator)
        const user = await User.create(data)
        return user
    }
}
