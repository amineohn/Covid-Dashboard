import React from "react";
import ToggleTheme from "./toggleTheme";
const Navigation = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-transparent md:my-8 dark:text-gray-100">
      <ToggleTheme />
    </div>
  );
};

export default Navigation;
