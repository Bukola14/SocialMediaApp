import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

//temporary comments
const comments = [
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
const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>send</button>
      </div>
      {comments.map((comment) => {
        return (
          <div className="comment" key={comment.id}>
            <img src={comment.profilePic} alt="" />
            <div className="info">
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span className="date">1 hour ago</span>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
