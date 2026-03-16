import { TEAM } from "../lib/team";
import { TEAM_CSS } from "../styles/global";

export const Team: React.FC = () => (
  <section id="team" className="team section">
    <style>{TEAM_CSS}</style>
    <div className="container section-title" data-aos="fade-up">
      <h2>Team</h2>
      <p>Meet the People Behind ID Me Naija</p>
    </div>
    <div className="container">
      <div className="row gy-4">
        {TEAM.map((member, i) => (
          <div
            className="col-lg-3 col-md-6 d-flex align-items-stretch"
            key={member.name}
            data-aos="fade-up"
            data-aos-delay={100 + i * 100}
          >
            <div className="team-member" style={{ width: "100%" }}>
              {/* Avatar area */}
              <div
                className="member-img team-avatar"
                style={{ "--avatar-color": member.color } as React.CSSProperties}
              >
                <div className="team-avatar-ring"></div>
                <div
                  className="team-avatar-inner"
                  style={{ background: member.color }}
                >
                  {member.initials}
                </div>
                {/* Social overlay */}
                <div className="social">
                  <a href={member.linkedin} aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="member-info">
                <h4>{member.name}</h4>
                <span className="member-role-tag">{member.role}</span>
                <p className="member-bio">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
