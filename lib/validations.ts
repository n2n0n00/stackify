import z from "zod";

// Define what goes into the form
// tags = min of 1 tag and max of 3 and each must be min of 1 letters and max of 15
export const QuestionsSchema = z.object({
  title: z.string().min(5).max(130),
  explanation: z.string().min(100),
  solution: z.string().min(100),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});

export const AnswerSchema = z.object({
  answer: z.string().min(100),
});
