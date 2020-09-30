import { IsString, Length, max, validate } from "class-validator";
import { CreateUser } from "../src/validators/user";

let x = new CreateUser();
x.username = "s1212";
validate(x, { forbidUnknownValues: true }).then(console.log);

const strVal: unknown = "name";
let l = (strVal as string).length;

const literalA = "helllo";
let strA = "helllo";
