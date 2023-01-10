import { ResponseExtensions } from "../../gql/extensions.types";
import { Game } from "../../gql/game.types";

export interface FollowGameMutationRepsonse extends ResponseExtensions {
  data: {
    followGame: {
      game: Game
    }
  },
  errors?: FollowGameError[]
}

export type FollowGameError = {
  message: string;
}