import { Slide, toast } from "react-toastify";

const showSuccessToast = (message: string) =>
  toast(
    <div className="flex items-center justify-between gap-4 text-black">
      <div className="bg-secondary-ultra-light flex size-8 items-center justify-center rounded-full">
        <span className="iconify-[material-symbols--check]"></span>
      </div>
      <p>{message}</p>
    </div>,
    {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    },
  );

export default showSuccessToast;
