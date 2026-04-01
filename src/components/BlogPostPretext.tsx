import CodeBlock from "./CodeBlockClient";
import PretextTextBlock from "./PretextTextBlock";
import { parseContent } from "../lib/markdown";

export type BlogSection = {
  id: string;
  title: string;
  content: string[];
};

export type BlogPostData = {
  slug: string;
  title: string;
  date: string;
  author: string;
  intro: string;
  sections: BlogSection[];
};

type ContentPartsProps = {
  content: string;
  sectionIndex: number;
  paraIndex: number;
};

function ContentParts({ content, sectionIndex, paraIndex }: ContentPartsProps) {
  const parsed = parseContent(content);
  return (
    <>
      {parsed.map((part, index) => {
        if (part.type === "code") {
          return (
            <CodeBlock
              key={`code-${sectionIndex}-${paraIndex}-${index}`}
              code={part.content}
              language={part.language || "text"}
              sectionIndex={sectionIndex}
              paraIndex={paraIndex}
              index={index}
            />
          );
        }
        const paragraphs = part.content.split("\n\n").filter((p) => p.trim());
        return paragraphs.map((para, paraIdx) => (
          <PretextTextBlock
            key={`text-${sectionIndex}-${paraIndex}-${index}-${paraIdx}`}
            as="p"
            text={para}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-opacity duration-300 w-full"
            style={{
              animation: `fadeIn 0.5s ease-out ${
                sectionIndex * 150 +
                paraIndex * 50 +
                index * 50 +
                paraIdx * 50 +
                300
              }ms both`,
            }}
          />
        ));
      })}
    </>
  );
}

type BlogPostPretextProps = {
  post: BlogPostData;
};

export default function BlogPostPretext({ post }: BlogPostPretextProps) {
  return (
    <div className="w-full min-w-0 max-w-full">
      <header className="mb-12 animate-fade-in-up">
        <PretextTextBlock
          as="h1"
          text={post.title}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight w-full"
        />
        <div className="flex items-center gap-4 text-base text-gray-600 dark:text-gray-400">
          <span>{post.author}</span>
          <span>•</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none w-full min-w-0">
        <PretextTextBlock
          as="p"
          text={post.intro}
          className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12 animate-fade-in-delay w-full"
        />

        {post.sections.map((section, sectionIndex) => (
          <section
            key={section.id}
            id={section.id}
            className="mb-16 scroll-mt-24 transition-all duration-300"
            style={{
              animation: `fadeInUp 0.6s ease-out ${sectionIndex * 150 + 200}ms both`,
            }}
          >
            <PretextTextBlock
              as="h2"
              text={section.title}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6 hover:text-contrast transition-colors duration-300 w-full"
            />
            <div className="space-y-4">
              {section.content.map((paragraph, paraIndex) => (
                <ContentParts
                  key={`${section.id}-${paraIndex}`}
                  content={paragraph}
                  sectionIndex={sectionIndex}
                  paraIndex={paraIndex}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
