"use client";
import React, {useState, useEffect } from "react";
import { RiCloseCircleFill } from "react-icons/ri";

const DevChipInput = ({
  defaultValues,
  onChange,
  trigger = "Enter",
  tagLength = 14,
  textLength = 20,
}) => {
  const [tags, setTags] = useState(defaultValues);

  useEffect(() => {
    onChange?.(tags);
  }, [tags, onChange]);

  const handleEnter = (e) => {
    if (e.key !== trigger) return;
    e.preventDefault();
    const inputValue = e.currentTarget.value.trim();
    if (!inputValue) return;
    if (tags.some((tag) => tag.name === inputValue))
      return alert("Tag already exists");
    if (inputValue.length > textLength)
      return alert(`Tag must be less than ${textLength} characters`);

    const newTag = { key: Date.now(), name: inputValue };
    setTags((prev) => [...prev, newTag]);
    e.currentTarget.value = "";
  };

  const handleDelete = (key) => {
    setTags((prev) => prev.filter((tag) => tag.key !== key));
  };

  return (
    <div className="w-full relative bg-LIGHT dark:bg-DARK border border-ACCENT/30 flex flex-wrap gap-2 p-3 rounded-xl">
      {tags.map((tag) => (
        <span
          key={tag.key}
          className="flex select-none text-base w-fit gap-2 px-3 pr-1 rounded-full text-ACCENT items-center bg-ACCENT/30"
        >
          {tag.name}
          <RiCloseCircleFill
            onClick={() => handleDelete(tag.key)}
            className="text-xl hover:opacity-80 cursor-pointer"
          />
        </span>
      ))}
      {tags.length < tagLength && (
        <input
          type="text"
          onKeyDown={handleEnter}
          placeholder="enter tag"
          className="px-1 rounded-full bg-transparent outline-0 w-28 border-none"
        />
      )}
      <button
        role="clear-btn"
        className="absolute right-2 top-1 text-lg text-ACCENT/50 hover:text-ACCENT"
        onClick={() => setTags([])}
      >
        🗙
      </button>
    </div>
  );
};

export default DevChipInput;
