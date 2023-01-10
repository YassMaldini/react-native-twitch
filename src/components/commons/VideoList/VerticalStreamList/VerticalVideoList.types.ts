import { Stream } from "../../../../types/models/gql/stream.types";
import { FollowedContentFirstPageQueryResponse } from "../../../../types/models/operations/FollowedContentFirstPageQuery.types";
import { RecommendedStreamsForUserResponse } from "../../../../types/models/operations/RecommendedStreamsForUser.types";

export interface VerticalVideoListProps {
  title?: string;
  listTitle: string;
  streamsList?: Array<
    {
      node: Stream,
      trackingID?: string
    } |
    {
      node: {
        stream: Stream
      },
      trackingID?: string
    }
  >;
}