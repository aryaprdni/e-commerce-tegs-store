import { ZodType, z } from "zod";

export class UserValidation {
    static readonly VERIFYEMAIL: ZodType = z.object({
        email: z.string().min(3).max(100),
    })

    static readonly REGISTER : ZodType = z.object({
        email: z.string().min(3).max(100),
        full_name: z.string().min(1).max(100),
        password: z.string().min(1).max(100),
    });

    static readonly LOGIN : ZodType = z.object({
        email: z.string().min(3).max(100),
        password: z.string().min(1).max(100),
    });

    static readonly UPDATE : ZodType = z.object({
        username: z.string().min(1).max(100).optional(),
        fullname: z.string().min(1).max(100).optional(),
        password: z.string().min(1).max(100).optional(),
        phone_number: z.string().min(1).max(100).optional(),
        photo_profile: z.string().min(1).max(100).optional(),
        street: z.string().min(1).max(100).optional(),
        city: z.string().min(1).max(100).optional(),
        province: z.string().min(1).max(100).optional(),
        country: z.string().min(1).max(100).optional(),
        postal_code: z.string().min(1).max(100).optional(),
    });
}