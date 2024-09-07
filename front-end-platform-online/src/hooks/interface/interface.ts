import { ServerUser } from "../../mappers/serverUserToModel.mapper";

export interface ResponseGetUser {
    status  : string;
    data    : {  user: ServerUser, token: string };
}