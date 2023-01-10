import { ChannelVodsQueryResponse } from "../../../../../../../types/models/operations/queries/ChannelVodsQuery.types";
import { CollectionsQueryResponse } from "../../../../../../../types/models/operations/queries/CollectionsQuery.types";

export type ProfileVideosTabQueryResponse = (CollectionsQueryResponse | ChannelVodsQueryResponse)[];