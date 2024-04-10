import { useEffect, useState } from "react";
import { ContainerLayout } from "../../components/containerLayout";
import { Posts } from "./components/posts";
import { Profile } from "./components/profile";
import { SearchInput } from "./components/searchInput";
import { api } from "../../lib/axios";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPOUSER;

export interface IPosts {
  title: string;
  body: string;
  created_at: string;
  number: number;
  comments: string;
  user: {
    login: string;
  };
}

export function Blog() {
  const [posts, setPosts] = useState<IPosts[]>([]);

  const getPosts = async (query: string = "") => {
    try {
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`
      );
      setPosts(response.data.items);
    } catch {
      console.log("error ao conectar com github!");
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <ContainerLayout>
        <Profile />
        <SearchInput postsLength={posts.length} getPosts={getPosts} />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-16 gap-12 ">
          <>
            {posts.length === 0 && (
              <span className="text-basetime text-xl font-medium ">
                Nenhum poste encontrado!
              </span>
            )}
            {posts.map((post) => (
              <Posts key={post.number} post={post} />
            ))}
          </>
        </div>
      </ContainerLayout>
    </>
  );
}
