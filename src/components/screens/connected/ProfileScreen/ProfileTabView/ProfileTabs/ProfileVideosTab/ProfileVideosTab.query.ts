import { ChannelVodsQueryTypes } from "../../../../../../../types/models/operations/queries/ChannelVodsQuery.types";
import { graphqlApi } from "../../../../../../../utils/api/api";
import { ChannelVodsQueryOperation } from "../../../../../../../utils/api/operations/queries/ChannelVodsQuery";
import { CollectionsQueryOperation } from "../../../../../../../utils/api/operations/queries/CollectionsQuery";
import { ProfileVideosTabQueryResponse } from "./ProfileVideosTab.types";

export const PROFILE_VIDEOS_TAB_QUERY_KEY = "PROFILE_VIDEOS_TAB"

export const ProfileVideosTabQuery = async (channelId: string) => {
  const response = await graphqlApi.post<ProfileVideosTabQueryResponse>(
    'https://gql.twitch.tv/gql',
    [
      CollectionsQueryOperation({ channelId }),
      ChannelVodsQueryOperation({ channelId, types: [ChannelVodsQueryTypes.Archive]}),
      ChannelVodsQueryOperation({ channelId, types: [ChannelVodsQueryTypes.Highlight]}),
      ChannelVodsQueryOperation({ channelId, types: [ChannelVodsQueryTypes.PastPremiere]}),
      ChannelVodsQueryOperation({ channelId, types: [ChannelVodsQueryTypes.Upload]})
    ]
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data as ProfileVideosTabQueryResponse;
}