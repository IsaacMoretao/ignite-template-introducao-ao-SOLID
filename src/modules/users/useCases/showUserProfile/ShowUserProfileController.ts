import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const userId = this.showUserProfileUseCase.execute({ user_id });

      return response.json(userId);
    } catch (err) {
      return response.status(404).json({ error: err });
    }
  }
}

export { ShowUserProfileController };
