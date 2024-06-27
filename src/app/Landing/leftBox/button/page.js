const DownloadBtn = () => {
  return (
    <>
      <a href="./public/arifkoyani.pdf" download="./public/arifkoyani.pdf">
        <button
          type="button"
          className="text-[#141c27] bg-[#f79b00] mt-[15px] hover:bg-[#f79b00] hover:shadow-[0_0_15px_rgba(247,155,0,0.7)] focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded text-sm px-[55px] py-2 text-center me-2 mb-1 dark:focus:ring-yellow-900"
        >
          Download CV
        </button>
      </a>
    </>
  );
};
export default DownloadBtn;
