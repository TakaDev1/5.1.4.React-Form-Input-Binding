import React from "react";
import useHandleSelectBox from "../hooks/useHandleSelectBox";

const SelectPage = () => {
  const { selectedOption, handleOption } = useHandleSelectBox();

  return (
    <div>
      <select
        onChange={handleOption}
        value={selectedOption}
        className="rounded border p-2 text-white my-10"
      >
        <option value="Option1">オプション1</option>
        <option value="Option2">オプション2</option>
        <option value="Option3">オプション3</option>
      </select>

      <p className="text-white text-xl">選択中のオプション: {selectedOption}</p>
    </div>
  );
};

export default SelectPage;
