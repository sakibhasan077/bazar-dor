
import { signOut } from "@/lib/auth-client";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import {  Label } from "@heroui/react";
import { useRouter } from "next/navigation";

const SignoutButton = () => {

  const router = useRouter();

  const handleSignOut = async () => {
    const resData = await signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/sign-in"); // redirect to login page
    },
  },
});
  };
  return (
    <div
      className="flex w-full items-center justify-between gap-2"
      onClick={handleSignOut}
    >
      <Label>সাইন আউট</Label>
      <ArrowRightFromSquare className="size-3.5 text-danger" />
    </div>
  );
};

export default SignoutButton;
