import { ResponseExtensions } from "../../gql/extensions.types";
import { Game } from "../../gql/game.types";

export interface TopGamesQueryResponse extends ResponseExtensions {
  data: {
    games: {
      edges: TopGamesQueryEdge[];
      pageInfo: {
        hasNextPage: boolean
      };
    }
  };
}

export type TopGamesQueryEdge = {
  cursor: string;
  trackingID: string;
  node: Game;
}