import SyncLoader from "react-spinners/SyncLoader";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SyncLoader color="#34C759" />
    </div>
  );
}
