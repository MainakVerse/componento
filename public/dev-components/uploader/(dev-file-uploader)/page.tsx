"use client";
import React, { useState } from "react";
import DevFileUploader, { UploadedFile } from "./dev-file-uploader";

const DevFileUploaderUsage = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  return (
   <div className="max-w-xs w-full">
     <DevFileUploader
      accept={["image/*", "application/pdf"]}
      maxSize={5242880}
      uploadedFiles={uploadedFiles}
      uploadedImagePreview
      hideOnLimitExceed
      onDrop={setUploadedFiles}
      maxFiles={4}
      onSubmit={() => {
        console.log("submitted");
      }}
    />
   </div>
  );
};

export default DevFileUploaderUsage;
