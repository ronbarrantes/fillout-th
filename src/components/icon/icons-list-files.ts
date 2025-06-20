import { FiEdit3, FiFileText } from "react-icons/fi";
import { IoFlagSharp } from "react-icons/io5";
import {
  LuCircleCheck,
  LuClipboard,
  LuCopy,
  LuEllipsisVertical,
  LuInfo,
  LuPlus,
} from "react-icons/lu";
import { TbTrash } from "react-icons/tb";

export const iconFileNames = {
  document: { icon: FiFileText },
  info: { icon: LuInfo },
  edit: { icon: FiEdit3 },
  copy: { icon: LuClipboard },
  check: { icon: LuCircleCheck },
  flag: { icon: IoFlagSharp },
  duplicate: { icon: LuCopy },
  delete: { icon: TbTrash },
  add: { icon: LuPlus },
  more: { icon: LuEllipsisVertical },
};

import {} from "react-icons/fi";

export type IconsLisType = keyof typeof iconFileNames;

export const mapIconData = {} as Record<IconsLisType, IconsLisType>;

(Object.keys(iconFileNames) as IconsLisType[]).forEach((key) => {
  mapIconData[key] = key;
});
