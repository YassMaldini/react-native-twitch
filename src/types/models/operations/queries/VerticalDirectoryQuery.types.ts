import { ResponseExtensions } from "../../gql/extensions.types";
import { ShelfTitle, VerticalShelfGroup } from "../../gql/shelves.types";

export interface VerticalDirectoryQueryResponse extends ResponseExtensions {
  data: {
    verticalDirectory: {
      id: string,
      trackingID: string,
      subtitle: ShelfTitle,
      title: ShelfTitle,
      shelfGroups: VerticalShelfGroup[]
    }
  }
}