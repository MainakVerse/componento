import React from "react";
import { FiSearch } from "react-icons/fi";
import DevInputV1 from "./dev-input-v1";

const DevInputV1Usage = () => {
  return (
    <div className="*:py-4 divide-y divide-ACCENT/30 w-full max-w-xl">
      <div>
        <h2 className="text-sm  text-ACCENT">
          Variants (base/ bordered/ faded/ underline)
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full ">
          <DevInputV1
            type="text"
            labelName="Search"
            variant="base"
            placeholder="Search Results"
            icon={<FiSearch />}
          />
          <DevInputV1
            type="text"
            labelName="Search"
            variant="bordered"
            placeholder="Search Results"
            icon={<FiSearch />}
          />
          <DevInputV1
            type="text"
            variant="faded"
            labelName="Search"
            placeholder="Search Results"
            icon={<FiSearch />}
          />
          <DevInputV1
            type="text"
            labelName="Search"
            variant="underline"
            placeholder="Search Results"
            icon={<FiSearch />}
          />
        </div>
      </div>
      <div>
        <h2 className="text-sm  text-ACCENT">size (sm/ md/ lg)</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full ">
          <DevInputV1
            type="text"
            labelName="Search"
            size="sm"
            placeholder="Search Results"
            icon={<FiSearch />}
          />
          <DevInputV1
            type="text"
            labelName="Search"
            size="md"
            placeholder="Search Results"
            icon={<FiSearch />}
          />
          <DevInputV1
            type="text"
            labelName="Search"
            size="lg"
            placeholder="Search Results"
            icon={<FiSearch />}
          />
        </div>
      </div>
      <div>
        <h2 className="text-sm  text-ACCENT">
          Roundness (none/ sm/ md/ lg/full)
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full ">
          <DevInputV1
            type="text"
            rounded="none"
            labelName="Search"
            placeholder="Search Results"
            icon={<FiSearch />}
          />
          <DevInputV1
            type="text"
            rounded="sm"
            labelName="Search"
            placeholder="Search Results"
            icon={<FiSearch />}
          />
          <DevInputV1
            type="text"
            rounded="md"
            labelName="Search"
            placeholder="Search Results"
            icon={<FiSearch />}
          />

          <DevInputV1
            type="text"
            labelName="Search"
            rounded="full"
            placeholder="Search Results"
            icon={<FiSearch />}
          />
        </div>
      </div>
    </div>
  );
};

export default DevInputV1Usage;
