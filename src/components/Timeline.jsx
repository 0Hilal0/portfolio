import "../styles/timeline.css";
import timeline from "../data/timeline";

function Timeline() {
  return (
    <section id="timeline" className="timeline section-spacing">
      <div className="timeline-container">
        <p className="section-label">Journey</p>
        <h2>My journey</h2>

        <div className="timeline-list">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{item.date}</div>

              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;