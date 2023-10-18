import { getQuestionById } from "@/lib/actions/questions.actions";

import React from "react";

const Page = async ({ params }) => {
  const result = await getQuestionById({ questionId: params.id });
  return (
    <div>
      <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full text-left">
        {result.title}
      </h2>
    </div>
  );
};

export default Page;
