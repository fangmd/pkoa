import { IsNotEmpty } from 'class-validator'

export class IdValid {
  @IsNotEmpty()
  id?: string
}
