import "../../css/schedules.css";
import { schedulesData } from "../../data/fakeDbSchedules";

export const Schedules = () => {

  return (
    <>
      <div className="cap-schedules">
        <div className="title-schedules">
          <h1>Horarios</h1>
        </div>
        <div className="schedules">
          {schedulesData.map((schedule, index) => (
            <div key={index} className="schedule-card">
              <h2>{schedule.day}</h2>
              <p>{schedule.time}</p>
              <p>{schedule.time2}</p>
              <p>{schedule.time3}</p>
              <p>{schedule.time4}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="background-schedules" id="schedules">
        <div className="img-background">
          <img
            src="img/PSX_20240719_135448.png"
            alt="img-background"
          />
        </div>
      </div>
    </>
  );
};
