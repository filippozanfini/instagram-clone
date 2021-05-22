import Story from "../model/Story";
import Post from "../model/Post";

export const STORIES = [
  new Story(
    "Your Story",
    "https://filippozanfini.com/static/media/profilepic.06a21bbb.jpg",
    false,
    true
  ),
  new Story(
    "murphy7",
    "https://images.unsplash.com/photo-1581391528803-54be77ce23e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    false,
    false
  ),
  new Story(
    "raineyors",
    "https://images.unsplash.com/photo-1590955256716-d7676e3efbf1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    false,
    false
  ),
  new Story(
    "lillys2000",
    "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    false,
    false
  ),
  new Story(
    "photosbyen",
    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    true,
    false
  ),
  new Story(
    "yerme203",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    true,
    false
  ),
  new Story(
    "louishwk",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    true,
    false
  ),
];

export const POSTS = [
  new Post(
    "sammyjones_23",
    "https://images.unsplash.com/photo-1539694023178-80dde47136c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1563127830-b94f0c127c52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    true,
    "NOV 12",
    "Beautiful day! 🔥",
    [
      {
        username: "samanthuhh12",
        profilePic:
          "https://images.unsplash.com/photo-1582152629442-4a864303fb96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      },
      {
        username: "murphy7",
        profilePic:
          "https://images.unsplash.com/photo-1581391528803-54be77ce23e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      },
      {
        username: "louishwk",
        profilePic:
          "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
    ],
    [
      { username: "_mikayla_law96", comment: "Great shot! 😍" },
      {
        username: "louishwk",
        comment: "😎",
      },
    ]
  ),
  new Post(
    "photosbyen",
    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    "https://images.unsplash.com/photo-1478480154178-88540b2be3b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=882&q=80",
    false,
    "NOV 12",
    "What a view! 😍",
    [
      {
        username: "raineyors",
        profilePic:
          "https://images.unsplash.com/photo-1590955256716-d7676e3efbf1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      },
      {
        username: "murphy7",
        profilePic:
          "https://images.unsplash.com/photo-1581391528803-54be77ce23e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      },
      {
        username: "louishwk",
        profilePic:
          "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
    ],
    [{ username: "lillys2000", comment: "Incredible 😱" }]
  ),
];
