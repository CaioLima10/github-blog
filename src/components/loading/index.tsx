import { FaGithubAlt } from "react-icons/fa";

export function BounceLoading() {
  return (
    <div className="flex items-center justify-center w-full ">
      <FaGithubAlt size={48} className="animate-bounce text-textdescribe " />
    </div>
  );
}
