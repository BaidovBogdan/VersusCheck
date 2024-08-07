import facebook from '../../../../public/facebook-box-fill123.png';
import instagram from '../../../../public/instagram-fill123.png';
import linkedin from '../../../../public/linkedin-box-fill123.png';
import reddit from '../../../../public/reddit-fill321.png';
import twitter from '../../../../public/twitter-fill321.png';

export default function Footer() {
  return (
    <>
      <div className="md:p-24">
        <div className="text-left p-4 md:flex justify-between">
          <div className="sm:flex justify-between md:gap-8">
            <div className="sm:flex flex-col">
              <b>Our other products</b>
              <br />
              <p>Memnio</p>
              <p>Eske appointments</p>
              <p>MySpaces</p>
              <p>Tymesyncr</p>
            </div>
            <div className="sm:flex flex-col">
              <b>Company</b>
              <br />
              <p>About us</p>
              <p>Terms of Service</p>
              <p>Cookies</p>
            </div>
          </div>
          <br />
          <br />
          <div className="flex sm:flex-col">
            <div className="flex justify-start">
              <b>Social Media</b>
            </div>
            <br />
            <div className="flex justify-start gap-5">
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <img src={reddit} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
        <p className="text-center">© 2024 Versus Check. All rights reserved.</p>
      </div>
    </>
  );
}
