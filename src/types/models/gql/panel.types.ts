export type ExtensionPanel = {
  __typename: "ExtensionPanel";
  id: string;
  type: string;
}

export type DefaultPanel = {
  __typename: "DefaultPanel";
  id: string;
  type: string;
  description: string | null;
  imageURL: string;
  linkURL: string;
  title: string | null;
}