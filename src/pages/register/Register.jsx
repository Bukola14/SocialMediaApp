import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>sonio social</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            expedita tenetur non aspernatur in eaque, accusamus voluptates ad
            cumque! Praesentium, inventore optio. Vero dolore soluta ipsa
            veritatis repellendus quae optio?
          </p>
          <span>Do you have an account? </span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="Name" />

            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
