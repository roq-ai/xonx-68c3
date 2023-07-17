import { UserInterface } from 'interfaces/user';
import { VideoInterface } from 'interfaces/video';
import { GetQueryInterface } from 'interfaces';

export interface LikeInterface {
  id?: string;
  user_id?: string;
  video_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  video?: VideoInterface;
  _count?: {};
}

export interface LikeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  video_id?: string;
}
