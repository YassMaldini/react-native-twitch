import { Game } from "./game.types"

export type ScheduleSegment = {
  __typename: "ScheduleSegment",
  id: string,
  startAt: string,
  categories: Game[],
  endAt: string,
  isCancelled: boolean,
  title: string,
  hasReminder: boolean,
  repeatEndsAfterCount: number,
  baseSegmentID: string
}