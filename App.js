import './LoginUi.css';
import profile from "./image/a.jpg";
import email from "./image/email.jpg";
import pass from "./image/pass.png";
function LoginUi() {
  return (
    <form action="" method="POST">
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h2>Login Page</h2>
           <div >
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user name" className="input"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="password" className="name"/>
           </div>

           <div>
            <p className="forgot-password">
              <a href="#">Forgot password?</a>
            </p>
           </div>

          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              Don't have an account? <a href="#">Create a new account</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
    </form>
  );
}

export default LoginUi;

