import ReactMarkDown from "react-markdown";
import { PostContentContainer } from "./styles";

interface PostContentData {
  content: string;
}

export function PostContent({ content }: PostContentData) {
  return (
    <div className="flex flex-col gap-2 p-4 mb-24 mt-8 text-xl text-textbase">
      <PostContentContainer>
        <ReactMarkDown children={content} />
      </PostContentContainer>
    </div>
  );
}
