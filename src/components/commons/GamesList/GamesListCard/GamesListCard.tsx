import { GamesListSize } from "../GamesList.types"
import MediumGameListCard from "./MediumGameListCard/MediumGameListCard"
import SmallGameListCard from "./SmallGameListCard/SmallGameListCard"
import { GameListCardProps } from "./GamesListCard.types"
import LargeGameListCard from "./LargeGameListCard/LargeGameListCard"

const GamesListCard = ({ game, size, ...rest }: GameListCardProps) => {
  if (size === GamesListSize.Small) {
    return <SmallGameListCard {...{ game }} {...rest} />
  } else if (size === GamesListSize.Medium) {
    return <MediumGameListCard {...{ game }} {...rest} />
  } else if (size === GamesListSize.Large) {
    return <LargeGameListCard {...{ game }} {...rest} />
  } else {
    return <SmallGameListCard {...{ game }} {...rest} />
  }
}

export default GamesListCard