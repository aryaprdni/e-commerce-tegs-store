import { User } from "@prisma/client";

export type UserResponse = {
    username: string | null;
    full_name: string | null;
    email: string;
    phone_number: number | null;
    photo_profile: string | null;
    street: string | null;
    city: string | null;
    province: string | null;
    country: string | null;
    postal_code: string | null;
    token? : string;
}

export type CreateUserRequest = {
    email: string;
    username : string;
    password : string;
}

export type LoginUserRequest = {
    email: string;
    password: string;
}

export type UpdateUserRequest = {
    username?: string;
    full_name?: string;
    password?: string;
    phone_number?: number;
    photo_profile?: string;
    street?: string;
    city?: string;
    province?: string;
    country?: string;
    postal_code?: string;
}

export function toUserResponse(user: User): UserResponse {
    return {
        username: user.username,
        full_name: user.full_name,
        email: user.email,
        phone_number: user.phone_number,
        photo_profile: user.photo_profile,
        street: user.street,
        city: user.city,
        province: user.province,
        country: user.country,
        postal_code: user.postal_code,
    }
}