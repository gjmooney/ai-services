import { z } from "zod";

export const FormValidator = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required",
  }),
});

export type FormRequest = z.infer<typeof FormValidator>;
