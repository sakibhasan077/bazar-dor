"use client";
import { NavbarType } from "@/type";
import { Bars, Pencil, SquarePlus, TrashBin } from "@gravity-ui/icons";
import {
  Button,
  Description,
  Dropdown,
  Header,
  Kbd,
  Label,
  Separator,
} from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const DropDownMenu = () => {
  const [data, setData] = useState<NavbarType[]>([]);
  useEffect(() => {
    fetch("https://api.api-store.workers.dev/api/bazardor/categories")
      .then((res) => res.json())
      .then((resData) => setData(resData))
      .catch((error) => console.log(error));
  });
  const pathName = usePathname();
  return (
    <div>
      <Dropdown>
        <Button isIconOnly aria-label="Menu" variant="secondary" className={"text-green-700"}>
          <Bars className="outline-none" />
        </Button>
        <Dropdown.Popover className="min-w-63">
          <Dropdown.Menu
            disabledKeys={["delete-file"]}
            onAction={(key) => console.log(`Selected: ${key}`)}
          >
            <Dropdown.Section>
              {data.map((item) => (
                <Dropdown.Item key={item.id}>
                  <Link
                    href={`/category/${item.slug}`}
                    className={`btn ${pathName === `/category/${item.slug}` ? "bg-[#047F39] text-white" : "hover:bg-gray-300 border-0 bg-transparent"} `}
                  >
                    {" "}
                    <span>{item.icon}</span> <span>{item.nameBn}</span>
                  </Link>
                </Dropdown.Item>
              ))}
            </Dropdown.Section>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );
};

export default DropDownMenu;
