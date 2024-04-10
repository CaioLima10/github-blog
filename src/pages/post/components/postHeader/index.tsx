import { FaCalendar, FaChevronLeft, FaGithub } from "react-icons/fa";
import { ExternalLink } from "../../../../components/externalLink";
import { FaMessage } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { IPosts } from "../../../blog";
import { useFormatterDate } from "../../../../utils/formatter";

interface PostDataProps {
  postData: IPosts;
}

export function PostHeader({ postData }: PostDataProps) {
  const navigate = useNavigate();

  const formatterDate = useFormatterDate(postData.created_at);

  function goBack() {
    navigate(-1);
  }

  return (
    <div className="w-[98%] md:w-full min-h-52 bg-profile p-6 flex gap-4 shadow-lg mt-10 md:-mt-28 rounded-md">
      <div className="flex flex-col w-full p-6">
        <header className="w-full flex items-center justify-between">
          <button
            onClick={goBack}
            className="text-brandblue text-base uppercase flex items-center justify-center line-clamp-1
            gap-2 font-semibold transition-all "
          >
            <span className="flex items-center gap-2">
              <FaChevronLeft size={20} />
              voltar
            </span>
          </button>
          <ExternalLink
            text="Ver no Github"
            href={postData.html_url}
            target="_blank"
          />
        </header>
        <h1 className="text-4xl text-textbase font-medium mt-10">
          {postData.title}
        </h1>
        <ul className="flex flex-col sm:flex-row items-center gap-12 mt-6 ">
          <li className="flex items-center gap-2 text-textbase text-xl">
            <FaGithub size={24} className="text-icon" />
            <span className="text-textdescribe">
              {postData.user && postData.user.login}
            </span>
          </li>
          <li className="flex items-center gap-2 text-textbase text-xl">
            <FaCalendar size={24} className="text-icon" />
            <span className="text-textdescribe">{formatterDate}</span>
          </li>
          <li className="flex items-center gap-2 text-textbase text-xl">
            <FaMessage size={24} className="text-icon" />{" "}
            <span className="text-textdescribe">
              {postData.comments} comentarios
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
