import { Clip } from "../../gql/clip.types"
import { ResponseExtensions } from "../../gql/extensions.types"
import { Game } from "../../gql/game.types"
import { Stream } from "../../gql/stream.types"
import { User } from "../../gql/user.types"
import { Video } from "../../gql/video.types"

export interface ProfileHomeQueryResponse extends ResponseExtensions {
  data: {
    user: ProfileHomeUser
  },
}

export interface ProfileHomeUser extends Partial<User> {
  channel: {
    trailer: {
      video: Video | null
    },
    home: {
      shelves: {
        categoryShelf: {
          edges: {
            node: Game
          }[]
        },
        streamerShelf: {
          type: string,
          edges: {
            node: Omit<User, 'stream'> & {
              stream: {
                viewersCount: number
              } | null
            }
          }[]
        }
      }
    }
  },
  recentHighlight: {
    edges: {
      node: Video
    }[]
  },
  pastBroadcasts: {
    edges: {
      node: Video
    }[]
  },
  clips: {
    edges: {
      node: Clip
    }[]
  },
  videoShelves: {
    edges: {
      node: {
        title: string,
        items: Video[]
      }
    }[]
  },
  primaryTeam: {
    displayName: string
  },
  stream: Stream | null
}