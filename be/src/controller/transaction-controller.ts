// import { Transaction } from '@prisma/client';
// import { NextFunction, Response } from "express";
// import { UserRequest } from "../type/user-request";
// import { TransactionService } from "../service/transaction-service";
// import { CreateTransactionRequest } from "../model/transaction_model";

// export class TransactionController {
//     static async createTransaction (req: UserRequest, res: Response, next: NextFunction) {
//         try {
//             const request: CreateTransactionRequest = req.body as CreateTransactionRequest;

//             const response = await TransactionService.createTransaction(req.user!, request);

//             res.status(200).json({
//                 data: response
//             })
//         } catch (e) {
//             next(e)
//         }
//     }
// }