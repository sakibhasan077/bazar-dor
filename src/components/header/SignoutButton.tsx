import { signOut } from "@/lib/auth-client";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Label } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignoutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("সফলভাবে সাইন আউট হয়েছে");
          router.push("/sign-in");
        },

        onError: (error) => {
          toast.error(error.error.message || "Sign out failed!");
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
