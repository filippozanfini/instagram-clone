class Post {
  constructor(
    id,
    username,
    profilePicUrl,
    imageUrl,
    liked,
    date,
    likeUsers,
    comments
  ) {
    this.id = id;
    this.username = username;
    this.profilePicUrl = profilePicUrl;
    this.imageUrl = imageUrl;
    this.liked = liked;
    this.date = date;
    this.likeUsers = likeUsers;
    this.comments = comments;
  }
}

export default Post;
