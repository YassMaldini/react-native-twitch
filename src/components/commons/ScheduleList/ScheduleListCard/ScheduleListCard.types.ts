import { Game } from "../../../../types/models/gql/game.types";
import { ScheduleSegment } from "../../../../types/models/gql/segment.types";

export interface ScheduleListCardProps {
  segment: ScheduleSegment;
  onPress?: () => void;
}