import { FaBuilding, FaGithub } from "react-icons/fa";
import { ExternalLink } from "../../../../components/externalLink";
import { FaUserGroup } from "react-icons/fa6";

export function Profile() {
  return (
    <div className="w-full h-72 bg-profile p-6 flex gap-4 shadow-lg -mt-28 rounded-md">
      <img
        src="https://github.com/CaioLima10.png"
        alt="FOTO-DO-GITHUB"
        className="w-60 h-60 bg-cover rounded-xl"
      />
      <div className="w-full">
        <header className="w-full flex items-center justify-between px-4 mb-8">
          <h1 className="text-4xl text-textbase font-medium">
            Caio lima de souza
          </h1>
          <ExternalLink text="Github" href="/" />
        </header>
        <p className="flex text-textdescribe text-2xl px-4 mb-10 line-clamp-3 ">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul className="px-4 flex gap-8 mt-2">
          <li className="flex items-center gap-2 text-textbase text-xl">
            <FaGithub size={24} className="text-icon flex gap-2" />
            <span className="text-textdescribe">Caio lima</span>
          </li>
          <li className="flex items-center gap-2 text-textbase text-xl">
            <FaBuilding size={24} className="text-icon" />
            <span className="text-textdescribe">Rocketseat</span>
          </li>
          <li className="flex items-center gap-2 text-textbase text-xl">
            <FaUserGroup size={24} className="text-icon" />
            <span className="text-textdescribe">123 Seguidores</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
