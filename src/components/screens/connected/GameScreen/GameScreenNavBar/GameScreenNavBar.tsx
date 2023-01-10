import { useNavigation } from "@react-navigation/native"
import { BoxProps } from "@shopify/restyle"
import { useContext, useEffect, useState } from "react"
import { Alert, ViewProps } from "react-native"
import { useMutation, useQuery } from "react-query"
import { FollowGameError, FollowGameMutationRepsonse } from "../../../../../types/models/operations/mutations/FollowGameMutation.types"
import { IsFollowingGameQueryResponse } from "../../../../../types/models/operations/queries/IsFollowingGameQuery.types"
import { FollowGameMutation } from "../../../../../utils/api/operations/mutations/FollowGameMutation"
import { UnfollowGameMutation } from "../../../../../utils/api/operations/mutations/UnfollowGameMutation"
import { IsFollowingGameQuery, IS_FOLLOWING_GAME_QUERY_KEY } from "../../../../../utils/api/operations/queries/IsFollowingGameQuery"
import { Theme } from "../../../../../utils/theme/theme"
import { Icons } from "../../../../commons/Icon/Icon"
import { TwitchIcons } from "../../../../commons/Icon/Icon.types"
import Box from "../../../../designSystem/Box/Box"
import Pressable from "../../../../designSystem/Pressable/Pressable"
import { SvgIcon } from "../../../../designSystem/SvgIcon/SvgIcon"
import { GameScreenContext } from "../GameScreen.context"

export const GameScreenNavBar = (props: BoxProps<Theme> & ViewProps) => {
  const navigation = useNavigation()

  const { game } = useContext(GameScreenContext)

  const [isGameFollowed, setIsGameFollowed] = useState<boolean>(false)

  const {
    data,
    isLoading,
    isFetching
  } = useQuery<IsFollowingGameQueryResponse['data'], Error>(
    IS_FOLLOWING_GAME_QUERY_KEY,
    () => IsFollowingGameQuery(game.name)
  )

  useEffect(() => {
    setIsGameFollowed(Boolean(data?.game.self.follow))
  }, [data])

  const {
    mutate: followGameMutation,
  } = useMutation(
    (gameID: string) => FollowGameMutation(gameID),
    {
      onSuccess: () => setIsGameFollowed(true),
      onError: (error: FollowGameError) => {
        Alert.alert(error.message)
      }
    }
  )

  const {
    mutate: unfollowGameMutation
  } = useMutation(
    () => UnfollowGameMutation(game.id),
    {
      onSuccess: () => setIsGameFollowed(false),
      onError: (error: FollowGameError) => {
        Alert.alert(error.message)
      }
    }
  )

  const ICON_SIZE = 24

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      paddingRight="s"
      marginBottom="m"
      {...props}
    >
      <Pressable onPress={() => navigation.goBack()}>
        <SvgIcon
          icon={Icons[TwitchIcons.ArrowLeft]}
          width={ICON_SIZE}
          height={ICON_SIZE}
          color="primaryText"
        />
      </Pressable>
      {
        isGameFollowed && !Boolean(isLoading || isFetching)
          ?
          <Pressable onPress={() => unfollowGameMutation()}>
            <SvgIcon
              icon={Icons[TwitchIcons.Unfollow]}
              width={ICON_SIZE}
              height={ICON_SIZE}
              color="primaryText"
            />
          </Pressable>
          :
          <Pressable onPress={() => followGameMutation(game.id)}>
            <SvgIcon
              icon={Icons[TwitchIcons.Follow]}
              width={ICON_SIZE}
              height={ICON_SIZE}
              color="primaryText"
            />
          </Pressable>
      }
    </Box>
  )
}