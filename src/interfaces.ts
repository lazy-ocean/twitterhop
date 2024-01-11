export interface Tweet {
  created_at: string;
  entities: {
    hashtags: any[];
    symbols: any[];
    urls: any[];
    user_mentions: any[];
  };
  favorite_count: string;
  favorited: boolean;
  full_text: string;
  id: string;
  id_str: string;
  in_reply_to_screen_name: string;
  in_reply_to_status_id: string;
  in_reply_to_status_id_str: string;
  in_reply_to_user_id: string;
  in_reply_to_user_id_str: string;
  retweet_count: number;
  retweeted: boolean;
}
