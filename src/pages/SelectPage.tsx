import React from "react";
import useHandleSelectBox from "../hooks/useHandleSelectBox";

const SelectPage = () => {
  const { selectedOption, handleOption } = useHandleSelectBox();

  return (
    <div>
      <select onChange={handleOption} value={selectedOption}>
        <option value="Option1">オプション1</option>
        <option value="Option2">オプション2</option>
        <option value="Option3">オプション3</option>
      </select>

      <p>選択中のオプション: {selectedOption}</p>
    </div>
  );
};

export default SelectPage;
