import moment from "moment"
import Box from "../../../../designSystem/Box/Box"
import Image from "../../../../designSystem/Image/Image"
import Text from "../../../../designSystem/Text/Text"
import FollowImage from "../../../../../../assets/images/dark/navigation/ic_navigation_following_inactive.png"
import Button from "../../../../designSystem/Button/Button"
import SubIcon from "../../../../../../assets/vectors/star-outline.svg"
import { SvgIcon } from "../../../../designSystem/SvgIcon/SvgIcon"
import { ButtonColors } from "../../../../designSystem/Button/Button.types"

import { SocialMediaIcons } from "./ProfileHeader.data"
import { thousandFormatter2 } from "../../../../../utils/numbers/thousandFormatter"
import { ProfileHeaderProps } from "./ProfileHeader.types"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { profileSelector } from "../../../../../store/authentication/authenticationReducerSelectors"

export const ProfileHeader = ({ profileFromChannelName, ...rest }: ProfileHeaderProps) => {

  const user = profileFromChannelName?.user

  const profile = useSelector(profileSelector)

  const isCurrentUser = profile?.login === user?.login

  if (!user) return null

  return (
    <Box {...rest} paddingHorizontal="sToM" marginBottom="sToM">
      <Box
        position="relative"
        bottom={10}
        flexDirection="row"
        alignItems="center"
      >
        <Box
          borderRadius="xl"
          backgroundColor="primaryBackground"
          padding="xxxs"
          borderWidth={3}
          borderColor="secondaryBackground"
          marginRight="sToM"
        >
          <Image
            source={{ uri: user.profileImageURL }}
            width={80}
            height={80}
            borderRadius="xl"
          />
        </Box>
        <Box>
          <Text fontSize={22} fontFamily="Roobert-Bold" marginBottom="xxs">
            {user.displayName}
          </Text>
          <Text fontSize={14} color="gray2">
            {
              Boolean(user.lastBroadcast?.startedAt)
                ?
                `Last live ${moment(user.lastBroadcast?.startedAt).fromNow()}`
                :
                'Offline'
            }
          </Text>
        </Box>
      </Box>
      {user.description &&
        <Text color="secondaryText" marginBottom="m">
          {user.description}
        </Text>
      }
      <Text marginBottom="m">
        <Text fontFamily="Roobert-SemiBold">{thousandFormatter2(user.followers?.totalCount || 0, 1)} </Text>
        followers
      </Text>
      {user.channelMetadata.socialMedias.length > 0 &&
        <Box flexDirection="row" marginBottom="m">
          {
            user.channelMetadata.socialMedias.map((item, index) => index < 3 && (
              <Box key={`socialMedia#${index}`} flexDirection="row" alignItems="center" marginRight="m">
                <SvgIcon
                  icon={SocialMediaIcons[item.name]}
                  width={16}
                  height={16}
                  marginRight="s"
                  color="primaryHighlight"
                />
                <Text fontSize={13} color="primaryHighlight" fontFamily="Roobert-SemiBold">
                  {item.title}
                </Text>
              </Box>
            ))
          }
        </Box>
      }
      {!isCurrentUser &&
        <Box flexDirection="row">
          <Button
            flex={2}
            textProps={{
              flex: 0
            }}
            beforeElement={
              <Image
                source={FollowImage}
                width={22}
                height={22}
                marginRight="s"
              />
            }
            borderRadius="xs"
            marginRight="m"
          >
            Follow
          </Button>
          <Button
            color={ButtonColors.PrimaryOutlineText}
            flex={2}
            textProps={{
              flex: 0
            }}
            beforeElement={
              <SvgIcon
                icon={SubIcon}
                width={22}
                height={22}
                color="primaryText"
                marginRight="s"
              />
            }
            borderRadius="xs"
          >
            Subscribe
          </Button>
        </Box>
      }
    </Box>
  )
}