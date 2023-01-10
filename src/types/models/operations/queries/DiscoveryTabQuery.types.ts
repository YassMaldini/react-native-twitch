import { Clip } from "../../gql/clip.types";
import { ResponseExtensions } from "../../gql/extensions.types";
import { Game } from "../../gql/game.types";
import { ShelfTitle } from "../../gql/shelves.types";
import { Stream } from "../../gql/stream.types";

export interface DiscoveryTabQueryResponse extends ResponseExtensions {
  data: {
    featuredStreams: {
      isSponsored: boolean;
      stream: Stream;
    }[];
    shelves: {
      edges: DiscoveryTabQueryShelvesEdges[]
    }
  }
}

export interface DiscoveryTabQueryShelvesEdges {
  node: {
    id: string,
    displayType: string,
    trackingInfo: {
      reasonTarget: any | null,
      reasonTargetType: any | null,
      reasonType: string,
      rowName: string
    },
    title: ShelfTitle,
    content: {
      edges: {
        promotionsCampaignID: string,
        sourceType: string,
        trackingID: string,
        node: Stream | Game | Clip | null
      }[]
    }
  }
}