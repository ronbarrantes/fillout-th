import {
  FiClipboard,
  FiEdit3,
  FiFileText,
  FiMoreVertical,
  FiPlus,
} from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import {
  IoCopyOutline,
  IoFlagSharp,
  IoInformationCircleOutline,
} from "react-icons/io5";

export const iconFileNames = {
  document: { icon: FiFileText },
  info: { icon: IoInformationCircleOutline },
  edit: { icon: FiEdit3 },
  copy: { icon: FiClipboard },
  flag: { icon: IoFlagSharp },
  duplicate: { icon: IoCopyOutline },
  delete: { icon: HiOutlineTrash },
  add: { icon: FiPlus },
  more: { FiMoreVertical },
};

import {} from "react-icons/fi";

export type IconsLisType = keyof typeof iconFileNames;

export const mapIconData = {} as Record<IconsLisType, IconsLisType>;

(Object.keys(iconFileNames) as IconsLisType[]).forEach((key) => {
  mapIconData[key] = key;
});
