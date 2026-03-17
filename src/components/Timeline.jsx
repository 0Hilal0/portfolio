import "../styles/timeline.css";
import timeLine from "../data/timeline";

function Timeline() {
  return (
    <section className="timeline">
      <h3>My timeline</h3>

      <div className="timeline-div">
        {timeLine.map((event, index) => (
          <div key={index} className="timeline-row">
            <div className="timeline-side left-side">
              {index % 2 === 0 && (
                <div className="timelineContainer left">
                  <p className="timeline-year">{event.year}</p>
                  <p className="timeline-title">{event.title}</p>
                  <p className="timeline-description">{event.description}</p>
                </div>
              )}
            </div>

            <div className="timeline-center">
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-side right-side">
              {index % 2 !== 0 && (
                <div className="timelineContainer right">
                  <p className="timeline-year">{event.year}</p>
                  <p className="timeline-title">{event.title}</p>
                  <p className="timeline-description">{event.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;