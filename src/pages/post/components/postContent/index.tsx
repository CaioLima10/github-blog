import ReactMarkDown from "react-markdown";

interface PostContentData {
  content: string;
}

export function PostContent({ content }: PostContentData) {
  return (
    <div className="flex flex-col gap-2 p-4 mb-24 mt-8 text-xl text-textbase">
      <ReactMarkDown children={content} />
    </div>
  );
}
