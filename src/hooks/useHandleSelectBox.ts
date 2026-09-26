import { useState } from "react";

const useHandleSelectBox = () => {
  const [selectedOption, setSelectedOption] = useState("Option1");

  const handleOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return { selectedOption, handleOption };
};

export default useHandleSelectBox;
