import { useState } from "react";

const Dropdown = ({ heading, para ,name,setIsVisible}) => {
  return (
    <>
      <button
        onClick={() => {
          setIsVisible();
        }}
        className="bg-blue-500 text-white p-2 m-5 rounded-md"
      >
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && (
        <div className="p-3 m-3 border rounded-lg shadow-md">
          <h1 className="text-3xl">{heading}</h1>
          <h2 className="p-3 text-2xl">{para}</h2>
        </div>
      )}
    </>
  );
};

const About = () => {
  const [isDrop, setisDrop] = useState(false);

  return (
    <>
      <Dropdown
      name={"about"}
        heading={"About Myself"}
        para={
          "Hi Tushar! It’s great to meet you. Becoming a developer is an exciting journey. From what I found, it looks like you’re already making strides in the field. You have experience as a front-end developer, working on various projects from job platforms to diner booking systems."
        }
        setIsVisible={"about"}
      />
      <br></br>
      <Dropdown
        name={"exp"}
        heading={"My Experience"}
        para={
          "I've worked on several web development projects using React, Node.js, and Tailwind CSS. I love building intuitive and responsive UIs, and I'm always looking to improve my skills."
        }
      />
      <br></br>
      <Dropdown
        name={"goal"}
        heading={"My Future Goals"}
        para={
          "I aim to become proficient in full-stack development and contribute to impactful projects. My goal is to land a role at a top tech company like Google or Microsoft."
        }
      />
    </>
  );
};

export default About;
