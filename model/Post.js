class Post {
  constructor(
    username,
    profilePicUrl,
    imageUrl,
    liked,
    date,
    description,
    likeUsers,
    comments
  ) {
    this.username = username;
    this.profilePicUrl = profilePicUrl;
    this.imageUrl = imageUrl;
    this.liked = liked;
    this.date = date;
    this.description = description;
    this.likeUsers = likeUsers;
    this.comments = comments;
  }
}

export default Post;
