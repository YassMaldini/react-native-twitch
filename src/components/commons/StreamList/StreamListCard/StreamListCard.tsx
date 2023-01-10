import LargeStreamListCard from "./LargeStreamListCard/LargeStreamListCard"
import MediumStreamListCard from "./MediumStreamListCard/MediumStreamListCard"
import SmallStreamListCard from "./SmallStreamListCard/SmallStreamListCard"
import { StreamListSize } from "../StreamList.types"
import { StreamListCardProps } from "./StreamListCard.types"

const StreamListCard = ({ stream, size, onPress, ...rest }: StreamListCardProps) => {
  switch (size) {
    case StreamListSize.Small:
      return <SmallStreamListCard {...{ stream, onPress }} {...rest}  />
    case StreamListSize.Medium:
      return <MediumStreamListCard {...{ stream, onPress }} {...rest}  />
    case StreamListSize.Large:
      return <LargeStreamListCard {...{ stream, onPress }} {...rest}  />
  }
}

export default StreamListCard