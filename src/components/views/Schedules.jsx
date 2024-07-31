import { useEffect, useRef } from "react";
import "../../css/schedules.css";
import { schedulesData } from "../../data/fakeDbSchedules";

export const Schedules = () => {
  const animation = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutUsSection = document.getElementById("schedules");
      const rect = aboutUsSection.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (
        rect.top <= windowHeight * 0.75 &&
        rect.bottom >= windowHeight * 0.25
      ) {
        animation.current.classList.add("fade-in");
        animation.current.classList.remove("fade-out");
      } else {
        animation.current.classList.add("fade-out");
        animation.current.classList.remove("fade-in");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="cap-schedules">
        <div className="title-schedules">
          <h1>Horarios</h1>
        </div>
        <div className="schedules" ref={animation}>
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
            src="src\assets\img\PSX_20240719_135448.png"
            alt="img-background"
          />
        </div>
      </div>
    </>
  );
};
