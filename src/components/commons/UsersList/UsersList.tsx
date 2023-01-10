import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import Box from "../../designSystem/Box/Box"
import Text from "../../designSystem/Text/Text"
import { HomeStackScreenList } from "../../navigation/HomeStack/HomeStack.types";
import { HomeScreenProps } from "../../screens/connected/HomeScreen/HomeScreen.types";
import { UsersListProps, UsersListSize } from "./UsersList.types";
import UsersListCard from "./UserListCard/UserListCard";
import { memo } from "react";
import { UserEdge } from "../../../types/models/gql/user.types";
import { CommonScreensScreenList } from "../../navigation/ConnectedBottomTab/CommonScreens/CommonScreens.types";

const UsersList = ({ title, listTitle, size, limit, usersList }: UsersListProps) => {

  const { navigate } = useNavigation<HomeScreenProps['navigation']>();

  const listToRender = !limit ?
    usersList :
    usersList?.reduce(
      (acc, item) => (
        [...acc, item]
      ),
      [] as UserEdge[]
    )

  return (
    <Box flex={1} paddingLeft="sToM" marginTop="s">
      {title && <Text variant="title" marginBottom="sToM">{title}</Text>}
      {listTitle && <Text variant="listTitle">{listTitle}</Text>}
      <FlashList
        data={listToRender}
        renderItem={({ item: { node: user }, index }) => {
          return (
            <UsersListCard
              key={`streamListCard#${index}`}
              onPress={() => {
                navigate(CommonScreensScreenList.ProfileScreen, { login: user.login })
              }}
              {...{ user, size }}
            />
          )
        }}
        estimatedItemSize={200}
        horizontal={size === UsersListSize.Medium}
      />
    </Box>
  )
}

export default memo(UsersList)