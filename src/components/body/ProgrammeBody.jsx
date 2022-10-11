import "../body/ProgrammeBody.css";
import imageIcon2 from "../../images/imageIcon2.svg";
const ProgrammeBody = () => {
  return (
    <div className="row pt-5">
      <div className="col-12">
        <div className="row pt-5 body-style">
          <div className="col-12 pt-5">
            <div className="row text-center ">
              <h5 className="body-h5-style">
                Customisable Expert Curated Programs
              </h5>
            </div>
            <div className="row text-center">
              <p className="body-p-style">
                These programs work on applied neurological science. Our experts
                have curated each program with the knowledge and insights from
                decades of experience.
              </p>
            </div>
            <div className="row body-img">
              <img src={imageIcon2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeBody;
