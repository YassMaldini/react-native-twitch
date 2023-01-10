import { FollowedContentFirstPageQueryResponse } from "../../../../types/models/operations/queries/FollowedContentFirstPageQuery.types";
import { RecommendedStreamsForUserResponse } from "../../../../types/models/operations/queries/RecommendedStreamsForUser.types";
import { ResumeWatchingVideosQueryResponse } from "../../../../types/models/operations/queries/ResumeWatchingVideosQuery.types";
import { graphqlApi } from "../../../../utils/api/api";
import { FollowedContentFirstPageQueryOperation } from "../../../../utils/api/operations/queries/FollowedContentFirstPageQuery";
import { RecommendedStreamsForUserOperation } from "../../../../utils/api/operations/queries/RecommendedStreamsForUser";
import { ResumeWatchingVideosQueryOperation } from "../../../../utils/api/operations/queries/ResumeWatchingVideosQuery";

export const HOME_INIT_QUERY_KEY = "HOME_INIT"
export const RESUME_WATCHING_VIDEOS_QUERY_KEY = "RESUME_WATCHING_VIDEOS"

export const HomeInitQuery = async () => {
  const response = await graphqlApi.post<(FollowedContentFirstPageQueryResponse | RecommendedStreamsForUserResponse)[]>(
    'https://gql.twitch.tv/gql',
    [
      FollowedContentFirstPageQueryOperation,
      RecommendedStreamsForUserOperation
    ]
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data as (FollowedContentFirstPageQueryResponse | RecommendedStreamsForUserResponse)[];
}

export const ResumeWatchingVideosQuery = async () => {
  const response = await graphqlApi.post<ResumeWatchingVideosQueryResponse>(
    'https://gql.twitch.tv/gql',
    ResumeWatchingVideosQueryOperation
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data?.data.currentUser.viewedVideos;
}