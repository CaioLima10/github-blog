import { FaBuilding, FaGithub } from "react-icons/fa";
import { ExternalLink } from "../../../../components/externalLink";
import { FaUserGroup } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { BounceLoading } from "../../../../components/loading";

const username = import.meta.env.VITE_GITHUB_MY_USERNAME;

interface ProfileDataProps {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: string;
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileDataProps>(
    {} as ProfileDataProps
  );
  const [isLoading, setIsloading] = useState(true);

  const getProfileData = async () => {
    try {
      const response = await api.get(`/users/${username}`);

      setProfileData(response.data);

      setIsloading(true);
    } finally {
      setTimeout(() => {
        setIsloading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div
      className="w-[98%] sm:w-full min-h-72 bg-profile p-2 sm:p-12 lg:p-6 
                    flex flex-col lg:flex-row gap-4 shadow-lg 
                    mt-10 md:-mt-28 rounded-md"
    >
      <img
        src={profileData.avatar_url}
        alt="FOTO-DO-GITHUB"
        className="w-full lg:w-60 h-80 lg:h-60 mb-6 lg:mb-0 bg-cover rounded-xl"
      />
      {isLoading ? (
        <BounceLoading />
      ) : (
        <div className="w-full">
          <header className="w-full flex items-center justify-between px-4 mb-8">
            <h1 className="text-4xl text-textbase font-medium">
              {profileData?.name}
            </h1>
            <ExternalLink
              text="Github"
              href={profileData.html_url}
              target="_blank"
            />
          </header>
          <p className="flex text-textdescribe text-2xl px-4 mb-10 line-clamp-3 ">
            {profileData.bio}
          </p>
          <ul className="px-4 flex flex-col lg:flex-row gap-8 mt-2">
            <li className="flex items-center gap-2 text-textbase text-xl">
              <FaGithub size={24} className="text-icon flex gap-2" />
              <span className="text-textdescribe">{profileData.login}</span>
            </li>
            <li className="flex items-center gap-2 text-textbase text-xl">
              <FaBuilding size={24} className="text-icon" />
              <span className="text-textdescribe">
                {(profileData.company && (
                  <span>{profileData.company}</span>
                )) || <span>Aguardando Oportunidade...</span>}
              </span>
            </li>
            <li className="flex items-center gap-2 text-textbase text-xl">
              <FaUserGroup size={24} className="text-icon" />
              <span className="text-textdescribe flex items-center gap-4">
                {" "}
                {profileData.followers} Seguidores
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
