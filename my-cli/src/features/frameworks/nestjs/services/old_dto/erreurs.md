            ~~~~~~~~~~~~~

src/modules/task/controller/task.controller.ts:16:10 - error TS2305: Module '"../dto/update-task.dto"' has no exported member 'UpdateTaskDto'.

16 import { UpdateTaskDto } from '../dto/update-task.dto';
            ~~~~~~~~~~~~~

src/modules/task/controller/task.controller.ts:17:10 - error TS2305: Module '"../dto/response-task.dto"' has no exported member 'ResponseTaskDto'.      

17 import { ResponseTaskDto } from '../dto/response-task.dto';
            ~~~~~~~~~~~~~~~

src/modules/task/dto/response-task.dto.ts:67:17 - error TS2304: Cannot find name 'CalendarEventResponseDto'.

67     type: () => CalendarEventResponseDto,
                   ~~~~~~~~~~~~~~~~~~~~~~~~

src/modules/task/dto/response-task.dto.ts:72:15 - error TS2304: Cannot find name 'CalendarEventResponseDto'.

72   @Type(() => CalendarEventResponseDto)
                 ~~~~~~~~~~~~~~~~~~~~~~~~

src/modules/task/dto/response-task.dto.ts:75:20 - error TS2304: Cannot find name 'CalendarEventResponseDto'.

75   calendarEvents?: CalendarEventResponseDto[];
                      ~~~~~~~~~~~~~~~~~~~~~~~~

src/modules/task/dto/response-task.dto.ts:77:30 - error TS2304: Cannot find name 'ProjectResponseDto'.

77   @ApiProperty({ type: () => ProjectResponseDto, required: false })
                                ~~~~~~~~~~~~~~~~~~

src/modules/task/dto/response-task.dto.ts:79:15 - error TS2304: Cannot find name 'ProjectResponseDto'.

79   @Type(() => ProjectResponseDto)
                 ~~~~~~~~~~~~~~~~~~

src/modules/task/dto/response-task.dto.ts:81:14 - error TS2304: Cannot find name 'ProjectResponseDto'.

81   projects?: ProjectResponseDto;
                ~~~~~~~~~~~~~~~~~~

src/modules/task/dto/response-task.dto.ts:94:3 - error TS2300: Duplicate identifier 'tasks'.

94   tasks?: TaskResponseDto[];
     ~~~~~

src/modules/task/dto/response-task.dto.ts:94:3 - error TS2717: Subsequent property declarations must have the same type.  Property 'tasks' must be of type 'TaskResponseDto | undefined', but here has type 'TaskResponseDto[] | undefined'.

94   tasks?: TaskResponseDto[];
     ~~~~~

  src/modules/task/dto/response-task.dto.ts:87:3
    87   tasks?: TaskResponseDto;
         ~~~~~
    'tasks' was also declared here.

src/modules/task/dto/response-task.dto.ts:96:30 - error TS2304: Cannot find name 'UserResponseDto'.

96   @ApiProperty({ type: () => UserResponseDto, required: false })
                                ~~~~~~~~~~~~~~~

src/modules/task/dto/response-task.dto.ts:98:15 - error TS2304: Cannot find name 'UserResponseDto'.

98   @Type(() => UserResponseDto)
                 ~~~~~~~~~~~~~~~

src/modules/task/dto/response-task.dto.ts:100:11 - error TS2304: Cannot find name 'UserResponseDto'.

100   users?: UserResponseDto;
              ~~~~~~~~~~~~~~~

src/modules/task/dto/response-task.dto.ts:102:30 - error TS2304: Cannot find name 'UserResponseDto'.

102   @ApiProperty({ type: () => UserResponseDto, required: false })
                                 ~~~~~~~~~~~~~~~

src/modules/task/dto/response-task.dto.ts:104:15 - error TS2304: Cannot find name 'UserResponseDto'.

104   @Type(() => UserResponseDto)
                  ~~~~~~~~~~~~~~~

src/modules/task/dto/response-task.dto.ts:106:3 - error TS2300: Duplicate identifier 'users'.

106   users?: UserResponseDto;
      ~~~~~

src/modules/task/dto/response-task.dto.ts:106:11 - error TS2304: Cannot find name 'UserResponseDto'.

106   users?: UserResponseDto;
              ~~~~~~~~~~~~~~~

src/modules/task/dto/response-task.dto.ts:109:17 - error TS2304: Cannot find name 'TimeEntryResponseDto'.

109     type: () => TimeEntryResponseDto,
                    ~~~~~~~~~~~~~~~~~~~~

src/modules/task/dto/response-task.dto.ts:114:15 - error TS2304: Cannot find name 'TimeEntryResponseDto'.

114   @Type(() => TimeEntryResponseDto)
                  ~~~~~~~~~~~~~~~~~~~~

src/modules/task/dto/response-task.dto.ts:117:16 - error TS2304: Cannot find name 'TimeEntryResponseDto'.

117   timeEntrys?: TimeEntryResponseDto[];
                   ~~~~~~~~~~~~~~~~~~~~

src/modules/task/dto/task.dto.ts:79:50 - error TS2551: Property 'task' does not exist on type 'Project'. Did you mean 'tasks'?

79   @ManyToOne(() => Project, (project) => project.task)
                                                    ~~~~

  src/modules/project/entity/project.entity.ts:135:3
    135   tasks: Task[];
          ~~~~~
    'tasks' is declared here.

src/modules/task/dto/task.dto.ts:93:41 - error TS2551: Property 'task' does not exist on type 'User'. Did you mean 'tasks'?

93   @ManyToOne(() => User, (user) => user.task)
                                           ~~~~

  src/modules/user/entity/user.entity.ts:152:3
    152   tasks: Task[];
          ~~~~~
    'tasks' is declared here.

src/modules/task/dto/task.dto.ts:98:41 - error TS2551: Property 'task' does not exist on type 'User'. Did you mean 'tasks'?

98   @ManyToOne(() => User, (user) => user.task)
                                           ~~~~

  src/modules/user/entity/user.entity.ts:152:3
    152   tasks: Task[];
          ~~~~~
    'tasks' is declared here.

src/modules/task/dto/task.dto.ts:101:3 - error TS2300: Duplicate identifier 'user'.

101   user: User;
      ~~~~

src/modules/task/entity/task.entity.ts:79:50 - error TS2551: Property 'task' does not exist on type 'Project'. Did you mean 'tasks'?

79   @ManyToOne(() => Project, (project) => project.task)
                                                    ~~~~

  src/modules/project/entity/project.entity.ts:135:3
    135   tasks: Task[];
          ~~~~~
    'tasks' is declared here.

src/modules/task/entity/task.entity.ts:93:41 - error TS2551: Property 'task' does not exist on type 'User'. Did you mean 'tasks'?

93   @ManyToOne(() => User, (user) => user.task)
                                           ~~~~

  src/modules/user/entity/user.entity.ts:152:3
    152   tasks: Task[];
          ~~~~~
    'tasks' is declared here.

src/modules/task/entity/task.entity.ts:98:41 - error TS2551: Property 'task' does not exist on type 'User'. Did you mean 'tasks'?

98   @ManyToOne(() => User, (user) => user.task)
                                           ~~~~

  src/modules/user/entity/user.entity.ts:152:3
    152   tasks: Task[];
          ~~~~~
    'tasks' is declared here.

src/modules/task/entity/task.entity.ts:101:3 - error TS2300: Duplicate identifier 'user'.

101   user: User;
      ~~~~

src/modules/task/service/task.service.ts:6:10 - error TS2305: Module '"../dto/create-task.dto"' has no exported member 'CreateTaskDto'.

6 import { CreateTaskDto } from '../dto/create-task.dto';
           ~~~~~~~~~~~~~

src/modules/task/service/task.service.ts:7:10 - error TS2305: Module '"../dto/update-task.dto"' has no exported member 'UpdateTaskDto'.

7 import { UpdateTaskDto } from '../dto/update-task.dto';
           ~~~~~~~~~~~~~

src/modules/task/service/task.service.ts:8:10 - error TS2305: Module '"../dto/response-task.dto"' has no exported member 'ResponseTaskDto'.

8 import { ResponseTaskDto } from '../dto/response-task.dto';
           ~~~~~~~~~~~~~~~

src/modules/task/service/task.service.ts:19:5 - error TS2740: Type 'Task[]' is missing the following properties from type 'Task': id, project_id, name, 
created_by, and 8 more.

19     return await this.taskRepository.save(task);
       ~~~~~~

src/modules/team-member/controller/team-member.controller.ts:15:10 - error TS2305: Module '"../dto/create-team-member.dto"' has no exported member 'CreateTeamMemberDto'.

15 import { CreateTeamMemberDto } from '../dto/create-team-member.dto';
            ~~~~~~~~~~~~~~~~~~~

src/modules/team-member/controller/team-member.controller.ts:16:10 - error TS2305: Module '"../dto/update-team-member.dto"' has no exported member 'UpdateTeamMemberDto'.

16 import { UpdateTeamMemberDto } from '../dto/update-team-member.dto';
            ~~~~~~~~~~~~~~~~~~~

src/modules/team-member/controller/team-member.controller.ts:17:10 - error TS2305: Module '"../dto/response-team-member.dto"' has no exported member 'ResponseTeamMemberDto'.

17 import { ResponseTeamMemberDto } from '../dto/response-team-member.dto';
            ~~~~~~~~~~~~~~~~~~~~~

src/modules/team-member/service/team-member.service.ts:6:10 - error TS2305: Module '"../dto/create-team-member.dto"' has no exported member 'CreateTeamMemberDto'.

6 import { CreateTeamMemberDto } from '../dto/create-team-member.dto';
           ~~~~~~~~~~~~~~~~~~~

src/modules/team-member/service/team-member.service.ts:7:10 - error TS2305: Module '"../dto/update-team-member.dto"' has no exported member 'UpdateTeamMemberDto'.

7 import { UpdateTeamMemberDto } from '../dto/update-team-member.dto';
           ~~~~~~~~~~~~~~~~~~~

src/modules/team-member/service/team-member.service.ts:8:10 - error TS2305: Module '"../dto/response-team-member.dto"' has no exported member 'ResponseTeamMemberDto'.

8 import { ResponseTeamMemberDto } from '../dto/response-team-member.dto';
           ~~~~~~~~~~~~~~~~~~~~~

src/modules/team-member/service/team-member.service.ts:19:5 - error TS2739: Type 'TeamMember[]' is missing the following properties from type 'TeamMember': id, team_id, user_id, team, user

19     return await this.teamMemberRepository.save(teamMember);
       ~~~~~~

src/modules/team/controller/team.controller.ts:15:10 - error TS2305: Module '"../dto/create-team.dto"' has no exported member 'CreateTeamDto'.

15 import { CreateTeamDto } from '../dto/create-team.dto';
            ~~~~~~~~~~~~~

src/modules/team/controller/team.controller.ts:16:10 - error TS2305: Module '"../dto/update-team.dto"' has no exported member 'UpdateTeamDto'.

16 import { UpdateTeamDto } from '../dto/update-team.dto';
            ~~~~~~~~~~~~~

src/modules/team/controller/team.controller.ts:17:10 - error TS2305: Module '"../dto/response-team.dto"' has no exported member 'ResponseTeamDto'.      

17 import { ResponseTeamDto } from '../dto/response-team.dto';
            ~~~~~~~~~~~~~~~

src/modules/team/dto/response-team.dto.ts:31:17 - error TS2304: Cannot find name 'ProjectResponseDto'.

31     type: () => ProjectResponseDto,
                   ~~~~~~~~~~~~~~~~~~

src/modules/team/dto/response-team.dto.ts:36:15 - error TS2304: Cannot find name 'ProjectResponseDto'.

36   @Type(() => ProjectResponseDto)
                 ~~~~~~~~~~~~~~~~~~

src/modules/team/dto/response-team.dto.ts:39:14 - error TS2304: Cannot find name 'ProjectResponseDto'.

39   projects?: ProjectResponseDto[];
                ~~~~~~~~~~~~~~~~~~

src/modules/team/dto/response-team.dto.ts:41:30 - error TS2304: Cannot find name 'UserResponseDto'.

41   @ApiProperty({ type: () => UserResponseDto, required: false })
                                ~~~~~~~~~~~~~~~

src/modules/team/dto/response-team.dto.ts:43:15 - error TS2304: Cannot find name 'UserResponseDto'.

43   @Type(() => UserResponseDto)
                 ~~~~~~~~~~~~~~~

src/modules/team/dto/response-team.dto.ts:45:11 - error TS2304: Cannot find name 'UserResponseDto'.

45   users?: UserResponseDto;
             ~~~~~~~~~~~~~~~

src/modules/team/dto/team.dto.ts:43:41 - error TS2551: Property 'team' does not exist on type 'User'. Did you mean 'teams'?

43   @ManyToOne(() => User, (user) => user.team)
                                           ~~~~

  src/modules/user/entity/user.entity.ts:160:3
    160   teams: Team[];
          ~~~~~
    'teams' is declared here.

src/modules/team/entity/team.entity.ts:43:41 - error TS2551: Property 'team' does not exist on type 'User'. Did you mean 'teams'?

43   @ManyToOne(() => User, (user) => user.team)
                                           ~~~~

  src/modules/user/entity/user.entity.ts:160:3
    160   teams: Team[];
          ~~~~~
    'teams' is declared here.

src/modules/team/service/team.service.ts:6:10 - error TS2305: Module '"../dto/create-team.dto"' has no exported member 'CreateTeamDto'.

6 import { CreateTeamDto } from '../dto/create-team.dto';
           ~~~~~~~~~~~~~

src/modules/team/service/team.service.ts:7:10 - error TS2305: Module '"../dto/update-team.dto"' has no exported member 'UpdateTeamDto'.

7 import { UpdateTeamDto } from '../dto/update-team.dto';
           ~~~~~~~~~~~~~

src/modules/team/service/team.service.ts:8:10 - error TS2305: Module '"../dto/response-team.dto"' has no exported member 'ResponseTeamDto'.

8 import { ResponseTeamDto } from '../dto/response-team.dto';
           ~~~~~~~~~~~~~~~

src/modules/team/service/team.service.ts:19:5 - error TS2740: Type 'Team[]' is missing the following properties from type 'Team': id, name, created_by, 
projects, and 2 more.

19     return await this.teamRepository.save(team);
       ~~~~~~

src/modules/time-entry/controller/time-entry.controller.ts:15:10 - error TS2305: Module '"../dto/create-time-entry.dto"' has no exported member 'CreateTimeEntryDto'.

15 import { CreateTimeEntryDto } from '../dto/create-time-entry.dto';
            ~~~~~~~~~~~~~~~~~~

src/modules/time-entry/controller/time-entry.controller.ts:16:10 - error TS2305: Module '"../dto/update-time-entry.dto"' has no exported member 'UpdateTimeEntryDto'.

16 import { UpdateTimeEntryDto } from '../dto/update-time-entry.dto';
            ~~~~~~~~~~~~~~~~~~

src/modules/time-entry/controller/time-entry.controller.ts:17:10 - error TS2305: Module '"../dto/response-time-entry.dto"' has no exported member 'ResponseTimeEntryDto'.

17 import { ResponseTimeEntryDto } from '../dto/response-time-entry.dto';
            ~~~~~~~~~~~~~~~~~~~~

src/modules/time-entry/dto/response-time-entry.dto.ts:48:30 - error TS2304: Cannot find name 'TaskResponseDto'.

48   @ApiProperty({ type: () => TaskResponseDto, required: false })
                                ~~~~~~~~~~~~~~~

src/modules/time-entry/dto/response-time-entry.dto.ts:50:15 - error TS2304: Cannot find name 'TaskResponseDto'.

50   @Type(() => TaskResponseDto)
                 ~~~~~~~~~~~~~~~

src/modules/time-entry/dto/response-time-entry.dto.ts:52:11 - error TS2304: Cannot find name 'TaskResponseDto'.

52   tasks?: TaskResponseDto;
             ~~~~~~~~~~~~~~~

src/modules/time-entry/dto/response-time-entry.dto.ts:54:30 - error TS2304: Cannot find name 'UserResponseDto'.

54   @ApiProperty({ type: () => UserResponseDto, required: false })
                                ~~~~~~~~~~~~~~~

src/modules/time-entry/dto/response-time-entry.dto.ts:56:15 - error TS2304: Cannot find name 'UserResponseDto'.

56   @Type(() => UserResponseDto)
                 ~~~~~~~~~~~~~~~

src/modules/time-entry/dto/response-time-entry.dto.ts:58:11 - error TS2304: Cannot find name 'UserResponseDto'.

58   users?: UserResponseDto;
             ~~~~~~~~~~~~~~~

src/modules/time-entry/dto/time-entry.dto.ts:52:41 - error TS2551: Property 'timeEntry' does not exist on type 'Task'. Did you mean 'timeEntrys'?       

52   @ManyToOne(() => Task, (task) => task.timeEntry)
                                           ~~~~~~~~~

  src/modules/task/entity/task.entity.ts:111:3
    111   timeEntrys: TimeEntry[];
          ~~~~~~~~~~
    'timeEntrys' is declared here.

src/modules/time-entry/dto/time-entry.dto.ts:57:41 - error TS2551: Property 'timeEntry' does not exist on type 'User'. Did you mean 'timeEntrys'?       

57   @ManyToOne(() => User, (user) => user.timeEntry)
                                           ~~~~~~~~~

  src/modules/user/entity/user.entity.ts:167:3
    167   timeEntrys: TimeEntry[];
          ~~~~~~~~~~
    'timeEntrys' is declared here.

src/modules/time-entry/entity/time-entry.entity.ts:52:41 - error TS2551: Property 'timeEntry' does not exist on type 'Task'. Did you mean 'timeEntrys'? 

52   @ManyToOne(() => Task, (task) => task.timeEntry)
                                           ~~~~~~~~~

  src/modules/task/entity/task.entity.ts:111:3
    111   timeEntrys: TimeEntry[];
          ~~~~~~~~~~
    'timeEntrys' is declared here.

src/modules/time-entry/entity/time-entry.entity.ts:57:41 - error TS2551: Property 'timeEntry' does not exist on type 'User'. Did you mean 'timeEntrys'? 

57   @ManyToOne(() => User, (user) => user.timeEntry)
                                           ~~~~~~~~~

  src/modules/user/entity/user.entity.ts:167:3
    167   timeEntrys: TimeEntry[];
          ~~~~~~~~~~
    'timeEntrys' is declared here.

src/modules/time-entry/service/time-entry.service.ts:6:10 - error TS2305: Module '"../dto/create-time-entry.dto"' has no exported member 'CreateTimeEntryDto'.

6 import { CreateTimeEntryDto } from '../dto/create-time-entry.dto';
           ~~~~~~~~~~~~~~~~~~

src/modules/time-entry/service/time-entry.service.ts:7:10 - error TS2305: Module '"../dto/update-time-entry.dto"' has no exported member 'UpdateTimeEntryDto'.

7 import { UpdateTimeEntryDto } from '../dto/update-time-entry.dto';
           ~~~~~~~~~~~~~~~~~~

src/modules/time-entry/service/time-entry.service.ts:8:10 - error TS2305: Module '"../dto/response-time-entry.dto"' has no exported member 'ResponseTimeEntryDto'.

8 import { ResponseTimeEntryDto } from '../dto/response-time-entry.dto';
           ~~~~~~~~~~~~~~~~~~~~

src/modules/time-entry/service/time-entry.service.ts:19:5 - error TS2740: Type 'TimeEntry[]' is missing the following properties from type 'TimeEntry': 
id, task_id, user_id, hours, and 3 more.

19     return await this.timeEntryRepository.save(timeEntry);
       ~~~~~~

src/modules/user-session/controller/user-session.controller.ts:15:10 - error TS2305: Module '"../dto/create-user-session.dto"' has no exported member 'CreateUserSessionDto'.

15 import { CreateUserSessionDto } from '../dto/create-user-session.dto';
            ~~~~~~~~~~~~~~~~~~~~

src/modules/user-session/controller/user-session.controller.ts:16:10 - error TS2305: Module '"../dto/update-user-session.dto"' has no exported member 'UpdateUserSessionDto'.

16 import { UpdateUserSessionDto } from '../dto/update-user-session.dto';
            ~~~~~~~~~~~~~~~~~~~~

src/modules/user-session/controller/user-session.controller.ts:17:10 - error TS2305: Module '"../dto/response-user-session.dto"' has no exported member 
'ResponseUserSessionDto'.

17 import { ResponseUserSessionDto } from '../dto/response-user-session.dto';
            ~~~~~~~~~~~~~~~~~~~~~~

src/modules/user-session/dto/response-user-session.dto.ts:30:30 - error TS2304: Cannot find name 'UserResponseDto'.

30   @ApiProperty({ type: () => UserResponseDto, required: false })
                                ~~~~~~~~~~~~~~~

src/modules/user-session/dto/response-user-session.dto.ts:32:15 - error TS2304: Cannot find name 'UserResponseDto'.

32   @Type(() => UserResponseDto)
                 ~~~~~~~~~~~~~~~

src/modules/user-session/dto/response-user-session.dto.ts:34:11 - error TS2304: Cannot find name 'UserResponseDto'.

34   users?: UserResponseDto;
             ~~~~~~~~~~~~~~~

src/modules/user-session/dto/user-session.dto.ts:35:41 - error TS2551: Property 'userSession' does not exist on type 'User'. Did you mean 'userSessions'?

35   @ManyToOne(() => User, (user) => user.userSession)
                                           ~~~~~~~~~~~

  src/modules/user/entity/user.entity.ts:171:3
    171   userSessions: UserSession[];
          ~~~~~~~~~~~~
    'userSessions' is declared here.

src/modules/user-session/entity/user-session.entity.ts:35:41 - error TS2551: Property 'userSession' does not exist on type 'User'. Did you mean 'userSessions'?

35   @ManyToOne(() => User, (user) => user.userSession)
                                           ~~~~~~~~~~~

  src/modules/user/entity/user.entity.ts:171:3
    171   userSessions: UserSession[];
          ~~~~~~~~~~~~
    'userSessions' is declared here.

src/modules/user-session/service/user-session.service.ts:6:10 - error TS2305: Module '"../dto/create-user-session.dto"' has no exported member 'CreateUserSessionDto'.

6 import { CreateUserSessionDto } from '../dto/create-user-session.dto';
           ~~~~~~~~~~~~~~~~~~~~

src/modules/user-session/service/user-session.service.ts:7:10 - error TS2305: Module '"../dto/update-user-session.dto"' has no exported member 'UpdateUserSessionDto'.

7 import { UpdateUserSessionDto } from '../dto/update-user-session.dto';
           ~~~~~~~~~~~~~~~~~~~~

src/modules/user-session/service/user-session.service.ts:8:10 - error TS2305: Module '"../dto/response-user-session.dto"' has no exported member 'ResponseUserSessionDto'.

8 import { ResponseUserSessionDto } from '../dto/response-user-session.dto';
           ~~~~~~~~~~~~~~~~~~~~~~

src/modules/user-session/service/user-session.service.ts:21:5 - error TS2739: Type 'UserSession[]' is missing the following properties from type 'UserSession': id, user_id, session_token, expires_at, user

21     return await this.userSessionRepository.save(userSession);
       ~~~~~~

src/modules/user-setting/controller/user-setting.controller.ts:15:10 - error TS2305: Module '"../dto/create-user-setting.dto"' has no exported member 'CreateUserSettingDto'.

15 import { CreateUserSettingDto } from '../dto/create-user-setting.dto';
            ~~~~~~~~~~~~~~~~~~~~

src/modules/user-setting/controller/user-setting.controller.ts:16:10 - error TS2305: Module '"../dto/update-user-setting.dto"' has no exported member 'UpdateUserSettingDto'.

16 import { UpdateUserSettingDto } from '../dto/update-user-setting.dto';
            ~~~~~~~~~~~~~~~~~~~~

src/modules/user-setting/controller/user-setting.controller.ts:17:10 - error TS2305: Module '"../dto/response-user-setting.dto"' has no exported member 
'ResponseUserSettingDto'.

17 import { ResponseUserSettingDto } from '../dto/response-user-setting.dto';
            ~~~~~~~~~~~~~~~~~~~~~~

src/modules/user-setting/service/user-setting.service.ts:6:10 - error TS2305: Module '"../dto/create-user-setting.dto"' has no exported member 'CreateUserSettingDto'.

6 import { CreateUserSettingDto } from '../dto/create-user-setting.dto';
           ~~~~~~~~~~~~~~~~~~~~

src/modules/user-setting/service/user-setting.service.ts:7:10 - error TS2305: Module '"../dto/update-user-setting.dto"' has no exported member 'UpdateUserSettingDto'.

7 import { UpdateUserSettingDto } from '../dto/update-user-setting.dto';
           ~~~~~~~~~~~~~~~~~~~~

src/modules/user-setting/service/user-setting.service.ts:8:10 - error TS2305: Module '"../dto/response-user-setting.dto"' has no exported member 'ResponseUserSettingDto'.

8 import { ResponseUserSettingDto } from '../dto/response-user-setting.dto';
           ~~~~~~~~~~~~~~~~~~~~~~

src/modules/user-setting/service/user-setting.service.ts:21:5 - error TS2739: Type 'UserSetting[]' is missing the following properties from type 'UserSetting': id, user_id, setting_key, user

21     return await this.userSettingRepository.save(userSetting);
       ~~~~~~

src/modules/user/controller/user.controller.ts:15:10 - error TS2305: Module '"../dto/create-user.dto"' has no exported member 'CreateUserDto'.

15 import { CreateUserDto } from '../dto/create-user.dto';
            ~~~~~~~~~~~~~

src/modules/user/controller/user.controller.ts:16:10 - error TS2305: Module '"../dto/update-user.dto"' has no exported member 'UpdateUserDto'.

16 import { UpdateUserDto } from '../dto/update-user.dto';
            ~~~~~~~~~~~~~

src/modules/user/controller/user.controller.ts:17:10 - error TS2305: Module '"../dto/response-user.dto"' has no exported member 'ResponseUserDto'.      

17 import { ResponseUserDto } from '../dto/response-user.dto';
            ~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:68:17 - error TS2304: Cannot find name 'ActivityResponseDto'.

68     type: () => ActivityResponseDto,
                   ~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:73:15 - error TS2304: Cannot find name 'ActivityResponseDto'.

73   @Type(() => ActivityResponseDto)
                 ~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:76:15 - error TS2304: Cannot find name 'ActivityResponseDto'.

76   activitys?: ActivityResponseDto[];
                 ~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:79:17 - error TS2304: Cannot find name 'AttachmentResponseDto'.

79     type: () => AttachmentResponseDto,
                   ~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:84:15 - error TS2304: Cannot find name 'AttachmentResponseDto'.

84   @Type(() => AttachmentResponseDto)
                 ~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:87:17 - error TS2304: Cannot find name 'AttachmentResponseDto'.

87   attachments?: AttachmentResponseDto[];
                   ~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:90:17 - error TS2304: Cannot find name 'CalendarEventResponseDto'.

90     type: () => CalendarEventResponseDto,
                   ~~~~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:95:15 - error TS2304: Cannot find name 'CalendarEventResponseDto'.

95   @Type(() => CalendarEventResponseDto)
                 ~~~~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:98:20 - error TS2304: Cannot find name 'CalendarEventResponseDto'.

98   calendarEvents?: CalendarEventResponseDto[];
                      ~~~~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:101:17 - error TS2304: Cannot find name 'CalendarEventResponseDto'.

101     type: () => CalendarEventResponseDto,
                    ~~~~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:106:15 - error TS2304: Cannot find name 'CalendarEventResponseDto'.

106   @Type(() => CalendarEventResponseDto)
                  ~~~~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:109:3 - error TS2300: Duplicate identifier 'calendarEvents'.

109   calendarEvents?: CalendarEventResponseDto[];
      ~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:109:20 - error TS2304: Cannot find name 'CalendarEventResponseDto'.

109   calendarEvents?: CalendarEventResponseDto[];
                       ~~~~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:112:17 - error TS2304: Cannot find name 'CommentResponseDto'.

112     type: () => CommentResponseDto,
                    ~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:117:15 - error TS2304: Cannot find name 'CommentResponseDto'.

117   @Type(() => CommentResponseDto)
                  ~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:120:14 - error TS2304: Cannot find name 'CommentResponseDto'.

120   comments?: CommentResponseDto[];
                 ~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:123:17 - error TS2304: Cannot find name 'CustomReportResponseDto'.

123     type: () => CustomReportResponseDto,
                    ~~~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:128:15 - error TS2304: Cannot find name 'CustomReportResponseDto'.

128   @Type(() => CustomReportResponseDto)
                  ~~~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:131:19 - error TS2304: Cannot find name 'CustomReportResponseDto'.

131   customReports?: CustomReportResponseDto[];
                      ~~~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:133:30 - error TS2304: Cannot find name 'FileResponseDto'.

133   @ApiProperty({ type: () => FileResponseDto, isArray: true, required: false })
                                 ~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:135:15 - error TS2304: Cannot find name 'FileResponseDto'.

135   @Type(() => FileResponseDto)
                  ~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:138:11 - error TS2304: Cannot find name 'FileResponseDto'.

138   files?: FileResponseDto[];
              ~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:141:17 - error TS2304: Cannot find name 'IntegrationResponseDto'.

141     type: () => IntegrationResponseDto,
                    ~~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:146:15 - error TS2304: Cannot find name 'IntegrationResponseDto'.

146   @Type(() => IntegrationResponseDto)
                  ~~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:149:18 - error TS2304: Cannot find name 'IntegrationResponseDto'.

149   integrations?: IntegrationResponseDto[];
                     ~~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:152:17 - error TS2304: Cannot find name 'InvitationResponseDto'.

152     type: () => InvitationResponseDto,
                    ~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:157:15 - error TS2304: Cannot find name 'InvitationResponseDto'.

157   @Type(() => InvitationResponseDto)
                  ~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:160:17 - error TS2304: Cannot find name 'InvitationResponseDto'.

160   invitations?: InvitationResponseDto[];
                    ~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:162:30 - error TS2304: Cannot find name 'LabelResponseDto'.

162   @ApiProperty({ type: () => LabelResponseDto, isArray: true, required: false })
                                 ~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:164:15 - error TS2304: Cannot find name 'LabelResponseDto'.

164   @Type(() => LabelResponseDto)
                  ~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:167:12 - error TS2304: Cannot find name 'LabelResponseDto'.

167   labels?: LabelResponseDto[];
               ~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:170:17 - error TS2304: Cannot find name 'MilestoneResponseDto'.

170     type: () => MilestoneResponseDto,
                    ~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:175:15 - error TS2304: Cannot find name 'MilestoneResponseDto'.

175   @Type(() => MilestoneResponseDto)
                  ~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:178:16 - error TS2304: Cannot find name 'MilestoneResponseDto'.

178   milestones?: MilestoneResponseDto[];
                   ~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:181:17 - error TS2304: Cannot find name 'NotificationResponseDto'.

181     type: () => NotificationResponseDto,
                    ~~~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:186:15 - error TS2304: Cannot find name 'NotificationResponseDto'.

186   @Type(() => NotificationResponseDto)
                  ~~~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:189:19 - error TS2304: Cannot find name 'NotificationResponseDto'.

189   notifications?: NotificationResponseDto[];
                      ~~~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:192:17 - error TS2304: Cannot find name 'ProjectResponseDto'.

192     type: () => ProjectResponseDto,
                    ~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:197:15 - error TS2304: Cannot find name 'ProjectResponseDto'.

197   @Type(() => ProjectResponseDto)
                  ~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:200:14 - error TS2304: Cannot find name 'ProjectResponseDto'.

200   projects?: ProjectResponseDto[];
                 ~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:203:17 - error TS2304: Cannot find name 'ProjectResponseDto'.

203     type: () => ProjectResponseDto,
                    ~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:208:15 - error TS2304: Cannot find name 'ProjectResponseDto'.

208   @Type(() => ProjectResponseDto)
                  ~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:211:3 - error TS2300: Duplicate identifier 'projects'.

211   projects?: ProjectResponseDto[];
      ~~~~~~~~

src/modules/user/dto/response-user.dto.ts:211:14 - error TS2304: Cannot find name 'ProjectResponseDto'.

211   projects?: ProjectResponseDto[];
                 ~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:213:30 - error TS2304: Cannot find name 'TaskResponseDto'.

213   @ApiProperty({ type: () => TaskResponseDto, isArray: true, required: false })
                                 ~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:215:15 - error TS2304: Cannot find name 'TaskResponseDto'.

215   @Type(() => TaskResponseDto)
                  ~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:218:11 - error TS2304: Cannot find name 'TaskResponseDto'.

218   tasks?: TaskResponseDto[];
              ~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:220:30 - error TS2304: Cannot find name 'TaskResponseDto'.

220   @ApiProperty({ type: () => TaskResponseDto, isArray: true, required: false })
                                 ~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:222:15 - error TS2304: Cannot find name 'TaskResponseDto'.

222   @Type(() => TaskResponseDto)
                  ~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:225:3 - error TS2300: Duplicate identifier 'tasks'.

225   tasks?: TaskResponseDto[];
      ~~~~~

src/modules/user/dto/response-user.dto.ts:225:11 - error TS2304: Cannot find name 'TaskResponseDto'.

225   tasks?: TaskResponseDto[];
              ~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:227:30 - error TS2304: Cannot find name 'TeamResponseDto'.

227   @ApiProperty({ type: () => TeamResponseDto, isArray: true, required: false })
                                 ~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:229:15 - error TS2304: Cannot find name 'TeamResponseDto'.

229   @Type(() => TeamResponseDto)
                  ~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:232:11 - error TS2304: Cannot find name 'TeamResponseDto'.

232   teams?: TeamResponseDto[];
              ~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:235:17 - error TS2304: Cannot find name 'TimeEntryResponseDto'.

235     type: () => TimeEntryResponseDto,
                    ~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:240:15 - error TS2304: Cannot find name 'TimeEntryResponseDto'.

240   @Type(() => TimeEntryResponseDto)
                  ~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:243:16 - error TS2304: Cannot find name 'TimeEntryResponseDto'.

243   timeEntrys?: TimeEntryResponseDto[];
                   ~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:246:17 - error TS2304: Cannot find name 'UserSessionResponseDto'.

246     type: () => UserSessionResponseDto,
                    ~~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:251:15 - error TS2304: Cannot find name 'UserSessionResponseDto'.

251   @Type(() => UserSessionResponseDto)
                  ~~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:254:18 - error TS2304: Cannot find name 'UserSessionResponseDto'.

254   userSessions?: UserSessionResponseDto[];
                     ~~~~~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:257:17 - error TS2304: Cannot find name 'WebhookResponseDto'.

257     type: () => WebhookResponseDto,
                    ~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:262:15 - error TS2304: Cannot find name 'WebhookResponseDto'.

262   @Type(() => WebhookResponseDto)
                  ~~~~~~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:265:14 - error TS2304: Cannot find name 'WebhookResponseDto'.

265   webhooks?: WebhookResponseDto[];
                 ~~~~~~~~~~~~~~~~~~

src/modules/user/dto/user.dto.ts:102:3 - error TS2300: Duplicate identifier 'calendarEvents'.

102   calendarEvents: CalendarEvent[];
      ~~~~~~~~~~~~~~

src/modules/user/dto/user.dto.ts:145:3 - error TS2300: Duplicate identifier 'projects'.

145   projects: Project[];
      ~~~~~~~~

src/modules/user/dto/user.dto.ts:156:3 - error TS2300: Duplicate identifier 'tasks'.

156   tasks: Task[];
      ~~~~~

src/modules/user/entity/user.entity.ts:102:3 - error TS2300: Duplicate identifier 'calendarEvents'.

102   calendarEvents: CalendarEvent[];
      ~~~~~~~~~~~~~~

src/modules/user/entity/user.entity.ts:145:3 - error TS2300: Duplicate identifier 'projects'.

145   projects: Project[];
      ~~~~~~~~

src/modules/user/entity/user.entity.ts:156:3 - error TS2300: Duplicate identifier 'tasks'.

156   tasks: Task[];
      ~~~~~

src/modules/user/service/user.service.ts:6:10 - error TS2305: Module '"../dto/create-user.dto"' has no exported member 'CreateUserDto'.

6 import { CreateUserDto } from '../dto/create-user.dto';
           ~~~~~~~~~~~~~

src/modules/user/service/user.service.ts:7:10 - error TS2305: Module '"../dto/update-user.dto"' has no exported member 'UpdateUserDto'.

7 import { UpdateUserDto } from '../dto/update-user.dto';
           ~~~~~~~~~~~~~

src/modules/user/service/user.service.ts:8:10 - error TS2305: Module '"../dto/response-user.dto"' has no exported member 'ResponseUserDto'.

8 import { ResponseUserDto } from '../dto/response-user.dto';
           ~~~~~~~~~~~~~~~

src/modules/user/service/user.service.ts:19:5 - error TS2740: Type 'User[]' is missing the following properties from type 'User': id, email, password_hash, first_name, and 22 more.

19     return await this.userRepository.save(user);
       ~~~~~~

src/modules/webhook/controller/webhook.controller.ts:15:10 - error TS2305: Module '"../dto/create-webhook.dto"' has no exported member 'CreateWebhookDto'.

15 import { CreateWebhookDto } from '../dto/create-webhook.dto';
            ~~~~~~~~~~~~~~~~

src/modules/webhook/controller/webhook.controller.ts:16:10 - error TS2305: Module '"../dto/update-webhook.dto"' has no exported member 'UpdateWebhookDto'.

16 import { UpdateWebhookDto } from '../dto/update-webhook.dto';
            ~~~~~~~~~~~~~~~~

src/modules/webhook/controller/webhook.controller.ts:17:10 - error TS2305: Module '"../dto/response-webhook.dto"' has no exported member 'ResponseWebhookDto'.

17 import { ResponseWebhookDto } from '../dto/response-webhook.dto';
            ~~~~~~~~~~~~~~~~~~

src/modules/webhook/dto/response-webhook.dto.ts:40:30 - error TS2304: Cannot find name 'ProjectResponseDto'.

40   @ApiProperty({ type: () => ProjectResponseDto, required: false })
                                ~~~~~~~~~~~~~~~~~~

src/modules/webhook/dto/response-webhook.dto.ts:42:15 - error TS2304: Cannot find name 'ProjectResponseDto'.

42   @Type(() => ProjectResponseDto)
                 ~~~~~~~~~~~~~~~~~~

src/modules/webhook/dto/response-webhook.dto.ts:44:14 - error TS2304: Cannot find name 'ProjectResponseDto'.

44   projects?: ProjectResponseDto;
                ~~~~~~~~~~~~~~~~~~

src/modules/webhook/dto/response-webhook.dto.ts:46:30 - error TS2304: Cannot find name 'UserResponseDto'.

46   @ApiProperty({ type: () => UserResponseDto, required: false })
                                ~~~~~~~~~~~~~~~

src/modules/webhook/dto/response-webhook.dto.ts:48:15 - error TS2304: Cannot find name 'UserResponseDto'.

48   @Type(() => UserResponseDto)
                 ~~~~~~~~~~~~~~~

src/modules/webhook/dto/response-webhook.dto.ts:50:11 - error TS2304: Cannot find name 'UserResponseDto'.

50   users?: UserResponseDto;
             ~~~~~~~~~~~~~~~

src/modules/webhook/dto/webhook.dto.ts:46:50 - error TS2551: Property 'webhook' does not exist on type 'Project'. Did you mean 'webhooks'?

46   @ManyToOne(() => Project, (project) => project.webhook)
                                                    ~~~~~~~

  src/modules/project/entity/project.entity.ts:139:3
    139   webhooks: Webhook[];
          ~~~~~~~~
    'webhooks' is declared here.

src/modules/webhook/dto/webhook.dto.ts:51:41 - error TS2551: Property 'webhook' does not exist on type 'User'. Did you mean 'webhooks'?

51   @ManyToOne(() => User, (user) => user.webhook)
                                           ~~~~~~~

  src/modules/user/entity/user.entity.ts:178:3
    178   webhooks: Webhook[];
          ~~~~~~~~
    'webhooks' is declared here.

src/modules/webhook/entity/webhook.entity.ts:46:50 - error TS2551: Property 'webhook' does not exist on type 'Project'. Did you mean 'webhooks'?        

46   @ManyToOne(() => Project, (project) => project.webhook)
                                                    ~~~~~~~

  src/modules/project/entity/project.entity.ts:139:3
    139   webhooks: Webhook[];
          ~~~~~~~~
    'webhooks' is declared here.

src/modules/webhook/entity/webhook.entity.ts:51:41 - error TS2551: Property 'webhook' does not exist on type 'User'. Did you mean 'webhooks'?

51   @ManyToOne(() => User, (user) => user.webhook)
                                           ~~~~~~~

  src/modules/user/entity/user.entity.ts:178:3
    178   webhooks: Webhook[];
          ~~~~~~~~
    'webhooks' is declared here.

src/modules/webhook/service/webhook.service.ts:6:10 - error TS2305: Module '"../dto/create-webhook.dto"' has no exported member 'CreateWebhookDto'.     

6 import { CreateWebhookDto } from '../dto/create-webhook.dto';
           ~~~~~~~~~~~~~~~~

src/modules/webhook/service/webhook.service.ts:7:10 - error TS2305: Module '"../dto/update-webhook.dto"' has no exported member 'UpdateWebhookDto'.     

7 import { UpdateWebhookDto } from '../dto/update-webhook.dto';
           ~~~~~~~~~~~~~~~~

src/modules/webhook/service/webhook.service.ts:8:10 - error TS2305: Module '"../dto/response-webhook.dto"' has no exported member 'ResponseWebhookDto'. 

8 import { ResponseWebhookDto } from '../dto/response-webhook.dto';
           ~~~~~~~~~~~~~~~~~~

src/modules/webhook/service/webhook.service.ts:19:5 - error TS2740: Type 'Webhook[]' is missing the following properties from type 'Webhook': id, url, events, created_by, and 2 more.

19     return await this.webhookRepository.save(webhook);