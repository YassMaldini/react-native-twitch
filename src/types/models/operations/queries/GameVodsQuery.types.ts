import { ResponseExtensions } from "../../gql/extensions.types";
import { VideoConnection } from "../../gql/video.types";

export interface GameVodsQueryResponse extends ResponseExtensions {
  data: {
    game: {
      videos: VideoConnection
    }
  }
}

export interface GameVodsQueryProps {
  name: string;
  types?: GameVodsQueryTypes[];
  count?: number;
}

export enum GameVodsQueryTypes {
  Archive = "ARCHIVE",
  Highlight = "HIGHLIGHT",
  PastPremiere = "PAST_PREMIERE",
  Upload = "UPLOAD"
}