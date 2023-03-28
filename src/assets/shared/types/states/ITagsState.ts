import {PopularTagsType} from '../article/PopularTagsType';

export interface PopularTagsStateInterface {
  data: PopularTagsType[] | null;
  error: string | null;
  isLoading: boolean;
}
