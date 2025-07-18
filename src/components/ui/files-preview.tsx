import { cn } from "@/lib/utils";
import React, { Fragment } from "react";
import { Image } from "./image";
import { Status, TMedia } from "@/hooks/useFileUpload";
import { Loader } from "./loader";
import { HiDocumentText, HiOutlineTrash } from "react-icons/hi";
import { ImLoop2 } from "react-icons/im";
import { Spacing } from "./spacing";
import { Card } from "@/components/ui/card";
import { Text } from "./text";
import { Heading } from "./heading";
import { Row } from "../grid/Row";
import { Col } from "../grid/Col";
interface Props {
  files: TMedia[];
}

export type TPreviewType = "accepted-file" | "rejected-file";
export type TPreview = TMedia & {
  errors?: string[];
  status?: Status;
  onDelete?: (id: string, type?: TPreviewType) => void;
  onRetry?: (id: string) => void;
  type?: TPreviewType;
};
const Preview = ({
  id,
  mime,
  name,
  size,
  url,
  errors,
  onDelete,
  onRetry,
  status,
  type = "accepted-file",
}: TPreview) => {
  const fileArr = name.split(".");
  const extenstion = fileArr[fileArr.length - 1];
  const fileName = fileArr.slice(0, fileArr.length - 1).toString();
  const shortenedName =
    fileName.length > 40
      ? fileArr
          .slice(0, fileArr.length - 1)
          .toString()
          .slice(0, 37) + "..."
      : fileName;

  const fileSize = size / 1024 < 1024 ? size / 1024 : size / (1024 * 1024);
  const sizeUnit = size / 1024 < 1024 ? "KB" : "MB";
  let control = <Loader className="ml-auto" variant="primary" />;

  if (status === "success" || errors?.length) {
    control = (
      <button
        className="text-destructive ml-auto block"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onDelete?.(id, type);
        }}
      >
        <HiOutlineTrash />
      </button>
    );
  } else if (status === "failed") {
    control = (
      <button
        className="ml-auto block"
        type="button"
        onClick={() => onRetry?.(id)}
      >
        <ImLoop2 />
      </button>
    );
  }
  return (
    <div
      className={cn(
        "mb-3 flex-row items-center",
        status === "failed" ? "text-destructive border-destructive" : "",
      )}
    >
      {mime?.indexOf("image") > -1 ? (
        <Image src={url} responsive={true} alt={name} />
      ) : mime.indexOf("video") > -1 ? (
        <video className="object-cover" width={200} controls>
          <source src={url} id="video_here" />
          Your browser does not support HTML5 video.
        </video>
      ) : (
        <HiDocumentText size="1.75rem" className="text-danger" />
      )}

      {/* <Spacing className="ml-3 flex-1" level={3}>
        {control}
        <Text level={3}>
          {shortenedName}.{extenstion}
        </Text>
        <Text level={3}>
          {fileSize.toFixed(2)} {sizeUnit}
        </Text>
        {errors?.map((error) => (
          <Text key={error}>{error}</Text>
        ))}
      </Spacing> */}
    </div>
  );
};
export type TFilesPreviewProps = {
  files: Omit<TPreview, "onDelete" | "onRetry">[];
  rejectedFiles: Omit<TPreview, "onDelete" | "onRetry">[];
  onDelete: TPreview["onDelete"];
  onRetry: TPreview["onRetry"];
};
export const FilesPreview = ({
  rejectedFiles = [],
  files = [],
  onDelete,
  onRetry,
}: TFilesPreviewProps) => {
  return (
    <Fragment>
      {Boolean(files.length) && (
        <Preview {...files[0]} onDelete={onDelete} onRetry={onRetry} />
      )}
      {Boolean(rejectedFiles?.length) && (
        <Heading level={4} className="mt-5">
          Rejected Files
        </Heading>
      )}
      {Boolean(rejectedFiles.length) && (
        <Preview {...files[0]} onDelete={onDelete} onRetry={onRetry} />
      )}
    </Fragment>
  );
};
