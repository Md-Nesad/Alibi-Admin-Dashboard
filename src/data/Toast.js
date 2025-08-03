import toast from "react-hot-toast";

export const approve = () => setTimeout(() => toast.success("Approved"), 500);

export const message = () =>
  setTimeout(() => toast.success("Message Sent"), 500);

export const download = () =>
  setTimeout(() => toast.success("Download Completed"), 500);
