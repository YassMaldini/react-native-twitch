import Box from "../../../../../designSystem/Box/Box"
import Pressable from "../../../../../designSystem/Pressable/Pressable"
import { SvgIcon } from "../../../../../designSystem/SvgIcon/SvgIcon"
import Text from "../../../../../designSystem/Text/Text"

import SearchHistoryIcon from "../../../../../../../assets/vectors/from_twitch_app/search_history.svg"
import CrossIcon from "../../../../../../../assets/vectors/cross.svg"
import { SearchHistoryItemProps } from "./SearchHistoryItem.types"
import { useContext } from "react"
import { SearchScreenContext } from "../../SearchScreen.context"

const SearchHistoryItem = ({ children }: SearchHistoryItemProps) => {
  const { submitSearch } = useContext(SearchScreenContext)
  return (
    <Pressable
      onPress={() => submitSearch(children)}
      paddingVertical="sToM"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Box flex={1} flexDirection="row" alignItems="center">
        <SvgIcon
          icon={SearchHistoryIcon}
          width={28}
          height={28}
          color="secondaryText"
          marginRight="sToM"
        />
        <Text fontSize={16} fontFamily="Roobert-SemiBold">{children}</Text>
      </Box>
      <Pressable>
        <SvgIcon
          icon={CrossIcon}
          width={18}
          height={18}
          color="secondaryText"
        />
      </Pressable>
    </Pressable>
  )
}

export default SearchHistoryItem