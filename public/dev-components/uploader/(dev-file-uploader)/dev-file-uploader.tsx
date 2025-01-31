"use client";
import React, { useCallback, useState, useEffect } from "react";
import { PiFilePdfFill } from "react-icons/pi";
import { GoFileDirectoryFill } from "react-icons/go";
import { MdImage } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { RxUpload } from "react-icons/rx";

interface FileWithPreview extends File {
  preview?: string;
}

export interface UploadedFile {
  file: FileWithPreview;
  progress: number;
  preview?: string;
}

interface FileDropzoneProps {
  onSubmit?: () => void;
  maxSize?: number;
  accept?: string[];
  maxFiles?: number;
  disabled?: boolean;
  uploadedImagePreview?: boolean;
  hideOnLimitExceed?: boolean;
  uploadedFiles: UploadedFile[];
  onDrop: React.Dispatch<React.SetStateAction<UploadedFile[]>>;
}

const DevFileUploader = ({
  onSubmit,
  maxSize = 5242880,
  accept = ["image/*", "application/pdf"],
  maxFiles = 5,
  disabled = false,
  uploadedFiles,
  onDrop,
  hideOnLimitExceed = false,
  uploadedImagePreview = false,
}: FileDropzoneProps) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [fileLimitExceeded, setFileLimitExceeded] = useState(false);

  // Cleanup previews when component unmounts
  useEffect(() => {
    return () => {
      uploadedFiles.forEach((fileObj) => {
        if (fileObj.preview) {
          URL.revokeObjectURL(fileObj.preview);
        }
      });
    };
  }, []);

  const generatePreview = (file: File): string | undefined => {
    if (file.type.startsWith("image/")) {
      return URL.createObjectURL(file);
    }
    return undefined;
  };

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFileLimitExceeded(false);
      const validFiles = acceptedFiles.filter((file) => file.size <= maxSize);
      const remainingSlots = maxFiles - uploadedFiles.length;
      const filesToAdd = validFiles.slice(0, remainingSlots);

      if (filesToAdd.length > 0) {
        const newFiles = filesToAdd.map((file) => ({
          file,
          progress: 0,
          preview: generatePreview(file),
        }));

        onDrop((prev) => [...prev, ...newFiles]);

        newFiles.forEach((fileObj) => {
          let progress = 0;
          const interval = setInterval(() => {
            progress += 10;
            if (progress > 100) {
              clearInterval(interval);
              return;
            }
            onDrop((prev) =>
              prev.map((f) =>
                f.file === fileObj.file ? { ...f, progress } : f
              )
            );
          }, 300);
        });
      }

      if (uploadedFiles.length + filesToAdd.length >= maxFiles) {
        setFileLimitExceeded(true);
      }
    },
    [maxSize, maxFiles, uploadedFiles.length]
  );

  const removeFile = (fileToRemove: FileWithPreview) => {
    onDrop((files) => {
      const fileObj = files.find((f) => f.file === fileToRemove);
      if (fileObj?.preview) {
        URL.revokeObjectURL(fileObj.preview);
      }
      return files.filter((f) => f.file !== fileToRemove);
    });

    if (uploadedFiles.length === maxFiles) {
      setFileLimitExceeded(false);
    }
  };

  const clearAllFiles = () => {
    uploadedFiles.forEach((fileObj) => {
      if (fileObj.preview) {
        URL.revokeObjectURL(fileObj.preview);
      }
    });
    onDrop([]);
    setFileLimitExceeded(false);
  };

  const handleFileIcon = (fileType: string) => {
    if (fileType.startsWith("image/")) return <MdImage />;
    if (fileType === "application/pdf") return <PiFilePdfFill />;
    return <GoFileDirectoryFill />;
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);
  }, []);

  return (
    <div className="w-full max-w-md bg-LIGHT dark:bg-DARK rounded-lg border border-ACCENT/40 p-3 flex flex-col gap-3 max-h-dvh overflow-hidden">
      {!fileLimitExceeded && hideOnLimitExceed && (
        <>
          <div className="text-center flex-shrink-0">
            <h2 className="font-bold text-xl text-center">Upload Files</h2>
            <p className="text-sm opacity-70">
              Make sure your files are in proper format
            </p>
          </div>
          <div
            className={`
          relative rounded-lg border-2 border-ACCENT/50 aspect-video border-dashed p-3 text-center hover:border-ACCENT grid place-content-center transition-colors
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          ${isDragActive ? "border-ACCENT bg-blue-50" : ""}
          ${
            fileLimitExceeded
              ? "border-red-500 bg-red-500/30"
              : "border-ACCENT/50"
          }
        `}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragActive(false);
              const files = Array.from(e.dataTransfer.files);
              handleDrop(files);
            }}
          >
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => {
                if (e.target.files) {
                  handleDrop(Array.from(e.target.files));
                }
              }}
              accept={accept.join(",")}
              multiple={maxFiles > 1}
              disabled={disabled}
            />

            <div className="flex items-center flex-col justify-center gap-2">
              <RxUpload className="text-5xl" />
              <p>Drag and drop files here</p>
              <button
                className="bg-ACCENT p-1.5 px-4 rounded-lg text-white"
                disabled={disabled}
              >
                Browse
              </button>
            </div>
          </div>

          {fileLimitExceeded && (
            <p className="text-red-500 text-sm text-center">
              File limit exceeded. You can only add up to {maxFiles} files at
              once.
            </p>
          )}
        </>
      )}
      {uploadedFiles.length > 0 && (
        <div className="space-y-3 flex-grow overflow-auto overflow-x-hidden">
          {uploadedFiles.map((fileObj, index) => (
            <div
              key={index}
              className="border-2 border-ACCENT/20 relative p-3 rounded-lg overflow-hidden flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="flex-shrink-0 text-lg">
                    {handleFileIcon(fileObj.file.type)}
                  </span>
                  <span className="text-sm text-ellipsis overflow-hidden flex-grow">
                    {fileObj.file.name}
                  </span>
                </div>
                <button
                  className="absolute top-1 hover:text-red-500 right-1"
                  onClick={() => removeFile(fileObj.file)}
                >
                  <IoCloseSharp />
                </button>
              </div>

              {uploadedImagePreview && fileObj.preview && (
                <div className="relative w-full aspect-video">
                  <img
                    src={fileObj.preview}
                    alt={fileObj.file.name}
                    className="absolute inset-0 w-full h-full object-contain bg-gray-100 rounded"
                  />
                </div>
              )}

              <div className="relative h-2 w-full bg-gray-200 rounded">
                <div
                  style={{ width: `${fileObj.progress}%` }}
                  className="absolute top-0 left-0 h-full bg-ACCENT rounded"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div className="flex justify-between">
          <button
            className="p-1.5 px-4 rounded-lg text-white bg-ACCENT"
            onClick={onSubmit}
          >
            Submit
          </button>
          <button
            className="text-red-500 bg-red-500/30 p-1.5 px-4 rounded-lg"
            onClick={clearAllFiles}
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default DevFileUploader;
