import { GameVodsQueryResponse, GameVodsQueryTypes } from "../../../../../../../types/models/operations/queries/GameVodsQuery.types";
import { graphqlApi } from "../../../../../../../utils/api/api";
import { GameVodsQueryOperation } from "../../../../../../../utils/api/operations/queries/GameVodsQuery";

export const GAME_VIDEOS_TAB_QUERY_KEY = "GAME_VIDEOS_TAB"

export const GameVideosTabQuery = async (name: string) => {
  const response = await graphqlApi.post<GameVodsQueryResponse[]>(
    'https://gql.twitch.tv/gql',
    [
      GameVodsQueryOperation({ name, types: [GameVodsQueryTypes.Archive]}),
      GameVodsQueryOperation({ name, types: [GameVodsQueryTypes.Highlight]}),
      GameVodsQueryOperation({ name, types: [GameVodsQueryTypes.PastPremiere]}),
      GameVodsQueryOperation({ name, types: [GameVodsQueryTypes.Upload]})
    ]
  );

  const { data, problem } = response;

  if (problem) {
    throw data
  }

  return data as GameVodsQueryResponse[];
}