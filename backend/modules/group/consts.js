
export const MAX_LEN_GROUP_NAME = 32
export const MAX_LEN_NOTE_DESCRIPTION = 255
export const MAX_LEN_TASK_DESCRIPTION = 255

export const ANSWERS = {
  MY_PERMISSIONS_NOT_GROUP_ID: { code:397, error:`Cannot get permissions without prividing groupId` },
  MY_PERMISSIONS_NOT_MEMBER: { code:396, error:`Cannot get permmisions from group that u are not assigned in.` },
  MY_PERMISSIONS_NOT_FOUND: { code:395, error:`Group permissions not found.` },

  NOTE_UPDATE_ROLE_NOT_ALLOWED: { code:321, error:`Your role dont allow you to delete user from group.` },
  NOTE_UPDATE_NOT_VALUE: { code:307, error:`To update an note, you have to provide value.` },
  NOTE_UPDATE_NOTE_NOT_EXISTS: { code:306, error:`Target note does not exists.` },
  NOTE_UPDATE_NOT_ALLOWED: { code:308, error:`Only Lecturer or Admin can update note.` },
  NOTE_UPDATE_SUCCESS: { code:309, success:`Note has been updated.` },

  GET_TARGET_GROUP_MISS: { code:302, error:`Group with specified ID not found.` },
  GET_GROUP_PERMS_NO_GROUP_ID: { code:397, error:`Cannot get permissions without prividing groupId` },
  GET_GROUP_PERMS_NO_ASSIGNED: { code:396, error:`Cannot get permmisions from group that u are not assigned in.` },
  GET_GROUP_PERMS_NOT_FOUND: { code:395, error:`Group permissions not found.` },

  GET_ALL_GROUP_GROUP_NOT_EXISTS: { code:302, error:`Targeted group does not exist.` },
  GET_ALL_GROUP_NOT_ALLOWED: { code:302, error:`Only member or platform admin can look at userlist of group.` },
  NOT_ALL_DATA_WAS_PROVIDED: { code:363, error:`Not all required data was provided.` },

  DELETE_USER_NOT_ALLOWED: { code:321, error:`Your role dont allow you to delete user from group.` },
  DELETE_USER_GROUP_NOT_EXISTS: { code:302, error:`Targeted group does not exist.` },
  DELETE_USER_GROUP_NOT_MEMBER: { code:305, error:`User is not a member of this group.` },
  DELETE_USER_SUCCESS: { code:310, success:`User has been deleted from group successfully` },

  DELETE_NOTE_NOTE_ID_MISS: { code:306, error:`Target noteId is not provided.` },
  DELETE_NOTE_NOT_EXISTS: { code:306, error:`Target note does not exists.` },
  DELETE_NOTE_NOT_ALLOWED: { code:310, error:`Delete notes is option only for users with canManageNotes privilages or PE Master.` },
  DELETE_NOTE_SUCCESS: { code:307, success:`Note has been deleted successfully.` },

  GET_GROUP_NOTES_GROUP_NOT_EXISTS: { code:302, error:`Targeted group does not exist.` },
  GET_GROUP_NOTES_NOT_ASSIGNED: { code:305, error:`Only member or Platform owner can see all notes` },

  CREATE_NOTE_DATA_NOT_PROVIDED: { code:323, error:`Cannot create note, because value/userId is not provided.` },
  CREATE_NOTE_VALUE_NOT_NUMBER: { code:324, error:`Cannot create note, because value is not a intiger.` },
  CREATE_NOTE_NOT_ALLOWED: { code:322, error:`Only group member with canManageNotes privilages can create new notes.` },
  CREATE_NOTE_GROUP_NOT_EXISTS: { code:302, error:`Targeted group does not exist.` },
  CREATE_NOTE_NOT_MEMBER: { code:305, error:`User is not a member of this group.` },
  CREATE_NOTE_ASSIGN_TO_TEACHER: { code:367, error:`Cannot assign note to user with role named -> "Prowadzący" ` },
  CREATE_NOTE_CANT_FOR_TEACHER: { code:313, error:`This user cannot get grades in group where he is an lecturer.` },
  CREATE_NOTE_BAD_DESCRIPTION_LEN: { code:327, error:`Cannot create note, because max length of note description is ${MAX_LEN_NOTE_DESCRIPTION} chars.` },
  CREATE_NOTE_SUCCESS: { code:353, success:`Note has been created.` },

  GET_ALL_PLATFORM_GROUPS_PLATFORM_NOT_EXISTS: { code:208, error:`Cannot find target platform, Unable to send all groups of target platform` },
  GET_ALL_PLATFORM_GROUPS_NOT_ALLOWED: { code:217, error:`You cannot see all of groups in platform, You dont have privilages to do int.` },

  DELETE_GROUP_NOT_ALLOWED: { code:330, error:`To delete group, required is masterOfGroup permission.` },
  DELETE_GROUP_GROUP_NOT_EXISTS: { code:302, error:`Targeted group does not exist.` },
  DELETE_GROUP_SUCCESS: { code:303, success:`Group has been deleted sucessfuly.` },

  ADD_GROUP_MEMBER_USER_MISS: { code:321, erorr:`User with provided ID does not exist` },
  ADD_GROUP_MEMBER_NOT_ALLOWED: { code:319, error:`Your privilages dont allows you to, assign new member to group.` },
  ADD_GROUP_MEMBER_GROUP_NOT_EXISTS: { code:302, error:`Targeted group does not exist.` },
  ADD_GROUP_MEMBER_NOT_LECTURER_OWNER: { code:300, error:`Only Lecturer or Platform owner can assign new members to group.` },
  ADD_GROUP_MEMBER_ALREADY_ADDED: { code:321, success:`All selected users are already assigned in group.` },
  ADD_GROUP_MEMBER_PARTLY_SUCCESS: { code:320, success:`Not all of users was assigned to group. Because not all of users are targeted platfrom member.` },
  ADD_GROUP_MEMBER_SUCCESS: { code:302, success:`Succesfully assigned users to group.` },

  GET_NOTES_FROM_GROUP_VER_PRIVILAGES_BAD_GROUP_ID: { code:389, error:`cannot find group or groupId, check that groupId is correct` },

  GET_NOTES_FROM_GROUP_MISS_GROUP_ID: { code:395, error:`groupId not privided in params.` },

  CREATE_GROUP_CAN_TEACH_FALSE: { code:325, error:`Target user does not contain privilages to teach other peoples.` },
  CREATE_GROUP_NOT_ALLOWED: { code:312, error:`Your role in platform dont allow you to create groups.` },
  CREATE_GROUP_DATA_MISS: { code:322, error:`Can not create group, because not all credentials was provided.`  },
  CREATE_GROUP_PLATFROM_NOT_EXISTS: { code:332, error:`Platform does not exist` },
  CREATE_GROUP_DUPLICATE: { code:355, error:`Group name duplicate - cannot create group with name that already is used.` },
  CREATE_GROUP_BAD_NAME_LEN: { code:356, error:`Length of group name must be less then ${MAX_LEN_GROUP_NAME}` },

  GET_TEMPLATE_PERMS_MISS_GROUP_ID: { code:334, error:`Cannot find groupId in request params.` },
  GET_TEMPLATE_PERMS_NOT_ALLOWED: { code:333, erorr:`can not get list of group perms, because u are not  -> PE master or group member.` },

  TASK_CREATE_NOT_ALLOWED: { code:360, error:`Create task require canTeach-platform-permission` },
  TASK_EXPIRE_DATE_MISS: { code:361, error:`Expire date of task has been not provided.` },
  TASK_DESCRIPTION_OVER_LEN: { code:346, error:`Title of task has been not provied` },
  TASK_NO_TITLE: { code:347, error:`Title of task has been not provied` },
  TASK_CREATE_SUCCESS: { code:335, success:`Task has been created.` },
  TASK_DONE_SUCCESS: { code:334, success:`Your task has been correctly handled ` },
  TASK_DELETE_SUCCESS: { code:336, success:`Task has been deleted with all files assigned to task.` },
  TASK_UPLOAD_FAILED: { code:337, error:`File upload error` },
  TASK_CREATE_NAME_EXISTS: { code:366, error:`Task with provided name already exists` },

  GRADES_NEW_VALUES_MISS: { code:348, error:`Cannot update grades/scale of grades, because new values are not provided.` },
  GRADES_NOT_INT: { code:338, error:`Every grades should be an integer number.` },
  REPEATED_GRADES: { code:364, error:`Grades should be unique.` },
  GRADES_UPDATED_SUCCESS: { code:339, success:`Succesfully updated current grades.` },
  GET_GRADES_SUCCESS: { code:340, success:`Succesfully find scale of grades in this group.` },
  GET_GRADES_NOT_ALLOWED: { code:341, error:`Only user with canTeach permission can get grade scale.` },
  GRADE_IS_NOT_IN_SCALE: { code:362, error:`Provided grade value is not defined in grades scale.` },

  CREATE_GROUP_PERMISSION_SUCCESS: { code:342, success:`Succesfully created group template permission` },
  ASSIGN_PERMISSION_TO_USER_SUCCESS: { code:343, success:`User Assigned to permission Successfuly.` },
  UPDATE_PERMISSIONS_SUCCESS: { code:345, success:`Permissions has been updated.` },
  UPDATE_PERMISSIONS_TARGET_PERMS_MISS: { code:349, error:`Cannot update role, beacuse target role has been not found.` },

  CREATE_ROLE_NAME_EXISTS: { code:365, error:`Role with provided name already exists.` },
  CREATE_ROLE_NAME_MISS: { code:350, error:`Cannot create group role without providing name of new role.` },
  DELETE_ROLE_OWNER: { code:355, error:`cannot delete group owner role.` },
  UPDATE_ROLE_OWNER: { code:356, error:`cannot update group owner role.` },
  DELETE_ROLE_NOT_ALLOWED: { code:351, error:`Only user with abilities - canManageRoles, can delete roles.` },
  DELETE_ROLE_SUCCESS: { code:352, success:`role has been deleted succesfully` },

  POST_MATERIALS_NOT_ALLOWED: { code:353, error:`Uploading materials require group.canTeach abilities.` },
  POST_MATERIALS_FILE_MISS: { code:344, error:`Upload file FAILED, request does not contain file.` },

  DELETE_DOCUMENT_FROM_GROUP_NOT_EXISTS: { code:354, error:`DB-document of target file does not exist` },
  DELETE_FILE_FROM_GROUP_NOT_EXISTS: { code:357, error:`Disk does not contain target file` },
  DELETE_FILE_SUCCESS: { code:358, success:`File has been deleted` },

  UPLOAD_FILE_SUCCESS: { code:359, success:`File upload ended with status success.` },
  CREATE_ROLE_NOT_ALLOWED:{ code:368, error:`Only user with canManageRoles can create new roles.` },


}

