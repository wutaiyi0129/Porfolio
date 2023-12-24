const Tag = () => {
  const tagList = [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "React",
    "MongoDB",
    "Tailwind",
    "Bootstrap",
    "AWS",
    "Codecept.js",
  ];
  return (
    <>
      {tagList.map((tag, i) => (
        <button className="resume-btn text-[15px]" key={i}>
          {tag}
        </button>
      ))}
    </>
  );
};

export default Tag;
