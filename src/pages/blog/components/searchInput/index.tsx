import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

interface SearchInputProps {
  getPosts: (query?: string) => Promise<void>;
  postsLength: number;
}

export function SearchInput({ getPosts, postsLength }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query);
  }

  return (
    <form
      className="w-[98%] sm:w-full"
      onSubmit={handleSubmit(handleSearchPosts)}
    >
      <header className="w-full flex items-center justify-between mt-20">
        <h3 className="text-textbase text-2xl">Publicações</h3>
        <div className="text-textdescribe">
          {postsLength}{" "}
          {postsLength <= 1 ? (
            <span>publicação</span>
          ) : (
            <span>publicações</span>
          )}
        </div>
      </header>

      <input
        className="w-full bg-baseinput h-16 p-2 px-6 text-xl mt-6 text-textbase placeholder:text-placeholderColor 
                    border border-borderColor outline-none focus:border-brandblue rounded-xl"
        type="text"
        placeholder="Buscar conteudo"
        {...register("query")}
      />
    </form>
  );
}
