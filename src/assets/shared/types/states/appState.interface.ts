import AuthStateInterface from './authState.interface';
import FeedStateInterface from './feedState.inteface';
import {PopularTagsStateInterface} from './ITagsState';
import ArticleStateInterface from './articleState.interface';
import {CreateArticleStateInterface} from './createArticleState.interface';
import EditArticleStateInterface from './editArticle.state';
import SettingsStateInterface from './settingsState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
  createArticle: CreateArticleStateInterface;
  editArticle: EditArticleStateInterface;
  settings: SettingsStateInterface;
}
