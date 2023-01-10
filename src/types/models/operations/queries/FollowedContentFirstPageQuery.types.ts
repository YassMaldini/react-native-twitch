import { ResponseExtensions } from "../../gql/extensions.types"
import { Game } from "../../gql/game.types"
import { Stream } from "../../gql/stream.types"

export interface FollowedContentFirstPageQueryResponse extends ResponseExtensions {
  data: {
    currentUser: {
      followedGames: {
        nodes: Game[]
      },
      followedLiveUsers: {
        pageInfo: {
          hasNextPage: boolean
        },
        edges: {
          node: {
            stream: Stream
          }
        }[]
      }
    }
  }
}

