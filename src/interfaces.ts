interface Url {
  url: "https://t.co/MsxRuxNcCy"; // shortened url
  expanded_url: "https://twitter.com/edjeff/status/1480567183499567104"; // actual url
  display_url: string; // truncated url
  indices: ["13", "36"];
}

export interface Entities {
  hashtags: any[];
  symbols: any[];
  urls: Url[];
  user_mentions: any[];
  media: [
    {
      expanded_url: string;
      indices: number[];
      url: string;
      media_url: string;
      id_str: string;
      id: string;
      media_url_https: string;
      type: string;
      display_url: string;
      sizes: {
        small: {
          w: number;
          h: number;
        };
      };
    }
  ];
}

export interface Tweet {
  created_at: string;
  extended_entities: Entities;
  entities: Entities;
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
