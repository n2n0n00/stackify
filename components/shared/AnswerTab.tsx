import { getUserAnswers } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import AnswerCard from "../cards/AnswerCard";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

const AnswersTab = async ({ searchParams, userId, clerkId }: Props) => {
  const result = await getUserAnswers({
    userId,
    page: 1,
  });

  console.log(result.answers);

  return (
    <>
      {result.answers.map((answer) => (
        <div className="my-4" key={answer._id}>
          <AnswerCard
            key={answer._id}
            clerkId={clerkId}
            _id={answer._id}
            question={answer.question}
            author={answer.author}
            upvotes={answer.upvotes.length}
            createdAt={answer.createdAt}
          />
        </div>
      ))}
    </>
  );
};

export default AnswersTab;
