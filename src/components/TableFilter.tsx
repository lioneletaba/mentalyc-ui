import { Input } from "./ui/input";
import { Down } from "./icons/down";
import React from "react";

type Props = {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export function TableFilter({ label, onChange, value }: Props) {
  return (
    <div className="relative">
      <Input
        className="flex h-10 w-full border-0 ring-0 items-center filter-shadow justify-between whitespace-nowrap rounded-lg bg-white px-3 py-2 text-label-regular text-black placeholder:text-gray-400 focus:ring-1 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
        type="text"
        placeholder={label}
        value={value}
        onChange={onChange}
      />
      <span className="absolute right-4 top-3">
        <Down className="text-gray-400" />
      </span>
    </div>
  );
}
