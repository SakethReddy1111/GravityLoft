import { FAQ } from "./faq";
import { Wrapper } from "./mainCss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Main = () => {
  return (
    <Wrapper>
      <div id="header">
        <div id="logo">
          <img
            src="https://lh3.googleusercontent.com/hJFiW75UIa45s-d6poXWU9_Pkp92PRoKyErekydWBjKh9WIspGLj4jEa1RU6bWjYsLywULZmWTWj1ZoLZnbTQYVsWM7QFS-2FmuuXdsCqajH2BtCyUGVQKVrRNW5IybY_JkzMvShIg=w2400"
            alt=""
            width={"43px"}
            height={"42px"}
          />
        </div>
        <div id="h1">
          <a href="/">Contact Us</a>
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>

      <div id="div1">
        <div className="class101">
          <h2>
            <span>We are</span>
            <br />
            the best way to connect with Industry Experts
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="class102">
          <h3>
            Get Trial version <br /> to find experts
          </h3>
          <div className="class103">
            <label>Full Name</label>
            <br />
            <input type="text" name="" id="" />
            <br />
            <label>Email Address</label>
            <br />
            <input type="text" />
            <br />
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <h2 className="headings">Expert Cloud</h2>
      <p className="followers">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <div className="class2">
        <div className="class21">
          <div>
            <h2>Search.</h2>
            <h3>Top Experts with advanced search.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="/">Get started </a>
            <ArrowForwardIosIcon
              className="class210"
              height={"50px"}
              fontSize={"20px"}
              color={"#5746ec"}
            />
          </div>
        </div>
        <div className="class22">
          <div className="class221"></div>
          <div className="class222"></div>
          <div className="class223">
            <img
              src="https://lh3.googleusercontent.com/8zpJEjHEwGl85lGXyK4k8vPX0KUwiL0jkDc5Rsh0C0A1vnpKTL-xzTcT6rwUl5reFL_t54omAj22U22fE5h2-pc3L7FbTTYLE84bYuXwPNgviY-FMw8AskM8NeRgVvSkyQG3NgPG-g=w2400"
              alt=""
              width={"80%"}
              height={"100%"}
            />
          </div>
        </div>
      </div>
      <div className="class2">
        <div className="class22">
          <div className="class225"></div>
          <div className="class224"></div>
          <div className="class223">
            <img
              src="https://lh3.googleusercontent.com/E9mXfp99psUdUAIZInlKv2iatf0kuvFyG_0b2dN-f8BJiY2QorR7gRskVSuwdY5SkLEoScKZteFi7uCftI9AVfyZ2yS_Ref33jYDH8LbPI3ugHVRy6OVr27WY3FBVHzwXTHIM367Dw=w2400"
              alt=""
              width={"80%"}
              height={"100%"}
            />
          </div>
        </div>
        <div className="class21">
          <div>
            <h2>Consult. </h2>
            <h3>with Top Industry Experts</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="/">Get started</a>
            <ArrowForwardIosIcon
              className="class210"
              height={"50px"}
              fontSize={"20px"}
              color={"5746ec"}
            />
          </div>
        </div>
      </div>
      <div className="class2">
        <div className="class21">
          <div>
            <h2>Collaborate.</h2>
            <h3>with Experts is easy now.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="/">Get started</a>
            <ArrowForwardIosIcon
              className="class210"
              height={"50px"}
              fontSize={"20px"}
              color={"5746ec"}
            />
          </div>
        </div>
        <div className="class22">
          <div className="class221"></div>
          <div className="class222"></div>
          <div className="class223">
            <img
              src="https://lh3.googleusercontent.com/4kZHWEfcXsttn83PyknbFaAT3WmvAxo6yO3LjJIwzgIY7FErEjEBs8Qb661JRQhFasO-nSm6_W-eCnwdJBpESzYPS-CSErWpDpRrFJpa27LU7K12u0Xn56UgJPMcfnZB-v7tM_vV1A=w2400"
              alt=""
              width={"80%"}
              height={"100%"}
            />
          </div>
        </div>
      </div>
      <h2 className="headings">FAQ</h2>
      <p className="followers">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <div className="faqs">
        <FAQ />
      </div>
      <div className="class9">
        <div className="class90"></div>
        <div className="class91"></div>
        <div className="class93"></div>

        <div className="class92">
          <h2>
            Contact us, If you <br /> facing any problems
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Contact Now</button>
        </div>
      </div>
      <div className="class7">
        <div className="class70">
          <img
            src="https://lh3.googleusercontent.com/hJFiW75UIa45s-d6poXWU9_Pkp92PRoKyErekydWBjKh9WIspGLj4jEa1RU6bWjYsLywULZmWTWj1ZoLZnbTQYVsWM7QFS-2FmuuXdsCqajH2BtCyUGVQKVrRNW5IybY_JkzMvShIg=w2400"
            alt=""
            width={"51.19px"}
            height={"50px"}
          />
          <p className="class701">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>
        <div className="class71">
          <div>
            <h3>Account</h3>
            <p>Login</p>
            <p>Signup</p>
          </div>
          <div>
            <h3>Company</h3>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>Compliance </p>
          </div>
          <div>
            <h3>Support</h3>
            <p>Contact Us</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>
      <div className="class801">Copyright © 2022 by Techrefic</div>
    </Wrapper>
  );
};
