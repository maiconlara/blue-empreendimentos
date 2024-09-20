import {
  RiLoader4Fill,
 
} from "@remixicon/react";

import {Button} from "./button";

interface SubmitButtonProps {
  children: React.ReactNode;
  isLoading: boolean;
  form: string;
}

export const SubmitButton = ({
  isLoading = false,
  form,
  children,
}: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      form={form}
      className={`${isLoading ? "cursor-default" : "cursor-pointer"} flex bg-[#0B76BB] rounded-full hover:bg-[#0B76BB]/80 transition-all w-full px-4 h-12 items-center justify-center  text-white-off font-regular text-[14px] leading-4`}
      disabled={isLoading}
    >
      {isLoading ? (
          <RiLoader4Fill className="h-5 w-5 text-white animate-spin" />
      ) : (
        children
      )}
    </Button>
  );
};
