import { ResponseExtensions } from "../../gql/extensions.types"
import { Game } from "../../gql/game.types"
import { PageInfo } from "../../gql/page.types"
import { User } from "../../gql/user.types"
import { Video } from "../../gql/video.types"

export interface SearchForQueryResponse extends ResponseExtensions {
  data: {
    searchFor: {
      games: {
        cursor: string
        items: Game[]
        pageInfo: PageInfo
        score: number
      }
      videos: {
        cursor: string
        items: Video[]
        pageInfo: PageInfo
        score: number
      }
      channels: {
        cursor: string
        items: User[]
        pageInfo: PageInfo
        score: number
      }
      channelsWithTag: {
        cursor: string
        items: User[]
        pageInfo: PageInfo
        score: number
      }
      relatedLiveChannels: {
        items: User[]
        score: number
      }
    }
  }
}