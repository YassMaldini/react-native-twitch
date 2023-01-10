import { UsersListSize } from "../UsersList.types"
import { UserListCardProps } from "./UserListCard.types"
import SmallUserListCard from "./SmallUserListCard/SmallUserListCard"

const UserListCard = ({ user, size, onPress }: UserListCardProps) => {
  switch (size) {
    case UsersListSize.Small:
      return <SmallUserListCard {...{ user, onPress }} />
    case UsersListSize.Medium:
      return <SmallUserListCard {...{ user, onPress }} />
    case UsersListSize.Large:
      return <SmallUserListCard {...{ user, onPress }} />
  }
}

export default UserListCard