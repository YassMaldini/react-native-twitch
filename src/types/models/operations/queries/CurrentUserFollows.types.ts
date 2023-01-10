import { ResponseExtensions } from "../gql/extensions.types"

export interface CurrentUserFollowsResponse extends ResponseExtensions {
  data: {
    currentUser: {
      follows: {
        pageInfo: {
          hasNextPage: boolean
        },
        edges: CurrentUserFollowsEdges[]
      },
      followedVideos: {
        edges: CurrentUserFollowedVideosEdges[]
      }
    }
  }
}

export interface CurrentUserFollowsEdges {
  cursor: string,
  node: {
    id: string,
    login: string,
    displayName: string,
    followers: {
      totalCount: number
    },
    profileImageURL: string,
    stream: any | null,
    lastBroadcast: {
      startedAt: string
    }
  },
  notificationSettings: {
    isEnabled: boolean
  }
}

export interface CurrentUserFollowedVideosEdges {
  node: {
    publishedAt: string,
    owner: {
      id: string,
      displayName: string
    },
    self: {
      viewingHistory: {
        position: any | null,
        updatedAt: any | null
      }
    }
  }
}