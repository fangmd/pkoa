import { IsString, Length, max, validate } from "class-validator";
import { CreateUser } from "./validators/user";

let x = new CreateUser();
x.username = "s1212";
validate(x, { forbidUnknownValues: true }).then(console.log);
