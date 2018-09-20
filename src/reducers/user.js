import { generateUser } from "../static-data";
import {
  VIEW_INDIVIDUAL_PROFILE,
  EDIT_INDIVIDUAL_PROFILE
} from "../constants/action-types";

export default function user(state = generateUser(), action) {
  switch (action.type) {
    case VIEW_INDIVIDUAL_PROFILE:
      return action.payload;
    case EDIT_INDIVIDUAL_PROFILE:
      return action.payload;
    default:
      return state;
  }
}
