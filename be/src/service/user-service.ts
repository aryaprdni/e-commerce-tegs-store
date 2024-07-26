import { User } from "@prisma/client";
import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response.error";
import { CreateUserRequest, LoginUserRequest, UpdateUserRequest, UserResponse, toUserResponse } from "../model/user_model";
import { UserValidation } from "../validation/user-validation";
import { Validation } from "../validation/validation";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UserService {
    static async register(request: CreateUserRequest) : Promise<UserResponse> {
        const registerRequest = Validation.validate(UserValidation.REGISTER, request);

        const totalUserWithSameEmail = await prismaClient.user.count({
            where: {
                email: registerRequest.email
            }
        });

        if(totalUserWithSameEmail != 0) {
            throw new ResponseError(400, "Email already exists");
        }

        const verification = await prismaClient.emailVerification.findUnique({
            where: {
                email: registerRequest.email
            }
        });

        if (!verification || !verification.verified) {
            throw new ResponseError(400, "Please verify your email");
        }

        registerRequest.password = await bcrypt.hash(registerRequest.password, 10);

        const user = await prismaClient.user.create({
            data: registerRequest
        });

        return toUserResponse(user);
    }

    static async login(request: LoginUserRequest): Promise<UserResponse> {
    const loginRequest = Validation.validate(UserValidation.LOGIN, request);

    let user = await prismaClient.user.findUnique({
        where: {
            email: loginRequest.email
        }
    });

    if (!user) {
        throw new ResponseError(401, "Email or password is wrong");
    }

    const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);
    if (!isPasswordValid) {
        throw new ResponseError(401, "Email or password is wrong");
    }

    const obj = {
        email: user.email
    }

    const token = jwt.sign({ obj }, "secret", { expiresIn: "1h" });

    user = await prismaClient.user.update({
        where: {
            email: loginRequest.email
        },
        data: {
            token: token
        }
    });

    const response = toUserResponse(user);
    response.token = user.token!;
    return response;
    }

    static async get(user: User): Promise<UserResponse> {
        return toUserResponse(user);
    }
    static async update(user: User, request: UpdateUserRequest): Promise<UserResponse> {
        const updateRequest = Validation.validate(UserValidation.UPDATE, request);

        if(updateRequest.full_name) {
            user.full_name = updateRequest.full_name;
        }

        if(updateRequest.username) {
            user.username = updateRequest.username;
        }

        if (updateRequest.password) {
            user.password = await bcrypt.hash(updateRequest.password, 10);
        }

        if (updateRequest.phone_number) {
            user.phone_number = updateRequest.phone_number;
        }

        if (updateRequest.photo_profile) {
            user.photo_profile = updateRequest.photo_profile;
        }

        if (updateRequest.street) {
            user.street = updateRequest.street;
        }

        if (updateRequest.city) {
            user.city = updateRequest.city;
        }

        if (updateRequest.country) {
            user.country = updateRequest.country;
        }

        if (updateRequest.postal_code) {
            user.postal_code = updateRequest.postal_code;
        }

        const result = await prismaClient.user.update({
            where: {
                email: user.email
            },
            data: user
        });

        return toUserResponse(result);
    }

    static async logout(user: User): Promise<UserResponse> {
        const result = await prismaClient.user.update({
            where: {
                email: user.email
            },
            data: {
                token: null
            }
        });
        return toUserResponse(result);
    }
}