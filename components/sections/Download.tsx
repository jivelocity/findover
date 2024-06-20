import { Button } from "../ui/button";
import { downloadPDF } from "@/lib/utils";

const Download = () => {
  const onDownload = (e: any) => {
    e.preventDefault();
    downloadPDF(
      "/Underwrite-Properties-10X-Faster-&-Cheaper-with-AI.pdf",
      "Underwrite-Properties-10X-Faster-&-Cheaper-with-AI.pdf"
    );
  };
  return (
    <section id="download" className="w-full bg-[#4F75FB] py-12 lg:py-20 ">
      <div className="container w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between">
        <h1 className="text-3xl text-center md:text-left md:text-6xl font-semibold w-full md:w-1/2">
          Streamline Your Underwriting Process
        </h1>
        <div className="w-full md:w-1/2 flex items-center justify-center mt-4 md:mt-0">
          <Button
            onClick={onDownload}
            size={"lg"}
            className="font-semibold bg-white text-black hover:bg-black hover:text-white"
          >
            Download
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Download;
