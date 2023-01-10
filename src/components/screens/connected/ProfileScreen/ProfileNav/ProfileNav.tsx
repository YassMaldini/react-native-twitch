import { TouchableWithoutFeedback, useWindowDimensions } from "react-native"
import { useSafeAreaFrame, useSafeAreaInsets } from "react-native-safe-area-context"
import Box from "../../../../designSystem/Box/Box"
import Pressable from "../../../../designSystem/Pressable/Pressable"
import { SvgIcon } from "../../../../designSystem/SvgIcon/SvgIcon"
import OptionsIcon from "../../../../../../assets/vectors/options.svg"
import LeftArrowIcon from "../../../../../../assets/vectors/from_twitch_app/arrow_left.svg"
import { useSelector } from "react-redux"
import { profileSelector } from "../../../../../store/authentication/authenticationReducerSelectors"
import { ProfileNavProps } from "./ProfileNav.types"
import { useNavigation } from "@react-navigation/native"
import ProfileOptionsModal from "../ProfileOptionsModal/ProfileOptionsModal"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { useRef, useState } from "react"
import WhisperIcon from "../../../../../../assets/vectors/from_twitch_app/whisper.svg"
import ShareIcon from "../../../../../../assets/vectors/share.svg"
import BanIcon from "../../../../../../assets/vectors/from_twitch_app/ban.svg"
import ReportIcon from "../../../../../../assets/vectors/from_twitch_app/report.svg"
import BottomModal from "../../../../designSystem/BottomModal/BottomModal"
import BottomModalItem from "../../../../commons/BottomModalItem/BottomModalItem"
import { BottomModalItemColors, BottomModalItemSizes } from "../../../../commons/BottomModalItem/BottomModalItem.types"
import Text from "../../../../designSystem/Text/Text"

export const ProfileNav = ({ profileFromChannelName }: ProfileNavProps) => {

  const navigation = useNavigation()

  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const [isModalOpened, setModalOpened] = useState<boolean>(false)

  const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = useSafeAreaFrame()
  const { top } = useSafeAreaInsets()

  const user = profileFromChannelName?.user

  const profile = useSelector(profileSelector)

  const isCurrentUser = profile?.login === user?.login

  return (
    <>
    <Box
      position="absolute"
      top={top}
      left={0}
      width={WINDOW_WIDTH}
      padding="s"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Pressable
        backgroundColor="primaryBackground"
        padding="xxs"
        borderRadius="l"
        onPress={() => navigation.goBack()}
      >
        <SvgIcon
          icon={LeftArrowIcon}
          width={20}
          height={20}
          color="primaryText"
        />
      </Pressable>
      {!Boolean(isCurrentUser) &&
        <Pressable
          onPress={() => {
            setModalOpened(true)
            bottomSheetModalRef.current?.present()
          }}
          backgroundColor="primaryBackground"
          padding="xxs"
          borderRadius="l"
          style={{
            transform: [{ rotate: '90deg' }]
          }}
        >
          <SvgIcon
            icon={OptionsIcon}
            width={20}
            height={20}
            color="primaryText"
          />
        </Pressable>
      }
    </Box>
    {isModalOpened &&
      <TouchableWithoutFeedback
        onPress={() => {
          setModalOpened(false)
          bottomSheetModalRef.current?.dismiss()
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: WINDOW_WIDTH,
          height: WINDOW_HEIGHT,
          zIndex: 9
        }}
      >
        <Box 
          flex={1}
          position="absolute"
          top={0}
          left={0}
          width={WINDOW_WIDTH}
          height={WINDOW_HEIGHT}
          zIndex={9}
          style={{
            backgroundColor: '#00000080'
          }}
        />
      </TouchableWithoutFeedback>
    }
    <BottomModal 
      ref={bottomSheetModalRef} 
      snapPoints={['30%']}
      // onChange={e => {
      //   console.log(e)
      // }}
      onDismiss={() => setModalOpened(false)}
    >
      <BottomModalItem 
        icon={WhisperIcon} 
        size={BottomModalItemSizes.Small}
        isFirst
      >
        {`Whisper ${user?.displayName}`}
      </BottomModalItem>
      <BottomModalItem 
        icon={ShareIcon} 
        size={BottomModalItemSizes.Small}
        isLast
      >
        Share
      </BottomModalItem>
      <BottomModalItem 
        icon={BanIcon} 
        size={BottomModalItemSizes.Small}
        color={BottomModalItemColors.Red}
        isFirst
      >
        {`Block ${user?.displayName}`}
      </BottomModalItem>
      <BottomModalItem 
        icon={ReportIcon} 
        size={BottomModalItemSizes.Small}
        color={BottomModalItemColors.Red}
        isLast
      >
        {`Report ${user?.displayName}`}
      </BottomModalItem>
    </BottomModal>
    </>
  )
}