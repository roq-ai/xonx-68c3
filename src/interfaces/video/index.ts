import { CommentInterface } from 'interfaces/comment';
import { LikeInterface } from 'interfaces/like';
import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface VideoInterface {
  id?: string;
  title: string;
  content: string;
  client_id?: string;
  created_at?: any;
  updated_at?: any;
  comment?: CommentInterface[];
  like?: LikeInterface[];
  client?: ClientInterface;
  _count?: {
    comment?: number;
    like?: number;
  };
}

export interface VideoGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  client_id?: string;
}
