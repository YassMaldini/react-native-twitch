import { Game } from "./game.types"
import { Stream } from "./stream.types"

export type ShelfTitle = {
  __typename: "ShelfTitle",
  shelfTitleContext: any | null,
  key: string,
  fallbackLocalizedTitle: string,
  localizedTitleTokens: {
    node: TextToken | Game
  }[]
}

export type VerticalShelf = {
  __typename: "VerticalShelf",
  content: {
    edges: Array<
      {
        cursor: string,
        trackingID: string,
        node: Stream | Game | null,
        metadata: {
          hasLive: false,
          title: ShelfTitle,
          subtitle: ShelfTitle
        } | null
      }  
    >,
    pageInfo: {
      hasNextPage: boolean
    }
  },
  contentContext: null,
  id: string,
  trackingID: string,
  title: ShelfTitle,
  subtitle: ShelfTitle,
  type: string | null
}

export type VerticalShelfGroup = {
  __typename: "VerticalShelfGroup",
  contentContext: null,
  id: string,
  trackingID: string,
  title: null,
  subtitle: null,
  shelves: VerticalShelf[]
}

export type TextToken = {
  __typename: "TextToken",
  hasEmphasis: boolean,
  location: string,
  text: string
}