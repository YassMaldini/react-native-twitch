import { FlashList } from "@shopify/flash-list"
import { useSelector } from "react-redux"
import { searchHistorySelector } from "../../../../../store/main/mainReducerSelectors"
import Box from "../../../../designSystem/Box/Box"
import Text from "../../../../designSystem/Text/Text"
import SearchHistoryItem from "./SearchHistoryItem/SearchHistoryItem"

const SearchHistory = () => {
  const searchHistory = useSelector(searchHistorySelector)

  if (!searchHistory || searchHistory.length === 0) {
    return null
  }

  return (
    <Box padding="s" marginTop="m">
      <Text color="secondaryText" fontFamily="Roobert-SemiBold">
        RECENT SEARCHES
      </Text>
      {
        searchHistory.map(item => (
          <SearchHistoryItem key={item}>{item}</SearchHistoryItem>
        ))
      }
    </Box>
  )
}

export default SearchHistory