import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		url: z.string(),
		githublink: z.string(),
		heroImage: image(),
		// heroImage: image().refine((img) => img.width >= 1080, {
		// 	message: "Cover image must be at least 1080 pixels wide!",
		// }),
		heroAlt: z.string().optional(),
		type: z.string(),
		tags: z.array(z.string()),
		published: z.boolean()
	})
})

const blog = defineCollection({
	// Type-check frontmatter using a schema
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
		type: z.string(),
		tags: z.array(z.string()),
		published: z.boolean()
	}),
});

export const collections = { blog, projects };
