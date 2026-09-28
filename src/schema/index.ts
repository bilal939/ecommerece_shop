import * as z from "zod";

export const LoginSchema = z.object({
    email: z
        .string()
        .trim()
        .min(1, { message: "Email or phone number is required" })
        .refine(
            (value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
                return (
                    emailRegex.test(value)
                );
            },
            {
                message:
                    "Please enter a valid email address",
            },
        ),
    password: z.string().trim().min(1, { message: "Password is required" }),
});


export const RegisterSchema = z.object({
    username: z
        .string()
        .min(1, "Username is required")
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username must not exceed 20 characters"),

    email: z
        .string()
        .trim()
        .min(1, { message: "Email or phone number is required" })
        .refine(
            (value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
                return (
                    emailRegex.test(value)
                );
            },
            {
                message:
                    "Please enter a valid email address",
            },
        ),

    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters"),
});