import { VideoListSize } from "../VideoList.types"
import ExtraSmallVideoListCard from "./ExtraSmallVideoListCard/ExtraSmallVideoListCard"
import LargeVideoListCard from "./LargeVideoListCard/LargeVideoListCard"
import MidMediumVideoListCard from "./MidMediumVideoListCard/MidMediumVideoListCard"
import { VideoListCardProps } from "./VideoListCard.types"

const VideoListCard = ({ video, size, onPress, ...rest }: VideoListCardProps) => {
  switch (size) {
    case VideoListSize.ExtraSmall:
      return <ExtraSmallVideoListCard {...{ video, onPress }} {...rest}  />
    case VideoListSize.MidMedium:
      return <MidMediumVideoListCard {...{ video, onPress }} {...rest}  />
    case VideoListSize.Large:
      return <LargeVideoListCard {...{ video, onPress }} {...rest} />
  }
}

export default VideoListCard