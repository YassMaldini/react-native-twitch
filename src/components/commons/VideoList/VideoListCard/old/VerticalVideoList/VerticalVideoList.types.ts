import { Video } from "../../../../../../types/models/gql/video.types";

export interface VerticalVideoListProps {
  title?: string;
  listTitle: string;
  videosList?: Array<
    {
      node: Video;
    }
  >;
}