import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";
const stories = [
  {
    id: 1,
    name: "john doe",
    img: "/src/assets/pexels-ron-lach-9786318.jpg",
  },
  {
    id: 1,
    name: "john doe",
    img: "/src/assets/pexels-ron-lach-9786318.jpg",
  },
  {
    id: 2,
    name: "john doe",
    img: "/src/assets/pexels-ron-lach-9786318.jpg",
  },
  {
    id: 3,
    name: "john doe",
    img: "/src/assets/pexels-ron-lach-9786318.jpg",
  },
  {
    id: 4,
    name: "john doe",
    img: "/src/assets/pexels-ron-lach-9786318.jpg",
  },
];
const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt={story.name} />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
