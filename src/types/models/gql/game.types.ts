import { Tag } from "./tag.types"

export type Game = {
  __typename: "Game",
  id: string,
  name: string,
  viewersCount: number | null,
  followersCount: number,
  displayName: string,
  broadcastersCount: number | null,
  boxArtURL: string,
  gameTags: Tag[],
  coverURL: string | null
}