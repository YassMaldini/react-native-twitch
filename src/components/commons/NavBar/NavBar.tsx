import Box from "../../designSystem/Box/Box"
import Button from "../../designSystem/Button/Button"
import Image from "../../designSystem/Image/Image"
import { SvgIcon } from "../../designSystem/SvgIcon/SvgIcon"
import Notification2 from "../../../../assets/vectors/notifications2.svg"
import Messages from "../../../../assets/vectors/messages.svg"
import CreateStream from "../../../../assets/vectors/create_stream.svg"
import { ButtonColors, ButtonSizes } from "../../designSystem/Button/Button.types"
import { useQueryClient } from "react-query"
import { useDispatch } from "react-redux"
import { signOut } from "../../../store/authentication/authenticationActions/authenticationActions"
import { useRef } from "react"
import Pressable from "../../designSystem/Pressable/Pressable"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../utils/theme/theme"
import BottomModal from "../../designSystem/BottomModal/BottomModal"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import BottomModalItem from "../BottomModalItem/BottomModalItem"
import { useSelector } from "react-redux"
import { profileSelector } from "../../../store/authentication/authenticationReducerSelectors"
import { BottomModalItemSizes } from "../BottomModalItem/BottomModalItem.types"

import UserChannelIcon from "../../../../assets/vectors/from_twitch_app/user_channel.svg"
import CelebrationIcon from "../../../../assets/vectors/from_twitch_app/celebration.svg"
import SubStarIcon from "../../../../assets/vectors/from_twitch_app/sub_star.svg"
import DropsIcon from "../../../../assets/vectors/from_twitch_app/drops.svg"
import SettingsIcon from "../../../../assets/vectors/from_twitch_app/settings.svg"
import MoonIcon from "../../../../assets/vectors/from_twitch_app/moon_filled.svg"
import { NavBarProps } from "./NavBar.types"
import { CommonActions } from "@react-navigation/native"

const NavBar = ({ navigation }: NavBarProps) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const profile = useSelector(profileSelector);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  if (!profile) return null

  return (
    <>
    <Box
      padding="sToM"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Box flexDirection="row" alignItems="center">
        <Pressable onPress={() => bottomSheetModalRef.current?.present()}>
          <Image 
            source={{ uri: profile.profileImageURL }}
            width={28}
            height={28}
            borderRadius="xl"
          />
        </Pressable>
        <SvgIcon 
          icon={Notification2}
          width={26}
          height={26}
          color="primaryText"
          marginLeft="sToM"
        />
        <SvgIcon 
          icon={Messages}
          width={26}
          height={26}
          color="primaryText"
          marginLeft="sToM"
        />
      </Box>
      <Button 
        onPress={() => signOut(queryClient)(dispatch)}
        size={ButtonSizes.Small}
        color={ButtonColors.PrimaryOutlineText}
        beforeIcon={CreateStream}
        isBold={false}
        textProps={{
          flex: 0,
          fontFamily: 'Roobert-Medium'
        }}
      >
        Create
      </Button>
    </Box>
    <BottomModal 
      ref={bottomSheetModalRef} 
      snapPoints={["92%"]}
      title="Account"
    >
      <BottomModalItem 
        imageSource={{ uri: profile.profileImageURL }}
        size={BottomModalItemSizes.Large} 
        isAlone
      >
       {profile.displayName}
      </BottomModalItem>
      <BottomModalItem 
        icon={UserChannelIcon} 
        size={BottomModalItemSizes.Medium} 
        isFirst
        onPress={() => {
          bottomSheetModalRef.current?.dismiss()
          navigation.navigate('ProfileScreen', { login: profile.login })
        }}
      >
        My Channel
      </BottomModalItem>
      <BottomModalItem 
        icon={CelebrationIcon} 
        size={BottomModalItemSizes.Medium} 
        showRightArrow
        isLast
      >
        My Twitch Recap
      </BottomModalItem>
      <BottomModalItem 
        icon={SubStarIcon} 
        size={BottomModalItemSizes.Medium} 
        showRightArrow
        isFirst
      >
        Subscriptions
      </BottomModalItem>
      <BottomModalItem 
        icon={DropsIcon} 
        size={BottomModalItemSizes.Medium} 
        showRightArrow
      >
        Drops & Rewards
      </BottomModalItem>
      <BottomModalItem 
        icon={SettingsIcon} 
        size={BottomModalItemSizes.Medium} 
        showRightArrow
      >
        Settings
      </BottomModalItem>
      <BottomModalItem 
        icon={MoonIcon} 
        size={BottomModalItemSizes.Medium} 
        showRightArrow
        isLast
      >
        Appearance
      </BottomModalItem>
    </BottomModal>
    </>
  )
}

export default NavBar;