"use server"

import { signIn } from "@/auth"
import { getYupErrors } from "@/utils/form-validation"
import { AuthError } from "next-auth"
import * as Yup from 'yup'


const FormSchema= Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required")
})

export const signInWithCredentials= async (prevState, formData)=>{
    const fields={
        username: formData.get("username"),
       password: formData.get("password")
    }

    try {
        FormSchema.validateSync(fields,{abortEarly: false})
        await signIn("crendentials",fields)
    } catch (error) {
        if(error instanceof AuthError){
            return{
                message: "Authentication was failed"
            }
        }
        else if (error instanceof Yup.ValidationError) {
            return getYupErrors(error.inner)
        }
        else{
           throw error
            
        }
    }
    

}

export const signInWithSocial= async (formData)=>{

    const provider =formData.get("provider");



    try {
       await signIn(provider)
    } catch (error) {
        if(error instanceof AuthError){
            return{
                message: "Authentication was failed"
            }
        }
        else{
           throw error
            
        }
    }
}

