import React from "react";

function Info() {
  return (
    <div className="intro p-2">
      <img
        className="introImg"
        src="img/dev.jpg"
        height="210px"
        width="210px"
        alt=""
      ></img>
      <section className="introSection">
        <h2>Dev Patel</h2>
        <p>
          I am Dev Patel, CEO at Microsoft. I have experience in many fields of
          IT and experienced as interviewer with different field’s student.{" "}
        </p>
        <h5>Let's Connect</h5>
        <ul>
          <li>
            <span>
              <img src="img/gmail.png" alt=""></img>
            </span>
            devpatel@gmail.com
          </li>
          <li>
            <span>
              <img src="img/linkedin.png" alt=""></img>
            </span>
            /devpatel/
          </li>
          <li>
            <span>
              <img src="img/instagram.png" alt=""></img>
            </span>
            dev_patel_
          </li>
          <li>
            <span>
              <img src="img/pin.png" alt=""></img>
            </span>
            Ahmedabad
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Info;

{
  /* <div class="col col-xl-3 col-lg-3 col-md-4 col-sm intro">
                <img class="introImg" src="img/dev.jpg" height="210px" width="210px" alt="">
                <section class="introSection">
                    <h2>Dev Patel</h2>
                    <p>I am Dev Patel, CEO at Microsoft. I have experience in many fields of IT and experienced as interviewer with different field’s student. </p>
                    <h5>Let's Connect</h5>
                    <ul>
                        <li><span><img src="img/gmail.png" alt=""></span> devpatel@gmail.com</li>
                        <li><span><img src="img/linkedin.png" alt=""></span> /devpatel/</li>
                        <li><span><img src="img/instagram.png" alt=""></span> dev_patel_</li>
                        <li><span><img src="img/pin.png" alt=""></span> Ahmedabad</li>
                    </ul>
                </section>
            </div> */
}
