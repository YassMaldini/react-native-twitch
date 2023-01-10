import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { forwardRef, RefObject } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import BottomModal from "../../../designSystem/BottomModal/BottomModal";
import Box from "../../../designSystem/Box/Box";
import BottomModalItem from "../../BottomModalItem/BottomModalItem";
import { BottomModalItemColors, BottomModalItemSizes } from "../../BottomModalItem/BottomModalItem.types";
import { Icons } from "../../Icon/Icon";
import { TwitchIcons } from "../../Icon/Icon.types";
import { StreamListModalProps } from "./StreamListModal.types";

const StreamListModal = forwardRef<BottomSheetModal, StreamListModalProps>(
  ({ selectedUser, setSelectedUser, navigation }, ref) => {

    const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = useSafeAreaFrame()

    return (
      <>
        <BottomModal
          {...{ ref }}
          snapPoints={['35%']}
          onDismiss={() => setSelectedUser(undefined)}
        >
          <BottomModalItem
            size={BottomModalItemSizes.Small}
            icon={Icons[TwitchIcons.Follow]}
            isFirst
          >
            Follow
          </BottomModalItem>
          <BottomModalItem
            size={BottomModalItemSizes.Small}
            icon={Icons[TwitchIcons.User]}
            isLast
            onPress={() => {
              if (selectedUser) {
                (ref as RefObject<BottomSheetModal>).current?.dismiss()
                navigation.navigate('ProfileScreen', { login: selectedUser.login })
              }
            }}
          >
            View profile
          </BottomModalItem>
          <BottomModalItem
            size={BottomModalItemSizes.Small}
            icon={Icons[TwitchIcons.NotInterested]}
            isAlone
          >
            Not interested
          </BottomModalItem>
          <BottomModalItem
            icon={Icons[TwitchIcons.Ban]}
            size={BottomModalItemSizes.Small}
            color={BottomModalItemColors.Red}
            isFirst
          >
            {`Block ${selectedUser?.displayName}`}
          </BottomModalItem>
          <BottomModalItem
            icon={Icons[TwitchIcons.Report]}
            size={BottomModalItemSizes.Small}
            color={BottomModalItemColors.Red}
            isLast
          >
            {`Report ${selectedUser?.displayName}`}
          </BottomModalItem>
        </BottomModal>
        {/* Clickable background of the modal */}
        {Boolean(selectedUser) &&
          <TouchableWithoutFeedback
            onPress={() => {
              (ref as RefObject<BottomSheetModal>).current?.dismiss()
              setSelectedUser(undefined)
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: WINDOW_WIDTH,
              height: WINDOW_HEIGHT,
              zIndex: 2
            }}
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              width={WINDOW_WIDTH}
              height={WINDOW_HEIGHT}
              zIndex={2}
              style={{
                backgroundColor: '#00000080'
              }}
            />
          </TouchableWithoutFeedback>
        }
      </>
    )
  })

export default StreamListModal