import React, { useState } from "react";
/* <div class="btn-container">
    <i class="fa fa-sun-o" aria-hidden="true"></i>
      <label class="switch btn-color-mode-switch">
            <input type="checkbox" name="color_mode" id="color_mode" value="1">
            <label for="color_mode" data-on="Dark" data-off="Light" class="btn-color-mode-switch-inner"></label>
        </label>
      <i class="fa fa-moon-o" aria-hidden="true"></i>
      <p class="by"><a href="https://github.com/NadeeshaEranjan" target="_blank">Github/NadeeshaEranjan</a></p>
  </div> */

const TextToggle = ({ isSelected }: { isSelected: boolean }) => {
  const [_isSelected, setIsSelected] = useState(isSelected);

  return (
    <label className="inline-flex relative btn-color-mode-switch m-0 h-10 bg-red w-56">
      <input
        type="checkbox"
        name="test-toggle"
        className="flex w-full h-full"
        checked={_isSelected}
        onClick={() => setIsSelected(!_isSelected)}
      />
      <label
        htmlFor="test-toggle"
        data-on="Dark"
        data-off="Light"
        className={`btn-color-mode-switch-inner m-0 flex w-56 bg-red rounded-full transition-all ease-in-out before:content-['${"test"}'] after:content-['${"test-2"}'] before:w-1/2 after:w-1/2 before:flex before:items-center before:justify-center before:rounded-full`}
      ></label>
    </label>
  );
};

export default TextToggle;
