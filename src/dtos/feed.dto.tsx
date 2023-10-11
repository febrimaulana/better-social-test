export interface FeedDataDto {
  id: string;
  user: {
    name: string;
    image: string;
  };
  post: {
    content: string;
    date: string;
    image: string;
    total_comment: number;
    total_vote: number;
  };
  commnets: {
    id: number;
    user: {
      name: string;
      image: string;
    };
    comment: string;
  }[];
}

export interface FeedCommentDto {
  id: number;
  user: {
    name: string;
    image: string;
  };
  comment: string;
}
