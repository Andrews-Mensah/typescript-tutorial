import {object, string, TypeOf} from 'zod';

export const createUserSchema = object({
    body: object({
        name:string({
            required_error: "Please Enter a name"
        }),
        password: string({ 
            required_error: "Please enter password"
        }).min(8, "Password too short - it should be 8 characters or more"),
        confirmPassword: string({
            required_error: "Please enter your chosen password again"
        }),
        email: string({
            required_error: "Email is required"
        }).email("Please enter a valid email")
    }).refine((data)=> data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"]
    })
})


export type createUserInput = Omit<TypeOf<typeof createUserSchema>, "body.confirmPassword">;