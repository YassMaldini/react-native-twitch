import { ResponseExtensions } from "../../gql/extensions.types";
import { DefaultPanel, ExtensionPanel } from "../../gql/panel.types";

export interface ProfilePanelsQueryResponse extends ResponseExtensions {
  data: {
    user: {
      panels: Array<DefaultPanel | ExtensionPanel>
    }
  }
}