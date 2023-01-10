import { Game } from "./game.types"
import { Stream } from "./stream.types"
import { Tag } from "./tag.types"
import { User } from "./user.types"
import { Video } from "./video.types"

export type Collection = {
  __typename: "Collection",
  id: string,
  description: string,
  lengthSeconds: number,
  thumbnailURL: string,
  title: string,
  updatedAt: string,
  viewCount: number,
  items: {
    totalCount: number,
    pageInfo: {
      hasNextPage: boolean
    },
    edges: CollectionEdge[]
  },
  owner: User
}

export type CollectionEdge = {
  cursor: string,
  node: Video
}