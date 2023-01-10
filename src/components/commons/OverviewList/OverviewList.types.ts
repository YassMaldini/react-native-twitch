import { NavigationProp } from "@react-navigation/native";
import { VideoConnectionEdge } from "../../../types/models/gql/video.types";
import { CollectionsQueryEdge } from "../../../types/models/operations/queries/CollectionsQuery.types";

export interface OverviewListProps {
  itemsList?: VideoConnectionEdge[] | CollectionsQueryEdge[];
  title: string;
  type: OverviewListTypes;
  navigation: NavigationProp<any,any>;
}

export enum OverviewListTypes {
  VideoConnection = "VideoConnection",
  Collections = "Collections"
}