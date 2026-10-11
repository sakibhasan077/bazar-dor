import { signOut } from "@/lib/auth-client";
import { SignoutType } from "@/type";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import SignoutButton from "./SignoutButton";

const Signout = ({ userData }: SignoutType) => {
  let userFirstName = userData.name.split(" ")[0];

  return (
    <div>
      <Dropdown>
        <Dropdown.Trigger className="rounded-full flex items-center">
          <Avatar>
            <Avatar.Image alt="User Image" src={`${userData?.image}`} />
            <Avatar.Fallback delayMs={600}>{userFirstName}</Avatar.Fallback>
          </Avatar>
          <span className="font-medium ml-2 text-[17px] ">
            <span className="hidden md:inline-block">{userData.name} </span><span className="text-xs">▼</span>
          </span>
        </Dropdown.Trigger>
        <Dropdown.Popover>
          <div className="px-3 pt-3 pb-1">
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-0">
                <p className="text-sm leading-5 font-medium">{userData.name}</p>
                <p className="text-xs leading-none text-muted">
                  {userData.email}
                </p>
              </div>
            </div>
          </div>
          <Dropdown.Menu className="border-t border-gray-100">
            <Dropdown.Item id="profile" textValue="Profile">
              <Link href={"/profile"}>
                <label>👤 আমার প্রোফাইল</label>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item id="logout" textValue="Logout" variant="danger">
              <div>
                <SignoutButton></SignoutButton>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );
};

export default Signout;
