import { signOut } from "@/lib/auth-client";
import { SignoutType } from "@/type";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import Link from "next/link";

const Signout = ({ userData }: SignoutType) => {
  let userFirstName = userData.name.split(" ")[0];
  const handleSignOut = async () => {
    const resData = await signOut();
  };
  return (
    <div>
      <Dropdown>
        <Dropdown.Trigger className="rounded-full flex items-center">
          <Avatar>
            <Avatar.Image alt="User Image" src={`${userData?.image}`} />
            <Avatar.Fallback delayMs={600}>{userFirstName}</Avatar.Fallback>
          </Avatar>
          <span className="font-medium ml-2 text-[17px]">
            {userData.name} <span className="text-xs">▼</span>
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
              <div
                className="flex w-full items-center justify-between gap-2"
                onClick={handleSignOut}
              >
                <Label>Log Out</Label>
                <ArrowRightFromSquare className="size-3.5 text-danger" />
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );
};

export default Signout;
