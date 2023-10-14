import {ReducerConstant} from '@constants';
import {FeedDataDto} from '@dtos';

export default class PostAction {
  static incVote = (data: FeedDataDto, post: FeedDataDto[]) => {
    const newData = post.map((item: FeedDataDto) => {
      if (item.id === data.id) {
        return {
          ...item,
          post: {
            ...item.post,
            total_vote: item.post.total_vote + 1,
          },
        };
      }
      return item;
    });
    return {type: ReducerConstant.SET_POST, value: newData};
  };

  static downVote = (data: FeedDataDto, post: FeedDataDto[]) => {
    if (data.post.total_vote < 1) {
      return {type: ReducerConstant.SET_POST, value: post};
    }

    const newData = post.map((item: FeedDataDto) => {
      if (item.id === data.id) {
        return {
          ...item,
          post: {
            ...item.post,
            total_vote: item.post.total_vote - 1,
          },
        };
      }
      return item;
    });
    return {type: ReducerConstant.SET_POST, value: newData};
  };

  static addComment = (
    data: FeedDataDto,
    post: FeedDataDto[],
    comment: string,
  ) => {
    const newData = post.map((item: FeedDataDto) => {
      if (item.id === data.id) {
        return {
          ...item,
          post: {
            ...item.post,
            total_comment: item.post.total_comment + 1,
          },
          commnets: [
            ...item.commnets,
            {
              id: item.commnets.length + 1,
              user: {
                name: 'Usup Suparma',
                image: 'https://picsum.photos/200',
              },
              comment: comment,
            },
          ],
        };
      }
      return item;
    });
    return {type: ReducerConstant.SET_POST, value: newData};
  };
}
