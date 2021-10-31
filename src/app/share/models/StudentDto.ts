export interface StudentDto{
    email?: string;
    firstName?: string;
    groupChatRoomId?: number;
    groupId?: number;
    groupName?: string;
    id?: number;
    lastName?: string;
    roles?: string[];  // [ ROLE_ADMIN or ROLE_PRE_VERIFICATION or ROLE_STUDENT or ROLE_TEACHER ]
}
