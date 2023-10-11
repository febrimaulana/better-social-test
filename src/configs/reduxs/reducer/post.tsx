import {reducer} from '@constants';

const initialStateRoot = {
  post: [
    {
      id: '1',
      user: {
        name: 'Febri Maulana Yunus',
        image: 'https://picsum.photos/200',
      },
      post: {
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consecteturadipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
        date: 'Mar 27, 2023',
        image: 'https://picsum.photos/200',
        total_comment: 1,
        total_vote: 0,
      },
      commnets: [
        {
          id: 1,
          user: {
            name: 'Usup Suparma',
            image: 'https://picsum.photos/200',
          },
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci',
        },
      ],
    },
    {
      id: '2',
      user: {
        name: 'Maulana',
        image: 'https://picsum.photos/200',
      },
      post: {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: 'Mar 27, 2023',
        image: 'https://picsum.photos/200',
        total_comment: 0,
        total_vote: 0,
      },
      commnets: [],
    },
    {
      id: '3',
      user: {
        name: 'Yunus',
        image: 'https://picsum.photos/200',
      },
      post: {
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consecteturadipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus.',
        date: 'Mar 27, 2023',
        image: 'https://picsum.photos/200',
        total_comment: 0,
        total_vote: 0,
      },
      commnets: [],
    },
  ],
};

const global = (state = initialStateRoot, action: any) => {
  switch (action.type) {
    case reducer.SET_POST:
      return {
        ...state,
        post: action.value,
      };

    default:
      return state;
  }
};

export default global;
