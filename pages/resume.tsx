import Image from "next/image";
import { useCallback, useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Button } from "primereact/button";
import { useRouter } from "next/router";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [loading1, setLoading1] = useState(false);

  const router = useRouter();

  const handleExternalView = useCallback(() => {
    router.push(
      "https://drive.google.com/file/d/1cK6ETW4kmdUYgf1eW8cfMEfSFljuJa82/view?usp=sharing"
    );
    setShowDialog(false);
  }, [router]);

  const onButtonLoading = useCallback(() => {
    setLoading1(true);
    setShowDialog(true);

    setTimeout(() => {
      setLoading1(false);
    }, 3000);
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#757F9A] to-[#D7DDE8]">
      <div className="relative w-full h-96 ">
        <Image
          src="https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
          alt="..."
          layout="fill"
          objectFit="cover"
        />
        <h1 className="absolute tracking-widest font-bold text-3xl flex items-center justify-center h-full w-full text-white">
          Resume
        </h1>
      </div>

      <div className="bg-gradient-to-r flex items-center justify-center from-[#757F9A] to-[#D7DDE8] md:hidden h-[50vh] min-h-[568px]">
        <ConfirmDialog
          visible={showDialog}
          onHide={() => setShowDialog(false)}
          message="This will redirect you to external view of the resume. Do you want to continue?"
          header="Confirmation"
          icon="pi pi-exclamation-circle"
          accept={() => handleExternalView()}
          reject={() => setShowDialog(false)}
        />

        <Button
          label="View Resume"
          className="p-button-info "
          icon="pi pi-link"
          iconPos="right"
          loading={loading1}
          onClick={onButtonLoading}
        />
      </div>

      <div className="md:flex pt-8 pb-2 flex-row justify-around items-center  hidden ">
        <Button
          icon="pi pi-chevron-left"
          className="p-button-rounded p-button-text"
          onClick={() =>
            setPageNumber((prevState) =>
              prevState - 1 === 0 ? 2 : prevState - 1
            )
          }
        />
        <div className="text-center ">
          <Document
            file="/cv.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            className=""
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p className="my-4">
            Page {pageNumber} of {numPages}
          </p>
        </div>

        <Button
          icon="pi pi-chevron-right"
          className="p-button-rounded p-button-text p-button-info"
          onClick={() =>
            setPageNumber((prevState) =>
              prevState + 1 === 3 ? 1 : prevState + 1
            )
          }
        />
      </div>
    </div>
  );
};

export default Resume;
