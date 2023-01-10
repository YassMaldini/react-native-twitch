import { User } from "../gql/user.types";

export interface ResumeWatchingVideosQueryResponse {
  data: {
    currentUser: {
      viewedVideos: User['viewedVideos'];
    };
  }
}