import { IPosts } from "../..";
import { useFormatterDate } from "../../../../utils/formatter";

interface PostPorps {
  post: IPosts;
}

export function Posts({ post }: PostPorps) {
  const formatterDate = useFormatterDate(post.created_at);

  return (
    <a
      href={`/post/${post.number}`}
      className="w-full h-80 gap-4 shadow-lg rounded-lg bg-postColor border-none hover:ring-1 
              hover:ring-brandblue transition-all duration-300"
    >
      <div className="p-8">
        <div className="flex items-center justify-between">
          <strong className="text-2xl text-textbase font-medium w-96 bg-zinc-500">
            {post.title}
          </strong>
          <span className="text-basetime w-28 text-end">{formatterDate}</span>
        </div>
        <p className="text-textdescribe mt-8 text-xl overflow-hidden line-clamp-4">
          {post.body}
        </p>
      </div>
    </a>
  );
}
