// import './App.scss';
import "./sass/main.scss";
import Hero from "./components/HeroComponents";
import StartUps from "./components/startUps";

//VO
import Sports from "./vo/sports.png";
import Fintech from "./vo/fintech.png";
import Endowment from "./vo/andowment.png";
import Culture from "./vo/culture.png";

//logod
import hatem from "./logos/hatem.png";
import hathmad from "./logos/hathmad.png";
import oqod from "./logos/oqod.png";
import powerhaya from "./logos/powerhaya.png";
import grintahub from "./logos/grintahub.png";
import fitcycle from "./logos/fitcycle.png";
import eProcure from "./logos/e-procure.png";
import darahim from "./logos/darahim.png";
import athr from "./logos/athr.png";
import FourUp from "./logos/4up.png";
import naseej from "./logos/naseej.png";
import teamUp from "./logos/teamup.png";

// logo, website, pitchDeck, pitchVideo, contactTeam
function App() {
  return (
    <div className="home">
      <Hero />

      <img src={Sports} width="100%" />
      <div
        style={{
          alignSelf: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StartUps
          logo={teamUp}
          website={"https://teamup.technology/"}
          pitchDeck={
            "https://drive.google.com/file/d/1cQVkRq-r_KzJU9yDMjI0U5mneCv2o0Nk/view"
          }
          pitchVideo={
            "https://drive.google.com/file/d/15AuupwDLM3UCiUvXjyOV4dFt8-fVa_T1/view"
          }
          contactTeam={
            "https://docs.google.com/forms/d/e/1FAIpQLSfyZdID9PefbPVGLAC9W8dTDhaKafqsRkPS_sfubSsbKwQSag/viewform"
          }
          title={"Team Up"}
          content={
            "TeamUp is an event management platform for creating and sharing entertainment and sport hangouts and competitions."
          }
        />
        <StartUps
          logo={FourUp}
          website={"https://www.4upapp.com/"}
          pitchDeck={
            "https://drive.google.com/file/d/150gnQQvAUS6OJaqivoCTcEeB_SHUzcwK/view"
          }
          pitchVideo={
            "https://drive.google.com/file/d/14apWHSQ60UNZJciWD9UmPSQt5oXj2FxJ/view"
          }
          contactTeam={
            "https://docs.google.com/forms/d/e/1FAIpQLSfyZdID9PefbPVGLAC9W8dTDhaKafqsRkPS_sfubSsbKwQSag/viewform"
          }
          title={"4UP"}
          content={
            "4Up is a fitness app that helps women achieve their fitness goals."
          }
        />
        <StartUps
          logo={fitcycle}
          website={"http://www.thefitcycle.co.uk/"}
          pitchDeck={
            "https://drive.google.com/file/d/1-u2Kqn6NZbg_GYk4iHy_N2yDktjtISC-/view"
          }
          pitchVideo={
            "https://drive.google.com/file/d/1Fk_j5HhnGMHTNIWprEXOgMtt6TjRBGRK/view"
          }
          contactTeam={
            "https://docs.google.com/forms/d/e/1FAIpQLSfyZdID9PefbPVGLAC9W8dTDhaKafqsRkPS_sfubSsbKwQSag/viewform"
          }
          title={"The Fit Cycle"}
          content={
            "A digital solution that harnesses cycling to provide users with a personalised and adaptible training plan, which inspires people to lead active, healthy, lifestyles."
          }
        />
        <StartUps
          logo={grintahub}
          website={"https://grintahub.com/"}
          pitchDeck={
            "https://docs.google.com/presentation/d/1AGnOekXapLUF_HPYhUaBKeR3ah2BploM/edit?usp=sharing&ouid=101514673328986369771&rtpof=true&sd=true"
          }
          pitchVideo={
            "https://drive.google.com/file/d/1uper2cmmJ-LWy_FDoaZW6MKUbsou8rFL/view"
          }
          contactTeam={
            "https://docs.google.com/forms/d/e/1FAIpQLSfyZdID9PefbPVGLAC9W8dTDhaKafqsRkPS_sfubSsbKwQSag/viewform"
          }
          title={"Grinta Hub"}
          content={
            "Online platform for exchanging and reselling online tickets."
          }
        />
      </div>

      <img src={Fintech} width="100%" />
      <div
        style={{
          alignSelf: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StartUps
          logo={hatem}
          website={"https://www.hatem.com.sa/"}
          pitchDeck={
            "https://drive.google.com/file/d/1D2cBfrED-b7GOwr7b6FbSEqG4cGewoOc/view"
          }
          pitchVideo={
            "https://drive.google.com/file/d/1lrGoXuvIdE8ydOJdyE21ODw7_QDFbcMA/view"
          }
          contactTeam={
            "https://docs.google.com/forms/d/e/1FAIpQLSfyZdID9PefbPVGLAC9W8dTDhaKafqsRkPS_sfubSsbKwQSag/viewform"
          }
          title={"Hatem Kids Wallet"}
          content={
            "Children's E-wallet designed for families to teach and grow financially smart kids. "
          }
        />
        <StartUps
          logo={darahim}
          website={"https://drah.im/Account/Login#/"}
          pitchDeck={
            "https://drive.google.com/file/d/1aImkcPjghg8_XPQInqd7FxVCL760_408/view"
          }
          pitchVideo={
            "https://drive.google.com/file/d/1q4EGoGKdndoLQHme3SvjJoVlrMDbp_2I/view"
          }
          contactTeam={
            "https://docs.google.com/forms/d/e/1FAIpQLSfyZdID9PefbPVGLAC9W8dTDhaKafqsRkPS_sfubSsbKwQSag/viewform"
          }
          title={"Drahim"}
          content={"Integrate with banks to track your finances.        "}
        />
        <StartUps
          logo={oqod}
          website={"https://oqod.co/"}
          pitchDeck={
            "https://drive.google.com/file/d/1TeCFPYobSwZGyQckIsZKK6Ths_09j6sz/view"
          }
          pitchVideo={
            "https://drive.google.com/file/d/1lzX2jB81FgrB3UGtOk8Q9CoLSv1u58g1/view"
          }
          contactTeam={
            "https://docs.google.com/forms/d/e/1FAIpQLSfyZdID9PefbPVGLAC9W8dTDhaKafqsRkPS_sfubSsbKwQSag/viewform"
          }
          title={"Oqod"}
          content={
            "Smart contract development & management platform for tokenized securities."
          }
        />
        <StartUps
          logo={athr}
          website={"https://athr.ai/"}
          pitchDeck={
            "https://drive.google.com/file/d/1ko7xcgv94BfUj1dbc-cpA9ATj8wp7DpO/view"
          }
          pitchVideo={
            "https://drive.google.com/file/d/1Tk7IKzU3Wk2-fE_J_p2z2dPfy3Op8Tvv/view"
          }
          contactTeam={
            "https://docs.google.com/forms/d/e/1FAIpQLSfyZdID9PefbPVGLAC9W8dTDhaKafqsRkPS_sfubSsbKwQSag/viewform"
          }
          title={"Athr"}
          content={
            "Digital KYC and direct onboarding for banks and financial institutions. "
          }
        />
        <StartUps
          logo={eProcure}
          website={"https://e-procure.net/"}
          pitchDeck={
            "https://drive.google.com/file/d/1Kkmf1Q0ZXNCrP7QPBHFMBLtH-rrxGjqW/view"
          }
          pitchVideo={
            "https://drive.google.com/file/d/14Or8daJiQzu9cKxyZNnei3GSJcyX3l9H/view"
          }
          contactTeam={
            "https://docs.google.com/forms/d/e/1FAIpQLSfyZdID9PefbPVGLAC9W8dTDhaKafqsRkPS_sfubSsbKwQSag/viewform"
          }
          title={"e-Procure"}
          content={
            "e-Procure is a Blockchain B2B Platform offering an integrated SaaS enabled B2B Marketplace for business buyers and suppliers."
          }
        />
      </div>

      <img src={Culture} width="100%" />
      <div
        style={{
          alignSelf: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StartUps
          logo={naseej}
          website={"https://naseej.market/en/"}
          pitchDeck={
            "https://drive.google.com/file/d/1c11jgRhtkDuyXbVzpyhTuN_xlbgM-Pi0/view"
          }
          pitchVideo={
            "https://drive.google.com/file/d/1PI_EY0KE0K1FfthoLZVuIWE5Axg3B-co/view"
          }
          contactTeam={
            "https://docs.google.com/forms/d/e/1FAIpQLSfyZdID9PefbPVGLAC9W8dTDhaKafqsRkPS_sfubSsbKwQSag/viewform"
          }
          title={"Naseej Market"}
          content={
            "Naseej Market is a creative online marketplace, connecting buyers to local independent designers, artists and home-based businesses selling their unique handcrafted products. "
          }
        />
        <StartUps
          logo={hathmad}
          website={"https://www.hathmad.com/"}
          pitchDeck={
            "https://drive.google.com/file/d/16ym9_N6-Hzr_gbwxeRazryuDQ-4_tm_K/view"
          }
          pitchVideo={
            "https://drive.google.com/file/d/1XxNCInWslB7thKlq9pNP8LUkYhSbDGN-/view"
          }
          contactTeam={
            "https://docs.google.com/forms/d/e/1FAIpQLSfyZdID9PefbPVGLAC9W8dTDhaKafqsRkPS_sfubSsbKwQSag/viewform"
          }
          title={"Hathmad"}
          content={
            "Hathmad uses technology to translate ancient Arabic languages and advance archaeology."
          }
        />
      </div>

      <img src={Endowment} width="100%" />
      <div
        style={{
          alignSelf: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StartUps
          logo={powerhaya}
          website={"https://www.tawasal.org/"}
          pitchDeck={
            "https://drive.google.com/file/d/1bM1dEsIrwlSI00RcPabMhArCpWTmLEEL/view"
          }
          pitchVideo={
            "https://drive.google.com/file/d/1NyOSQ5TVMDLjL0iqAvXoZTxhcKECRvH3/view"
          }
          contactTeam={
            "https://docs.google.com/forms/d/e/1FAIpQLSfyZdID9PefbPVGLAC9W8dTDhaKafqsRkPS_sfubSsbKwQSag/viewform"
          }
          title={"PowerHayaTech"}
          content={
            "PowerHayaTech evaluates, supplies and trains clients (people with disabilities) and specialists on assistive devices using e-services and utilizing Alwagf features."
          }
        />
      </div>
    </div>
  );
}

export default App;
