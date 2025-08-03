import toast from "react-hot-toast";

export const approve = () => setTimeout(() => toast.success("Approved"), 500);

export const message = () =>
  setTimeout(() => toast.success("Message Sent"), 500);

export const openFolder = () =>
  setTimeout(() => toast.success("Folder Opened"), 500);
