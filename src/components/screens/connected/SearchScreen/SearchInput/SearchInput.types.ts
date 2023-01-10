import { UseFormReturn } from "react-hook-form";
import { AnyObject, AssertsShape, Assign, ObjectShape } from "yup/lib/object";
import { RequiredStringSchema } from "yup/lib/string";
import { SearchSuggestionsQuery } from "../../../../../utils/api/operations/SearchSuggestionsQuery";
import { RemoveIndex, ValidTypeFromYupSchema } from "../../../../../utils/form/helpers";
import { getSearchInputSchema } from "./SearchInput.schema";

export interface SearchInputProps {
  formProps: UseFormReturn<RemoveIndex<AssertsShape<Assign<ObjectShape, {
    search: RequiredStringSchema<string | undefined, AnyObject>;
}>>>, any>
}

export type SearchInputSchema = ValidTypeFromYupSchema<typeof getSearchInputSchema>;

export interface SearchSuggestionsMutationVariables {
  search: string;
}

export type SearchSuggestionsMutation = (
  variables: SearchSuggestionsMutationVariables
) => ReturnType<typeof SearchSuggestionsQuery>;