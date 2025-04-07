"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "./ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"
import FormField from "./FormField"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    username: z.string().min(2).max(50),
})

const authFormSchema=(type:FormType)=>{
    return z.object({
        name: type==="sign-up"? z.string().min(3): z.string().optional(),
        email: z.string().email(),
        password:z.string().min(3),
    })
}

const AuthForm = ({type} : {type: FormType}) => {
    const router=useRouter()
    const formSchema= authFormSchema(type)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email:"",
            password:"",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        try{
            if(type==="sign-up"){
                toast.success('Account Created Successfully. Please Sign In')
                router.push("./sign-in")
            }
            else{
                toast.success('Sign in successfully.');
                router.push('/')
            }

        }
        catch(error){
            console.log(error);
            toast.error(`There was an error: ${error}`)
        }
    }
    const isSignIN = type === 'sign-in';
    return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        height={32}
                        width={38}
                    />
                    <h2 className="text-primary-100">PrepWise</h2>
                </div>
                <h3>Practice Job Interviews with AI</h3>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                        {!isSignIN && (
                            <FormField 
                            control={form.control} 
                            name="name" 
                            label="Name" 
                            placeholder="Your Name"/>
                        )}
                        <FormField 
                            control={form.control} 
                            name="email" 
                            label="Email" 
                            placeholder="Your Email Address"
                            type="email"
                            />
                        <FormField 
                            control={form.control} 
                            name="password" 
                            label="Password" 
                            placeholder="Enter Your Password"
                            type="password"
                            />
                        <Button className="btn" type="submit">{isSignIN ? 'Sign In' : "Create an Account"}</Button>
                    </form>
                </Form>
                <p>
                    {isSignIN? 'No account yet?' : 'Have an account already?'}
                    <Link href={!isSignIN? '/sign-in': '/sign-up'} className= "font-bold text-user-primary ml-1">
                    {!isSignIN ? "Sign In":"Sign Up"}
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default AuthForm