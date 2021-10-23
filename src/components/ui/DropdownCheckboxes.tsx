import { Popover } from "@headlessui/react";
import { ComponentProps, useCallback, useEffect, useMemo, useState, VFC } from "react";
import { usePopper } from "react-popper";

import { Checkbox } from "@/components/basics";

import { MenuButton } from "./MenuButton";

type Item = {
  label: string;
  value: string | number | string[];
  checked?: boolean;
};

type Props = {
  label: string;
  items: Item[];
  size?: ComponentProps<typeof MenuButton>["size"];
  onChange?: (values: Item["value"][]) => void;
};

export const DropdownCheckboxes: VFC<Props> = ({ items, label, onChange, size }) => {
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | undefined>();
  const [popperElement, setPopperElement] = useState<HTMLDivElement | undefined>();
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  const [state, setState] = useState(items);
  const selected = useMemo(() => state.some((item) => item.checked), [state]);

  useEffect(() => {
    if (!onChange) return;
    onChange(state.reduce<Item["value"][]>((prev, cur) => (cur.checked ? [...prev, cur.value] : prev), []));
  }, [state, onChange]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    setState((prev) => {
      const newState = [...prev];
      newState[i].checked = e.target.checked;
      return newState;
    });
  }, []);

  return (
    <Popover className="relative">
      <Popover.Button ref={setReferenceElement} as={MenuButton} active={selected} size={size} className="transition">
        {label}
      </Popover.Button>

      <Popover.Panel ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        {/* TODO: Checkboxesコンポーネントを作って状態管理を簡潔させる */}
        <div
          className="min-w-[100px] w-max flex flex-col mt-2 space-y-2 py-4 pl-4 pr-7 rounded overflow-hidden bg-white opacity-100 drop-shadow-md"
          role="presentation"
        >
          {state.map((item, i) => (
            <Checkbox
              key={i.toString()}
              value={item.value}
              checked={!!item.checked} // controlled
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, i)}
              label={item.label}
              className="py-1"
            />
          ))}
        </div>
      </Popover.Panel>
    </Popover>
  );
};
