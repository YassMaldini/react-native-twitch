import RootState from '../store.types';

export const profileSelector = ({ authentication: reducer }: RootState) => reducer.profile;

export const secretsSelector = ({ authentication: reducer }: RootState) => reducer.secrets;
