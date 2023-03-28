import {IFeedResponse} from '../feed/feedResponse.interface';

export default interface FeedStateInterface {
  isLoading: boolean;
  error: string | null;
  data: IFeedResponse | null;
}
