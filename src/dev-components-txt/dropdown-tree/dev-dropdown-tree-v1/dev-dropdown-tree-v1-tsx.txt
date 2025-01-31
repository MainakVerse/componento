import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

type TreeNode = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: TreeNode[];
};

type TreeState = {
  expanded: string[];
  selected: string | null;
};

type TreeProps = {
  data: TreeNode[];
  initialExpandedNodes?: string[];
  onChange?: (selectedId: string | null) => void;
  iconOnOpen?: React.ReactNode;
  iconOnClose?: React.ReactNode;
  childrenIcon?: React.ReactNode;
};

const TreeNode = ({
  node,
  state,
  onAction,
  iconOnOpen = <FiChevronDown />,
  iconOnClose = <FiChevronRight />,
  childrenIcon,
}: {
  node: TreeNode;
  state: TreeState;
  onAction: (type: "toggle" | "select", id: string) => void;
  iconOnOpen?: React.ReactNode;
  iconOnClose?: React.ReactNode;
  childrenIcon?: React.ReactNode;
}) => {
  const isExpanded = state.expanded.includes(node.id);
  const isSelected = state.selected === node.id;
  const hasChildren = (node.children || []).length > 0;

  return (
    <li className="ml-2">
      <div
        className={`flex ${
          isSelected && !hasChildren && "text-ACCENT"
        } items-center select-none gap-2 px-3 py-1 rounded-md cursor-pointer hover:bg-ACCENT/30`}
        onClick={() => {
          {
            onAction("toggle", node.id);
            onAction("select", node.id);
          }
        }}
      >
        {node.children?.length ? (
          <span
            className={`text-lg flex-shrink-0  ${isExpanded && "text-ACCENT"}`}
          >
            {isExpanded ? iconOnOpen : iconOnClose}
          </span>
        ) : (
          <span className="w-fit flex-shrink-0">
            {node.icon || childrenIcon}
          </span>
        )}
        <span className={`text-sm`}>{node.label}</span>
      </div>

      {hasChildren && (
        <div
          className={`ml-4 overflow-hidden transition-all duration-300
          ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul>
            {node?.children?.map((child) => (
              <TreeNode
                key={child.id}
                node={child}
                state={state}
                onAction={onAction}
                iconOnOpen={iconOnOpen}
                iconOnClose={iconOnClose}
                childrenIcon={childrenIcon}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

const DevDropdownTreeV1 = ({
  data,
  initialExpandedNodes = [],
  onChange,
  iconOnOpen,
  iconOnClose,
  childrenIcon,
}: TreeProps) => {
  const [state, setState] = useState<TreeState>({
    expanded: initialExpandedNodes,
    selected: null,
  });

  const handleAction = (type: "toggle" | "select", id: string) => {
    setState((prev) => {
      const newState =
        type === "toggle"
          ? {
              ...prev,
              expanded: prev.expanded.includes(id)
                ? prev.expanded.filter((i) => i !== id)
                : [...prev.expanded, id],
            }
          : {
              ...prev,
              selected: id,
            };

      if (type === "select") onChange?.(newState.selected);
      return newState;
    });
  };

  return (
    <div className="bg-LIGHT dark:bg-DARK rounded-md p-2 place-self-start">
      <ul className="space-y-1">
        {data.map((node) => (
          <TreeNode
            key={node.id}
            node={node}
            state={state}
            onAction={handleAction}
            iconOnOpen={iconOnOpen}
            iconOnClose={iconOnClose}
            childrenIcon={childrenIcon}
          />
        ))}
      </ul>
    </div>
  );
};

export default DevDropdownTreeV1;
