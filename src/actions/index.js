import {
  VIEW_INDIVIDUAL_PROFILE,
  EDIT_INDIVIDUAL_PROFILE,
  ADD_INDIVIDUAL_PROFILE
} from "../constants/action-types";

export const viewIndividualProfile = value => ({
  type: VIEW_INDIVIDUAL_PROFILE,
  payload: value
});

export const editIndividualProfile = value => ({
  type: EDIT_INDIVIDUAL_PROFILE,
  payload: value
});

export const addIndividualProfile = value => ({
  type: ADD_INDIVIDUAL_PROFILE,
  payload: value
});
