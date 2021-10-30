import { UserDtoAdmin } from "./UserDto-Admin";

export interface GroupDtoAdmin{
    groupName?: string;
    id?: number;
    students?: UserDtoAdmin[];
    }
