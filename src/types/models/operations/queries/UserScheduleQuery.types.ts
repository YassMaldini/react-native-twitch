import { ResponseExtensions } from "../../gql/extensions.types";
import { PageInfo } from "../../gql/page.types";
import { ScheduleSegment } from "../../gql/segment.types";
import { Stream } from "../../gql/stream.types";

export interface UserScheduleQueryResponse extends ResponseExtensions {
  data: {
    user: {
      channel: {
        schedule: {
          id: string,
          interruption: null,
          nextSegment: ScheduleSegment,
          segmentList: {
            pageInfo: PageInfo,
            edges: UserScheduleSegmentListEdge[]
          }
        }
      },
      stream: Stream | null
    }
  }
}

export type UserScheduleSegmentListEdge = {
  node: ScheduleSegment;
  cursor: string;
}