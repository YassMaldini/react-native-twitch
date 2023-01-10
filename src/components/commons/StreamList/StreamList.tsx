import { FlashList } from "@shopify/flash-list"
import { useRef, useState } from "react"
import { Stream } from "../../../types/models/gql/stream.types"
import Box from "../../designSystem/Box/Box"
import Text from "../../designSystem/Text/Text"
import { StreamListProps, StreamListSize } from "./StreamList.types"
import { useDispatch } from "react-redux"
import { setPlayedMedia } from "../../../store/main/mainActions/mainActions"
import StreamListCard from "./StreamListCard/StreamListCard"
import StreamListModal from "./StreamListModal/StreamListModal"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { User } from "../../../types/models/gql/user.types"

const StreamList = ({ title, listTitle, size, streamsList, navigation, flashListProps, ...rest }: StreamListProps) => {
  const dispatch = useDispatch();

  const [selectedUser, setSelectedUser] = useState<User |undefined>()

  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  return (
    <>
      <Box flex={1} paddingLeft="sToM" marginTop="s">
        {title && <Text variant="title" marginBottom="sToM">{title}</Text>}
        {listTitle && <Text variant="listTitle">{listTitle}</Text>}
        <FlashList
          {...flashListProps}
          data={streamsList}
          renderItem={({ item, index }) => {
            const stream: Stream = item.node && (item.node as { stream: Stream }).stream ? (item.node as { stream: Stream }).stream : item.node as Stream
            return (
              <StreamListCard
                {...rest}
                key={`streamListCard#${index}`}
                onPress={() => {
                  setPlayedMedia(stream)(dispatch)
                  // navigate(HomeStackScreenList.VideoScreen, { stream })
                }}
                {...{ stream, size }}
                optionsIconProps={{
                  pressable: {
                    onPress: (e, user) => {
                      bottomSheetModalRef.current?.present()
                      setSelectedUser(user)
                    }
                  }
                }}
              />
            )
          }}
          estimatedItemSize={size === StreamListSize.Medium ? 200 : 83}
          horizontal={size === StreamListSize.Medium}
        />
      </Box>
      <StreamListModal 
        ref={bottomSheetModalRef} 
        {...{
          selectedUser,
          setSelectedUser,
          navigation
        }}
      />
    </>
  )
}

export default StreamList