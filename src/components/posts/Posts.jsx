import "./posts.scss";
import Post from "../post/Post";

const posts = [
  {
    id: 1,
    name: "Jane Doe",
    userId: 1,
    profilePic: "/src/assets/pexels-ron-lach-9786318.jpg",
    desc: "lorem ipsum dolor sit amet consectetur adipiscicing elit",
    img: "/src/assets/camilo-jimenez-qZenO_gQ7QA-unsplash.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    userId: 2,
    profilePic: "/src/assets/pexels-ron-lach-9786318.jpg",
    desc: "tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim",
  },
];

const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
