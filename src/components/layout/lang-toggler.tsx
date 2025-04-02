"use client";

import { LangSchema } from "@/services/sanity/parser";
import { getBlogArticleSlugTranslate } from "@/services/sanity/request";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";

type Props = {
  lang: LangSchema;
};

export function LangToggler({ lang }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  async function setLang(newLang: LangSchema) {
    if (pathname.includes("/blog/")) {
      const slug = pathname.replace(`/${lang}/blog/`, "");

      const slugTranslate = await getBlogArticleSlugTranslate(
        lang,
        newLang,
        slug
      );

      if (slugTranslate) {
        router.push(`/${newLang}/blog/${slugTranslate}`);
      } else {
        router.push(`/${newLang}/blog/${slug}`);
      }
    } else {
      router.push(pathname.replace(`/${lang}`, `/${newLang}`));
    }
  }

  return (
    <div className="flex justify-between items-center gap-2">
      <Button
        variant="outline"
        onClick={() => setLang("en")}
        className={`p-0 w-full ${
          lang == "en" ? "font-black" : "font-light opacity-80"
        }`}
      >
        EN
      </Button>
      |
      <Button
        variant="outline"
        onClick={() => setLang("es")}
        className={`p-0 w-full ${
          lang == "es" ? "font-black" : "font-light opacity-80"
        }`}
      >
        ES
      </Button>
    </div>
  );
}
