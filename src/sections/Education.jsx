const education = [
  {
    period: "2021 — 2025",
    degree: "BACHELOR OF TECHNOLOGY",
    institution: "KIET Group of Institutions, Ghaziabad",
    description:
      "Completed a Bachelor of Technology in Information Technology, building a strong foundation in Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Software Engineering, and modern web development.",
    technologies: [
      "DSA",
      "OOPs",
      "DBMS",
      "Software Engineering",
      "Web Development",
    ],
  },
  {
    period: "May 2018 — Apr 2019",
    degree: "CLASS 12TH",
    institution: "New Public Inter College, Bansi",
    description:
      "Completed higher secondary education under the UP Board with Physics, Chemistry, and Mathematics (PCM).",
    technologies: ["Physics", "Chemistry", "Mathematics"],
  },
  {
    period: "Jul 2016 — Jun 2017",
    degree: "CLASS 10TH",
    institution: "New Public Inter College, Bansi",
    description:
      "Completed secondary education under the UP Board with a strong foundation in science and mathematics.",
    technologies: ["Science", "Mathematics"],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
            font-medium tracking-wider uppercase animate-fade-in"
          >
            EDUCATIONAL JOURNEY
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold
            mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Learning that{" "}
            <span className="font-serif italic font-normal text-white">
              builds foundations.
            </span>
          </h2>

          <p
            className="text-muted-foreground
            animate-fade-in animation-delay-200"
          >
            A journey through academics that built my foundation in technology,
            problem-solving, and continuous learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" />

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {edu.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">{edu.degree}</h3>

                    <p className="text-muted-foreground">{edu.institution}</p>

                    <p className="text-sm text-muted-foreground mt-4">
                      {edu.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {edu.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
