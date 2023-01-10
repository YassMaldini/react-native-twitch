import { yupResolver } from "@hookform/resolvers/yup";
import { FlashList } from "@shopify/flash-list";
import { useTheme } from "@shopify/restyle";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { TabView } from "react-native-tab-view";
import { useMutation, useQueryClient } from "react-query";
import { SearchSuggestions, SearchSuggestionsEdge } from "../../../../types/models/operations/queries/SearchSuggestionsQuery.types";
import { Theme } from "../../../../utils/theme/theme";
import Box from "../../../designSystem/Box/Box"
import Image from "../../../designSystem/Image/Image";
import Pressable from "../../../designSystem/Pressable/Pressable";
import Text from "../../../designSystem/Text/Text"
import { renderSearchScene, SearchScreenTabs } from "./SearchScreen.data";
import { SearchForMutation, SearchForMutationVariables } from "./SearchScreen.types";

import SearchImageLight from "../../../../../assets/images/dark/ic_search.png"
import { SearchForQuery, SEARCH_FOR_QUERY_KEY } from "../../../../utils/api/operations/queries/SearchForQuery";
import { SearchScreenContext } from "./SearchScreen.context";
import { SearchForQueryResponse } from "../../../../types/models/operations/queries/SearchForQuery.types";
import SearchInput from "./SearchInput/SearchInput";
import { SearchInputSchema } from "./SearchInput/SearchInput.types";
import { getSearchInputSchema } from "./SearchInput/SearchInput.schema";
import SafeAreaContainer from "../../../commons/SafeAreaContainer/SafeAreaContainer";
import { CustomTabBar } from "../../../commons/CustomTabBar/CustomTabBar";
import SearchHistory from "./SearchHistory/SearchHistory";
import { saveSearch } from "../../../../store/main/mainActions/mainActions";
import { useDispatch } from "react-redux";

const SearchScreen = () => {
  const dispatch = useDispatch()
  const queryClient = useQueryClient();

  const theme = useTheme<Theme>();
  const layout = useSafeAreaFrame();

  const [searchSuggestions, setSearchSuggestions] = useState<SearchSuggestions | undefined>();
  const [searchResults, setSearchResults] = useState<SearchForQueryResponse['data']['searchFor'] | undefined>();
  const [isSearchInputFocused, setSearchInputFocused] = useState(false);
  const [index, setIndex] = useState(0);

  const formProps = useForm<SearchInputSchema>({
    resolver: yupResolver(getSearchInputSchema()),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const { setValue } = formProps;

  const {
    mutate: resultsMutate,
    isLoading: isResultsMutateLoading
  } = useMutation<Awaited<ReturnType<SearchForMutation>>, Error, SearchForMutationVariables>(
    ({ search }) => SearchForQuery(search),
    {
      mutationKey: SEARCH_FOR_QUERY_KEY,
      onMutate: () => queryClient.cancelMutations(),
      onSuccess: async ({ searchFor }) => {
        console.log('searchFor', searchFor)
        setSearchResults(searchFor)
      },
      onError: async (error) => console.log('error', error.message),
    }
  )

  const areSearchResultsVisible = Boolean(!isSearchInputFocused && (isResultsMutateLoading || searchResults))

  // const isSearchInputEmpty = useMemo(
  //   () => {
  //     if (getValues('search')) {
  //       return getValues('search').length === 0
  //     } else {
  //       return 
  //     }
  //   },
  //   [getValues]
  // )

  const routes = Object.values(SearchScreenTabs).reduce(
    (acc, { key, title }) => ([
      ...acc,
      { key: key.toLocaleLowerCase(), title }
    ]),
    [] as Array<{
      key: string,
      title: string
    }>
  )

  // const CustomTabBar = useCallback(
  //   (props: SceneRendererProps & {
  //     navigationState: NavigationState<{
  //       key: string;
  //       title: string;
  //     }>;
  //   }) => {
  //     return (
  //       <TabBar
  //         {...props}
  //         scrollEnabled
  //         activeColor={theme.colors.twitchPurple}
  //         layout={layout}
  //         style={{
  //           width: Dimensions.get('window').width,
  //           backgroundColor: theme.colors.primaryBackground,
  //           marginHorizontal: theme.spacing.sToStoM,
  //         }}
  //         tabStyle={{
  //           width: 'auto',
  //           minHeight: 32,
  //           paddingHorizontal: theme.spacing.s,
  //         }}
  //         indicatorContainerStyle={{
  //           backgroundColor: theme.colors.primaryBackground
  //         }}
  //         indicatorStyle={{
  //           backgroundColor: theme.colors.twitchPurple,
  //           height: 3
  //         }}
  //         labelStyle={{
  //           textTransform: 'capitalize',
  //           fontFamily: 'Roobert-SemiBold',
  //           fontSize: 16
  //         }}
  //       />
  //     );
  //   },
  //   [theme]
  // )

  const submitSearch = (text: string) => {
    setSearchInputFocused(false)
    Keyboard.dismiss()
    setValue('search', text)
    resultsMutate({ search: text })
    saveSearch(text)(dispatch)
  }

  const _renderItem = useCallback(
    ({ item }: { item: SearchSuggestionsEdge }) => (
      <Pressable
        onPress={() => {
          submitSearch(item.node.text)
        }}
        flexDirection="row"
        alignItems="center"
        paddingVertical="sToM"
        marginBottom="xs"
      >
        <Box width={40} marginLeft="xs" marginRight="m">
          {
            item.node.content ?
              <Image
                source={{ uri: item.node.content.boxArtURL }}
                width={40}
                // height={55}
                aspectRatio={285 / 380}
                alignSelf="center"
              /> :
              <Image
                source={SearchImageLight}
                width={25}
                height={25}
                alignSelf="center"
              />
          }
        </Box>
        <Text
          fontSize={18}
          fontFamily="Roobert-SemiBold"
        >
          {item.node.text}
        </Text>
      </Pressable>
    ),
    []
  )

  const contextValue = useMemo(
    () => ({
      searchResults,
      searchSuggestions,
      setSearchSuggestions,
      resultsMutate,
      isResultsMutateLoading,
      isSearchInputFocused,
      setSearchInputFocused,
      submitSearch
    }),
    [
      searchResults,
      searchSuggestions,
      setSearchSuggestions,
      resultsMutate,
      isResultsMutateLoading,
      isSearchInputFocused,
      setSearchInputFocused,
      submitSearch
    ]
  )

  return (
    <SafeAreaContainer>
      <SearchScreenContext.Provider value={contextValue}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <Box flex={1}>
            <SearchInput {...{ formProps }} />
            <Box flex={1}>
              {Boolean(isSearchInputFocused && searchSuggestions) &&
                <FlashList
                  data={searchSuggestions?.edges}
                  renderItem={_renderItem}
                  estimatedItemSize={28}
                  keyboardDismissMode="on-drag"
                  keyboardShouldPersistTaps="handled"
                /> 
              }
              {Boolean(!searchSuggestions && !areSearchResultsVisible) &&
                <SearchHistory />
              }
              <Box flex={1} visible={areSearchResultsVisible}>
                <TabView
                  navigationState={{ index, routes }}
                  renderScene={renderSearchScene}
                  onIndexChange={setIndex}
                  renderTabBar={(props) => <CustomTabBar {...props} />}
                  initialLayout={{ width: layout.width }}
                />
              </Box>
            </Box>
          </Box>
        </KeyboardAvoidingView>
      </SearchScreenContext.Provider>
    </SafeAreaContainer>
  )
}

export default SearchScreen