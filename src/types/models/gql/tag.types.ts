export type Tag = {
  __typename: "Tag",
  id: string,
  localizedName: string,
  tagName: string,
  isAutomated: boolean,
  isLanguageTag: boolean,
  localizedDescription: string,
  scope: string
}

export type FreeformTag = {
  __typename: "FreeformTag",
  name: string
}