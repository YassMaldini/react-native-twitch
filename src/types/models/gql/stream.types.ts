import { FreeformTag, Tag } from "./tag.types"
import { User } from "./user.types"

export type Stream = {
  __typename: "Stream",
  streamBroadcaster: User,
  id: string,
  averageFPS: number,
  streamDate: string,
  game: {
    id: string,
    name: string,
    displayName?: string,
    tags?: {
      tagName: string
    }[]
  },
  height: number,
  previewImageURLSmall: string,
  previewImageURLMedium: string,
  previewImageURLLarge: string,
  previewImageURLTemplate: string,
  restrictionType: null,
  restrictionOptions: [],
  self: {
    canWatch: boolean
  },
  streamTitle: string,
  type: string,
  streamViewCount: number,
  streamTags: Tag[],
  isEncrypted: boolean,
  broadcasterSoftware: string,
  freeformTags: FreeformTag[]
}

export interface PlaybackAccessToken {
  __typename: "PlaybackAccessToken",
  signature: string,
  value: string
}

export type StreamConnection = {
  __typename: "StreamConnection",
  edges: StreamConnectionEdge[];
  pageInfo: {
    hasNextPage: boolean
  };
}

export type StreamConnectionEdge = {
  cursor: string;
  trackingID: string;
  node: Stream;
}