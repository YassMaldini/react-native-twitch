import { PageInfo } from "./page.types"
import { Tag } from "./tag.types"
import { User } from "./user.types"

export type Video = {
  __typename: "Video",
  id: string,
  broadcastType: string,
  vodDate: string,
  owner: User,
  game: {
    id: string,
    name: string,
    displayName: string,
    tags: Tag[]
  } | null,
  self: {
    isRestricted: false,
    viewingHistory: {
      position: number | null
      updatedAt?: string | null
    }
  },
  lengthSeconds: number,
  previewThumbnailURLMedium: string,
  previewThumbnailURLLarge: string,
  publishedAt: string,
  vodTitle: string,
  vodViewCount: number,
  contentTags: Tag[],
  resourceRestriction: null
}

export type VideoEdge = {
  node: Video;
}

export type ViewedVideosConnection = {
  edges: ViewedVideosEdge[];
}

export type ViewedVideosEdge = {
  history: VideoViewingHistory;
  node: Video;
}

export type VideoViewingHistory = {
  __typename: "VideoViewingHistory";
  position: number;
  updatedAt: string;
}

export type VideoConnection = {
  __typename: "VideoConnection";
  edges: VideoConnectionEdge[];
  pageInfo: PageInfo;
}

export type VideoConnectionEdge = {
  node: Video;
  cursor: string;
}