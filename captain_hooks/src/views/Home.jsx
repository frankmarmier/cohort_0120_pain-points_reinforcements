import React from "react";
import CardResource from "../Components/CardResource";

const Home = props => {
  const resources = [
    {
      url: "https://reactjs.org/docs/hooks-overview.html",
      title: "React Hooks Documentation",
      description: "React official documentation on Hooks"
    },
    {
      url: "https://reactjs-hooks.netlify.com/docs/hello-world.html",
      title: "Unofficial React Hooks Documentation",
      description: "React documentation transformed in hooks, cf: Main Concepts"
    },
    {
      url: "https://overreacted.io/a-complete-guide-to-useeffect/",
      title: "React useEffect by Dan Abramov",
      description:
        "React core developer Dan Abramov explains useEffect in details"
    }
  ];

  return (
    <section className="landing-page">
      <h1 className="main-title">React Hooks !</h1>
      <div className="resources">
        {resources.map(r => (
          <CardResource
            key={r.url}
            url={r.url}
            title={r.title}
            description={r.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
