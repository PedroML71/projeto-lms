"use client";

import { FC, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import qs from "query-string";
import { useDebouce } from "@/hooks/use-debounce";
import { Input } from "@/components/ui/input";

interface SearchInputProps {}

const SearchInput: FC<SearchInputProps> = ({}) => {
  const [value, setValue] = useState("");
  const deboundedValue = useDebouce(value);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentCategoryId = searchParams.get("categoryId");

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          categoryId: currentCategoryId,
          title: deboundedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [deboundedValue, currentCategoryId, router, pathname]);

  return (
    <div className="relative">
      <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />

      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full md:w-[300px] pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200"
        placeholder="Search for a course"
      />
    </div>
  );
};

export default SearchInput;
