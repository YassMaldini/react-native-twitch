import { ResponseExtensions } from "../../gql/extensions.types";
import { Game } from "../../gql/game.types";

export interface UnfollowGameMutationRepsonse extends ResponseExtensions {
  data: {
    followGame: {
      game: Game
    }
  },
  errors?: UnfollowGameError[]
}

export type UnfollowGameError = {
  message: string;
}