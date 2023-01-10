import { ResponseExtensions } from "../../gql/extensions.types";
import { VideoConnection } from "../../gql/video.types";

export interface ChannelVodsQueryResponse extends ResponseExtensions {
  data: {
    user: {
      videos: VideoConnection
    }
  }
}

export interface ChannelVodsQueryProps {
  channelId: string;
  types?: ChannelVodsQueryTypes[];
  count?: number;
}

export enum ChannelVodsQueryTypes {
  Archive = "ARCHIVE",
  Highlight = "HIGHLIGHT",
  PastPremiere = "PAST_PREMIERE",
  Upload = "UPLOAD"
}