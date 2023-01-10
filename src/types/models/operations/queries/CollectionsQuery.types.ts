import { Collection } from "../../gql/collection.types";
import { ResponseExtensions } from "../../gql/extensions.types";
import { PageInfo } from "../../gql/page.types";

export interface CollectionsQueryResponse extends ResponseExtensions {
  data: {
    user: {
      collections: {
        edges: CollectionsQueryEdge[]
        pageInfo: PageInfo
      }
    }
  }
}

export type CollectionsQueryEdge = {
  cursor: string;
  node: Collection;
}

export interface CollectionsQueryProps {
  channelId: string;
  collectionsCount?: number;
  itemCount?: number;
}