import React from "react";
import Card from "./components/Card";
import { jobs } from "./data.js";

const App = () => {
  return (
    <div className="container">
      {jobs.map((job) => (
        <Card
          key={job.id}
          company={job.company}
          logo={job.logo}
          posted={job.posted}
          title={job.title}
          tags={job.tags}
          salary={job.salary}
          location={job.location}
          saved={job.saved}
        />
      ))}
    </div>
  );
};

export default App;
