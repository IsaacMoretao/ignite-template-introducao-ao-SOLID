import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.list();

    if (!user) {
      throw new Error("User Not Exist");
    }

    const userId = this.usersRepository.findById(user_id);
    if (!userId.admin) {
      throw new Error("User Not Exist");
    }
    return user;
  }
}

export { ListAllUsersUseCase };
