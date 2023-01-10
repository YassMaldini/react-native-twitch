import { NavigationProp } from "@react-navigation/native";
import { User } from "../../../../types/models/gql/user.types";

export interface StreamListModalProps {
  selectedUser?: User;
  setSelectedUser: (user?: User) => void;
  navigation: NavigationProp<any,any>;
}