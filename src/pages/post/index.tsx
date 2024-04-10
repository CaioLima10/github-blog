import { useCallback, useEffect, useState } from "react";
import { ContainerLayout } from "../../components/containerLayout";
import { PostHeader } from "./components/postHeader";
import { IPosts } from "../blog";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { PostContent } from "./components/postContent";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPOUSER;

export function Post() {
  const [postData, setPostData] = useState<IPosts>({} as IPosts);

  const { id } = useParams();

  const getPostDetails = useCallback(async () => {
    try {
      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`
      );
      setPostData(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [postData, id]);

  useEffect(() => {
    getPostDetails();
  }, [getPostDetails]);

  return (
    <ContainerLayout>
      <PostHeader postData={postData} />
      <PostContent content={postData.body} />
    </ContainerLayout>
  );
}
