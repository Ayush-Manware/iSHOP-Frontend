import React from "react";

const Language = () => {
  return (
    <>
      <select id="language" name="language" className="languageInput">
        <option className="languageOption" value="english">EN</option>
        <option className="languageOption" value="hindi">Hindi</option>
        <option className="languageOption" value="spanish">Spanish</option>
        <option className="languageOption" value="arabic">Arabic</option>
      </select>
    </>
  );
};

export default Language;
