const user = {
  userId: "userId00000001",
  username: "utente1",
  userimage: "https://robohash.org/EmmaDavis.png?size=50x50&set=set1",
  verified: false,
  name: "Nome Utente",
  bio: "Ciao a tutti!",
  followers: 1500,
  followed: 700,
  post: [
    // POST
  ],
};
const post = {
  postId: "postId00000001",
  date: "2023-06-17",
  location: "New York",
  description: "Una passeggiata in montagna",
  hashtags: ["passeggiata", "montagna"],
  images: [
    "https://picsum.photos/800/500?851",
    "https://picsum.photos/800/500?852",
    "https://picsum.photos/800/500?853",
  ],
  likes: [
    {
      userId: "userId00000003",
      when: "2023-06-16",
    },
  ],
  comments: [
    //
  ],
  shared: [
    {
      userId: "userId00000003",
      when: "2023-06-16",
    },
  ],
  saved: [
    {
      userId: "userId00000003",
      when: "2023-06-16",
    },
  ],
};

const story = {
  current: [
    {
      userId: "userId00000001",
      username: "utente1",
      userimage: "https://robohash.org/EmmaDavis.png?size=50x50&set=set1",
      when: "2023-06-16 16:36:07",
      imageUrl: "https://picsum.photos/500/800?851",
      views: ["userId00000003", "userId00000002"],
      reply: ["userId00000003", "userId00000002"],
    },
  ],
  archive: [
    {
      userId: "userId00000001",
      username: "utente1",
      userimage: "https://robohash.org/EmmaDavis.png?size=50x50&set=set1",
      when: "2022-06-16 16:36:07",
      imageUrl: "https://picsum.photos/500/800?851",
      views: ["userId00000004", "userId00000002"],
      reply: ["userId00000004", "userId00000002"],
    },
    {
      userId: "userId00000001",
      username: "utente1",
      userimage: "https://robohash.org/EmmaDavis.png?size=50x50&set=set1",
      when: "2022-06-17 16:36:07",
      imageUrl: "https://picsum.photos/500/800?851",
      views: ["userId00000003", "userId00000002"],
      reply: ["userId00000003", "userId00000002"],
    },
  ],
};

// -------- POSTS ------------
const posts1 = [
  {
    userId: "userId00000001",
    username: "utente1",
    userimage: "https://robohash.org/EmmaDavis.png?size=50x50&set=set1",
    verified: false,
    postId: "postId00000001",
    date: "2023-06-17",
    location: "New York",
    description: "Una passeggiata in montagna",
    hashtags: ["passeggiata", "montagna"],
    images: [
      "https://picsum.photos/800/500?851",
      "https://picsum.photos/800/500?852",
      "https://picsum.photos/800/500?853",
    ],
    likes: [
      {
        userId: "userId00000003",
        when: "2023-06-16",
      },
    ],
    comments: [
      {
        commentId: "commentId00000001",
        userId: "userId00000003",
        username: "utente3",
        userimage: "https://robohash.org/EmmaDavis.png?size=50x50&set=set1",
        comment: "Lorem",
        likes: [
          {
            userId: "userId00000003",
            when: "2023-06-16",
          },
        ],
      },
      {
        commentId: "commentId00000002",
        userId: "userId00000002",
        username: "utente2",
        userimage: "https://robohash.org/JohnSmith.png?size=50x50&set=set1",
        comment: "Ipsum",
        likes: [
          {
            userId: "userId00000002",
            when: "2023-06-17",
          },
          {
            userId: "userId00000003",
            when: "2023-06-17",
          },
        ],
      },
      {
        commentId: "commentId00000003",
        userId: "userId00000001",
        username: "utente1",
        userimage: "https://robohash.org/SarahBrown.png?size=50x50&set=set1",
        comment: "Dolor",
        likes: [
          {
            userId: "userId00000002",
            when: "2023-06-18",
          },
        ],
      },
      {
        commentId: "commentId00000004",
        userId: "userId00000004",
        username: "utente4",
        userimage: "https://robohash.org/JamesWilson.png?size=50x50&set=set1",
        comment: "Sit amet",
        likes: [
          {
            userId: "userId00000001",
            when: "2023-06-19",
          },
          {
            userId: "userId00000003",
            when: "2023-06-19",
          },
        ],
      },
    ],
    shared: [
      {
        userId: "userId00000003",
        when: "2023-06-16",
      },
    ],
    saved: [
      {
        userId: "userId00000003",
        when: "2023-06-16",
      },
    ],
  },
  {
    userId: "userId00000001",
    username: "utente1",
    userimage: "https://robohash.org/EmmaDavis.png?size=50x50&set=set1",
    verified: false,
    postId: "postId00000002",
    date: "2023-06-18",
    location: "Paris",
    description: "Una giornata al museo",
    hashtags: ["museo", "arte"],
    images: [
      "https://picsum.photos/800/500?854",
      "https://picsum.photos/800/500?855",
      "https://picsum.photos/800/500?856",
    ],
    likes: [
      {
        userId: "userId00000002",
        when: "2023-06-17",
      },
      {
        userId: "userId00000003",
        when: "2023-06-17",
      },
    ],
    comments: [
      [
        {
          commentId: "commentId00000005",
          userId: "userId00000002",
          username: "utente2",
          userimage: "https://robohash.org/JohnSmith.png?size=50x50&set=set1",
          comment: "Adipiscing elit",
          likes: [
            {
              userId: "userId00000003",
              when: "2023-06-20",
            },
          ],
        },
        {
          commentId: "commentId00000006",
          userId: "userId00000004",
          username: "utente4",
          userimage: "https://robohash.org/JamesWilson.png?size=50x50&set=set1",
          comment: "Vivamus scelerisque",
          likes: [
            {
              userId: "userId00000001",
              when: "2023-06-21",
            },
            {
              userId: "userId00000002",
              when: "2023-06-21",
            },
            {
              userId: "userId00000003",
              when: "2023-06-21",
            },
          ],
        },
        {
          commentId: "commentId00000007",
          userId: "userId00000001",
          username: "utente1",
          userimage: "https://robohash.org/SarahBrown.png?size=50x50&set=set1",
          comment: "Nulla consectetur",
          likes: [
            {
              userId: "userId00000003",
              when: "2023-06-22",
            },
          ],
        },
        {
          commentId: "commentId00000008",
          userId: "userId00000003",
          username: "utente3",
          userimage: "https://robohash.org/EmmaDavis.png?size=50x50&set=set1",
          comment: "Fusce feugiat",
          likes: [
            {
              userId: "userId00000001",
              when: "2023-06-23",
            },
            {
              userId: "userId00000002",
              when: "2023-06-23",
            },
          ],
        },
      ],
    ],
    shared: [],
    saved: [],
  },
  {
    userId: "userId00000001",
    username: "utente1",
    userimage: "https://robohash.org/EmmaDavis.png?size=50x50&set=set1",
    verified: false,
    postId: "postId00000003",
    date: "2023-06-19",
    location: "London",
    description: "Un tè pomeridiano",
    hashtags: ["te", "pomeridiano"],
    images: [
      "https://picsum.photos/800/500?857",
      "https://picsum.photos/800/500?858",
      "https://picsum.photos/800/500?859",
    ],
    likes: [
      {
        userId: "userId00000001",
        when: "2023-06-18",
      },
    ],
    comments: [
      {
        commentId: "commentId00000009",
        userId: "userId00000001",
        username: "utente1",
        userimage: "https://robohash.org/SarahBrown.png?size=50x50&set=set1",
        comment: "Sed at ultricies magna",
        likes: [
          {
            userId: "userId00000002",
            when: "2023-06-24",
          },
          {
            userId: "userId00000003",
            when: "2023-06-24",
          },
        ],
      },
      {
        commentId: "commentId00000010",
        userId: "userId00000003",
        username: "utente3",
        userimage: "https://robohash.org/EmmaDavis.png?size=50x50&set=set1",
        comment: "Pellentesque habitant morbi",
        likes: [
          {
            userId: "userId00000001",
            when: "2023-06-25",
          },
        ],
      },
      {
        commentId: "commentId00000011",
        userId: "userId00000004",
        username: "utente4",
        userimage: "https://robohash.org/JamesWilson.png?size=50x50&set=set1",
        comment: "Cras dapibus",
        likes: [
          {
            userId: "userId00000002",
            when: "2023-06-26",
          },
          {
            userId: "userId00000003",
            when: "2023-06-26",
          },
        ],
      },
      {
        commentId: "commentId00000012",
        userId: "userId00000002",
        username: "utente2",
        userimage: "https://robohash.org/JohnSmith.png?size=50x50&set=set1",
        comment: "Mauris vel nisl",
        likes: [
          {
            userId: "userId00000001",
            when: "2023-06-27",
          },
        ],
      },
    ],
    shared: [
      {
        userId: "userId00000002",
        when: "2023-06-18",
      },
    ],
    saved: [],
  },
  {
    userId: "userId00000001",
    username: "utente1",
    userimage: "https://robohash.org/EmmaDavis.png?size=50x50&set=set1",
    verified: false,
    postId: "postId00000004",
    date: "2023-06-20",
    location: "Rome",
    description: "Una serata romantica",
    hashtags: ["romantico", "serata"],
    images: [
      "https://picsum.photos/800/500?860",
      "https://picsum.photos/800/500?861",
      "https://picsum.photos/800/500?862",
    ],
    likes: [],
    comments: [
      {
        commentId: "commentId00000013",
        userId: "userId00000003",
        username: "utente3",
        userimage: "https://robohash.org/EmmaDavis.png?size=50x50&set=set1",
        comment: "Vestibulum ante ipsum",
        likes: [
          {
            userId: "userId00000001",
            when: "2023-06-28",
          },
          {
            userId: "userId00000002",
            when: "2023-06-28",
          },
        ],
      },
      {
        commentId: "commentId00000014",
        userId: "userId00000004",
        username: "utente4",
        userimage: "https://robohash.org/JamesWilson.png?size=50x50&set=set1",
        comment: "Aliquam consectetur",
        likes: [
          {
            userId: "userId00000001",
            when: "2023-06-29",
          },
        ],
      },
      {
        commentId: "commentId00000015",
        userId: "userId00000001",
        username: "utente1",
        userimage: "https://robohash.org/SarahBrown.png?size=50x50&set=set1",
        comment: "Fusce at mauris",
        likes: [
          {
            userId: "userId00000002",
            when: "2023-06-30",
          },
          {
            userId: "userId00000003",
            when: "2023-06-30",
          },
        ],
      },
      {
        commentId: "commentId00000016",
        userId: "userId00000002",
        username: "utente2",
        userimage: "https://robohash.org/JohnSmith.png?size=50x50&set=set1",
        comment: "Donec dignissim",
        likes: [
          {
            userId: "userId00000001",
            when: "2023-07-01",
          },
          {
            userId: "userId00000003",
            when: "2023-07-01",
          },
        ],
      },
    ],
    shared: [],
    saved: [
      {
        userId: "userId00000001",
        when: "2023-06-19",
      },
      {
        userId: "userId00000003",
        when: "2023-06-19",
      },
    ],
  },
  {
    userId: "userId00000001",
    username: "utente1",
    userimage: "https://robohash.org/EmmaDavis.png?size=50x50&set=set1",
    verified: false,
    postId: "postId00000005",
    date: "2023-06-21",
    location: "Tokyo",
    description: "Esplorando la città",
    hashtags: ["Tokyo", "viaggio"],
    images: [
      "https://picsum.photos/800/500?863",
      "https://picsum.photos/800/500?864",
      "https://picsum.photos/800/500?865",
    ],
    likes: [
      {
        userId: "userId00000002",
        when: "2023-06-20",
      },
      {
        userId: "userId00000003",
        when: "2023-06-20",
      },
    ],
    comments: [],
    shared: [],
    saved: [
      {
        userId: "userId00000002",
        when: "2023-06-20",
      },
    ],
  },
  {
    userId: "userId00000001",
    username: "utente1",
    userimage: "https://robohash.org/EmmaDavis.png?size=50x50&set=set1",
    verified: false,
    postId: "postId00000006",
    date: "2023-06-22",
    location: "Barcelona",
    description: "Una giornata in spiaggia",
    hashtags: ["spiaggia", "estate"],
    images: [
      "https://picsum.photos/800/500?866",
      "https://picsum.photos/800/500?867",
      "https://picsum.photos/800/500?868",
    ],
    likes: [],
    comments: [],
    shared: [
      {
        userId: "userId00000001",
        when: "2023-06-21",
      },
    ],
    saved: [],
  },
  {
    userId: "userId00000001",
    username: "utente1",
    userimage: "https://robohash.org/EmmaDavis.png?size=50x50&set=set1",
    verified: false,
    postId: "postId00000007",
    date: "2023-06-23",
    location: "Sydney",
    description: "Un tramonto mozzafiato",
    hashtags: ["tramonto", "paesaggio"],
    images: [
      "https://picsum.photos/800/500?869",
      "https://picsum.photos/800/500?870",
      "https://picsum.photos/800/500?871",
    ],
    likes: [
      {
        userId: "userId00000003",
        when: "2023-06-22",
      },
    ],
    comments: [],
    shared: [
      {
        userId: "userId00000002",
        when: "2023-06-22",
      },
    ],
    saved: [
      {
        userId: "userId00000003",
        when: "2023-06-22",
      },
    ],
  },
  {
    userId: "userId00000001",
    username: "utente1",
    userimage: "https://robohash.org/EmmaDavis.png?size=50x50&set=set1",
    verified: false,
    postId: "postId00000008",
    date: "2023-06-24",
    location: "Berlin",
    description: "Un giro in bicicletta",
    hashtags: ["bicicletta", "avventura"],
    images: [
      "https://picsum.photos/800/500?872",
      "https://picsum.photos/800/500?873",
      "https://picsum.photos/800/500?874",
    ],
    likes: [],
    comments: [],
    shared: [
      {
        userId: "userId00000001",
        when: "2023-06-23",
      },
      {
        userId: "userId00000002",
        when: "2023-06-23",
      },
    ],
    saved: [],
  },
];

// -------- COMMENTI  --------

const commentiPost4 = [
  {
    commentId: "commentId00000013",
    userId: "userId00000003",
    username: "utente3",
    userimage: "https://robohash.org/EmmaDavis.png?size=50x50&set=set1",
    comment: "Vestibulum ante ipsum",
    likes: [
      {
        userId: "userId00000001",
        when: "2023-06-28",
      },
      {
        userId: "userId00000002",
        when: "2023-06-28",
      },
    ],
  },
  {
    commentId: "commentId00000014",
    userId: "userId00000004",
    username: "utente4",
    userimage: "https://robohash.org/JamesWilson.png?size=50x50&set=set1",
    comment: "Aliquam consectetur",
    likes: [
      {
        userId: "userId00000001",
        when: "2023-06-29",
      },
    ],
  },
  {
    commentId: "commentId00000015",
    userId: "userId00000001",
    username: "utente1",
    userimage: "https://robohash.org/SarahBrown.png?size=50x50&set=set1",
    comment: "Fusce at mauris",
    likes: [
      {
        userId: "userId00000002",
        when: "2023-06-30",
      },
      {
        userId: "userId00000003",
        when: "2023-06-30",
      },
    ],
  },
  {
    commentId: "commentId00000016",
    userId: "userId00000002",
    username: "utente2",
    userimage: "https://robohash.org/JohnSmith.png?size=50x50&set=set1",
    comment: "Donec dignissim",
    likes: [
      {
        userId: "userId00000001",
        when: "2023-07-01",
      },
      {
        userId: "userId00000003",
        when: "2023-07-01",
      },
    ],
  },
];
