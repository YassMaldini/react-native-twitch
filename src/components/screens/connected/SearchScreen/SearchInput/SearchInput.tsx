import { useContext, useRef } from "react";
import { Controller } from "react-hook-form";
import Box from "../../../../designSystem/Box/Box";
import TextInput from "../../../../designSystem/TextInput/TextInput";
import { TextInput as RNTextInput } from 'react-native';
import { SearchScreenContext } from "../SearchScreen.context";
import { SearchInputProps, SearchSuggestionsMutation, SearchSuggestionsMutationVariables } from "./SearchInput.types";
import { useMutation, useQueryClient } from "react-query";
import { SearchSuggestionsQuery, SEARCH_SUGGESTIONS_QUERY_KEY } from "../../../../../utils/api/operations/queries/SearchSuggestionsQuery";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../../../../utils/theme/theme";
import Pressable from "../../../../designSystem/Pressable/Pressable";
import { SvgIcon } from "../../../../designSystem/SvgIcon/SvgIcon";
import CrossIcon from "../../../../../../assets/vectors/cross.svg"
import CloseImage from "../../../../../../assets/images/dark/glyph_close.png"
import Image from "../../../../designSystem/Image/Image";
import { useDispatch } from "react-redux";
import { saveSearch } from "../../../../../store/main/mainActions/mainActions";

const SearchInput = ({ formProps }  :SearchInputProps) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const theme = useTheme<Theme>();

  const textInputRef = useRef<RNTextInput>(null);

  const { 
    resultsMutate,
    setSearchSuggestions,
    isSearchInputFocused,
    setSearchInputFocused,
    submitSearch
  } = useContext(SearchScreenContext);

  const { control, getValues } = formProps;

  const {
    mutate: suggestionsMutate,
    isLoading,
    error: mutationError,
  } = useMutation<Awaited<ReturnType<SearchSuggestionsMutation>>, Error, SearchSuggestionsMutationVariables>(
    ({ search }) => SearchSuggestionsQuery(search),
    {
      mutationKey: SEARCH_SUGGESTIONS_QUERY_KEY,
      onMutate: () => queryClient.cancelMutations(),
      onSuccess: async ({ searchSuggestions }) => {
        console.log('searchSuggestions', searchSuggestions)
        setSearchSuggestions(searchSuggestions)
      },
      onError: async (error) => console.log('error', error.message),
    }
  );

  return (
    <Box flexDirection="row" marginBottom="xxs" paddingRight="sToM">
      <Box visible={isSearchInputFocused}>
        <Pressable onPress={() => {
          textInputRef.current?.blur()
          setSearchInputFocused(false)
        }}>
          <Image
            source={CloseImage}
            width={32}
            height={32}
            marginRight="s"
          />
        </Pressable>
      </Box>
      <Box
        flex={1}
        flexDirection="row"
        alignItems="center"
        backgroundColor="highlightBackground"
        borderRadius="xs"
      >
        <Controller
          name="search"
          render={({ field: { onChange, value } }) => (
            <TextInput
              ref={textInputRef}
              onChangeText={(text) => {
                onChange(text);
                if (text.length > 0) {
                  suggestionsMutate({ search: text })
                } else {
                  setSearchSuggestions(undefined)
                }
              }}
              onSubmitEditing={({ nativeEvent: { text } }) => {
                submitSearch(text)
                saveSearch(text)(dispatch)
              }}
              flex={1}
              backgroundColor="highlightBackground"
              placeholder="Search"
              placeholderTextColor={theme.colors.secondaryText}
              fontSize={15}
              color="primaryText"
              paddingVertical="s"
              onFocus={() => {
                setSearchInputFocused(true)
              }}
              // onBlur={() => {
              //   setSearchInputFocused(false)
              // }}
              selectTextOnFocus
              {...{ value }}
            />
          )}
          {...{ control }}
        />
        <Box visible={getValues('search')?.length > 0}>
          <Pressable
            paddingHorizontal="s"
            onPress={() => {
              textInputRef.current?.clear()
              setSearchSuggestions(undefined)
              textInputRef.current?.focus()
            }}
          >
            <Box
              alignSelf="center"
              backgroundColor="gray3"
              borderRadius="m"
            >
              <SvgIcon
                icon={CrossIcon}
                width={14}
                height={14}
                color="highlightBackground"
              />
            </Box>
          </Pressable>
        </Box>
      </Box>
    </Box>
  )
}

export default SearchInput