import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostsMeta, getPostBySlug } from "@/lib/blog";
import { format } from "date-fns";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Not Found | Flowstate AI",
    };
  }

  return {
    title: `${post.title} | Flowstate AI Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>

        {/* Article header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-primary-700 font-semibold">
                  {post.author.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div>
                <div className="font-medium text-gray-900">{post.author}</div>
                <div>{format(new Date(post.date), "MMMM d, yyyy")}</div>
              </div>
            </div>
          </div>
        </header>

        {/* Article content */}
        <article
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* CTA at bottom */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="card p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Want to implement this in your business?
            </h3>
            <p className="text-gray-600 mb-6">
              Book a free 20-minute AI audit. I'll identify the best opportunities 
              for your specific business.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Book Your Free Audit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
