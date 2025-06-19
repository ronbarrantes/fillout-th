import { FiEdit3, FiFileText } from "react-icons/fi";
import { IoFlagSharp } from "react-icons/io5";
import {
  LuClipboard,
  LuCopy,
  LuEllipsisVertical,
  LuInfo,
  LuPlus,
  LuTrash,
} from "react-icons/lu";

export const iconFileNames = {
  document: { icon: FiFileText },
  info: { icon: LuInfo },
  edit: { icon: FiEdit3 },
  copy: { icon: LuClipboard },
  flag: { icon: IoFlagSharp },
  duplicate: { icon: LuCopy },
  delete: { icon: LuTrash },
  add: { icon: LuPlus },
  more: { icon: LuEllipsisVertical },
};

import {} from "react-icons/fi";

export type IconsLisType = keyof typeof iconFileNames;

export const mapIconData = {} as Record<IconsLisType, IconsLisType>;

(Object.keys(iconFileNames) as IconsLisType[]).forEach((key) => {
  mapIconData[key] = key;
});
