import { z } from "zod";

const NAME_REGEX = /^[a-zA-ZæøåÆØÅ .'-]+$/;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(100, { message: "Name cannot exceed 100 characters." })
    .regex(NAME_REGEX, {
      message: "Name can only contain letters, spaces, and basic punctuation.",
    }),

  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." }),

  subject: z
    .string()
    .trim()
    .min(3, { message: "Subject must be at least 3 characters long" })
    .max(100, { message: "Subject cannot exceed 100 characters." }),

  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(1000, { message: "Message cannot exceed 1000 characters." }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
