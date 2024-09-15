import {LoadingIcon} from "@/assets/icons";
import {Button} from "./button";

interface SubmitButtonProps {
  children: React.ReactNode;
  isLoading: boolean;
  form: string;
}

const SubmitButton = ({
  isLoading = false,
  form,
  children,
}: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      form={form}
      className="flex bg-blue-secondary hover:bg-blue-hover transition-colors cursor-pointer w-auto min-w-[250px] px-4 h-12 items-center justify-center rounded text-white-off font-regular text-[14px] leading-4"
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="animate-spin">
          <LoadingIcon w={28} h={28} />
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;