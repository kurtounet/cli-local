src/modules/webhook/controller/webhook.controller.ts 4ms
[22:05:13] Starting compilation in watch mode...

src/app.module.ts:5:28 - error TS2307: Cannot find module './auth/auth.module' or its corresponding type declarations.

5 import { AuthModule } from './auth/auth.module';
                             ~~~~~~~~~~~~~~~~~~~~

src/app.module.ts:6:31 - error TS2307: Cannot find module 'src/modules/account/account.module' or its corresponding type declarations.

6 import { AccountModule } from 'src/modules/account/account.module';
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

src/modules/activity/dto/activity.dto.ts:48:41 - error TS2551: Property 'activity' does not exist on type 'User'. Did you mean 'activitys'?

48   @ManyToOne(() => User, (user) => user.activity)
                                           ~~~~~~~~

  src/modules/user/entity/user.entity.ts:90:3
    90   activitys: Activity[];
         ~~~~~~~~~
    'activitys' is declared here.

src/modules/activity/dto/activity.dto.ts:53:50 - error TS2551: Property 'activity' does not exist on type 'Project'. Did you mean 'activitys'?

53   @ManyToOne(() => Project, (project) => project.activity)
                                                    ~~~~~~~~

  src/modules/project/entity/project.entity.ts:92:3
    92   activitys: Activity[];
         ~~~~~~~~~
    'activitys' is declared here.

src/modules/activity/entity/activity.entity.ts:48:41 - error TS2551: Property 'activity' does not exist on type 'User'. 
Did you mean 'activitys'?

48   @ManyToOne(() => User, (user) => user.activity)
                                           ~~~~~~~~

  src/modules/user/entity/user.entity.ts:90:3
    90   activitys: Activity[];
         ~~~~~~~~~
    'activitys' is declared here.

src/modules/activity/entity/activity.entity.ts:53:50 - error TS2551: Property 'activity' does not exist on type 'Project'. Did you mean 'activitys'?

53   @ManyToOne(() => Project, (project) => project.activity)
                                                    ~~~~~~~~

  src/modules/project/entity/project.entity.ts:92:3
    92   activitys: Activity[];
         ~~~~~~~~~
    'activitys' is declared here.

src/modules/attachment/dto/attachment.dto.ts:32:41 - error TS2551: Property 'attachment' does not exist on type 'File'. 
Did you mean 'attachments'?

32   @ManyToOne(() => File, (file) => file.attachment)
                                           ~~~~~~~~~~

  src/modules/file/entity/file.entity.ts:45:3
    45   attachments: Attachment[];
         ~~~~~~~~~~~
    'attachments' is declared here.

src/modules/attachment/dto/attachment.dto.ts:37:41 - error TS2551: Property 'attachment' does not exist on type 'User'. 
Did you mean 'attachments'?

37   @ManyToOne(() => User, (user) => user.attachment)
                                           ~~~~~~~~~~

  src/modules/user/entity/user.entity.ts:94:3
    94   attachments: Attachment[];
         ~~~~~~~~~~~
    'attachments' is declared here.

src/modules/attachment/entity/attachment.entity.ts:32:41 - error TS2551: Property 'attachment' does not exist on type 'File'. Did you mean 'attachments'?

32   @ManyToOne(() => File, (file) => file.attachment)
                                           ~~~~~~~~~~

  src/modules/file/entity/file.entity.ts:45:3
    45   attachments: Attachment[];
         ~~~~~~~~~~~
    'attachments' is declared here.

src/modules/attachment/entity/attachment.entity.ts:37:41 - error TS2551: Property 'attachment' does not exist on type 'User'. Did you mean 'attachments'?

37   @ManyToOne(() => User, (user) => user.attachment)
                                           ~~~~~~~~~~

  src/modules/user/entity/user.entity.ts:94:3
    94   attachments: Attachment[];
         ~~~~~~~~~~~
    'attachments' is declared here.

src/modules/calendar-event/dto/calendar-event.dto.ts:63:50 - error TS2551: Property 'calendarEvent' does not exist on type 'Project'. Did you mean 'calendarEvents'?

63   @ManyToOne(() => Project, (project) => project.calendarEvent)
                                                    ~~~~~~~~~~~~~

  src/modules/project/entity/project.entity.ts:96:3
    96   calendarEvents: CalendarEvent[];
         ~~~~~~~~~~~~~~
    'calendarEvents' is declared here.

src/modules/calendar-event/dto/calendar-event.dto.ts:68:41 - error TS2551: Property 'calendarEvent' does not exist on type 'Task'. Did you mean 'calendarEvents'?

68   @ManyToOne(() => Task, (task) => task.calendarEvent)
                                           ~~~~~~~~~~~~~

  src/modules/task/entity/task.entity.ts:77:3
    77   calendarEvents: CalendarEvent[];
         ~~~~~~~~~~~~~~
    'calendarEvents' is declared here.

src/modules/calendar-event/dto/calendar-event.dto.ts:73:41 - error TS2551: Property 'calendarEvent' does not exist on type 'User'. Did you mean 'calendarEvents'?

73   @ManyToOne(() => User, (user) => user.calendarEvent)
                                           ~~~~~~~~~~~~~

  src/modules/user/entity/user.entity.ts:98:3
    98   calendarEvents: CalendarEvent[];
         ~~~~~~~~~~~~~~
    'calendarEvents' is declared here.

src/modules/calendar-event/dto/calendar-event.dto.ts:78:41 - error TS2551: Property 'calendarEvent' does not exist on type 'User'. Did you mean 'calendarEvents'?

78   @ManyToOne(() => User, (user) => user.calendarEvent)
                                           ~~~~~~~~~~~~~

  src/modules/user/entity/user.entity.ts:98:3
    98   calendarEvents: CalendarEvent[];
         ~~~~~~~~~~~~~~
    'calendarEvents' is declared here.

src/modules/calendar-event/dto/calendar-event.dto.ts:81:3 - error TS2300: Duplicate identifier 'user'.

81   user: User;
     ~~~~

src/modules/calendar-event/dto/response-calendar-event.dto.ts:63:3 - error TS2300: Duplicate identifier 'user'.

63   user: User;
     ~~~~

src/modules/calendar-event/entity/calendar-event.entity.ts:63:50 - error TS2551: Property 'calendarEvent' does not exist on type 'Project'. Did you mean 'calendarEvents'?

63   @ManyToOne(() => Project, (project) => project.calendarEvent)
                                                    ~~~~~~~~~~~~~

  src/modules/project/entity/project.entity.ts:96:3
    96   calendarEvents: CalendarEvent[];
         ~~~~~~~~~~~~~~
    'calendarEvents' is declared here.

src/modules/calendar-event/entity/calendar-event.entity.ts:68:41 - error TS2551: Property 'calendarEvent' does not exist on type 'Task'. Did you mean 'calendarEvents'?

68   @ManyToOne(() => Task, (task) => task.calendarEvent)
                                           ~~~~~~~~~~~~~

  src/modules/task/entity/task.entity.ts:77:3
    77   calendarEvents: CalendarEvent[];
         ~~~~~~~~~~~~~~
    'calendarEvents' is declared here.

src/modules/calendar-event/entity/calendar-event.entity.ts:73:41 - error TS2551: Property 'calendarEvent' does not exist on type 'User'. Did you mean 'calendarEvents'?

73   @ManyToOne(() => User, (user) => user.calendarEvent)
                                           ~~~~~~~~~~~~~

  src/modules/user/entity/user.entity.ts:98:3
    98   calendarEvents: CalendarEvent[];
         ~~~~~~~~~~~~~~
    'calendarEvents' is declared here.

src/modules/calendar-event/entity/calendar-event.entity.ts:78:41 - error TS2551: Property 'calendarEvent' does not exist on type 'User'. Did you mean 'calendarEvents'?

78   @ManyToOne(() => User, (user) => user.calendarEvent)
                                           ~~~~~~~~~~~~~

  src/modules/user/entity/user.entity.ts:98:3
    98   calendarEvents: CalendarEvent[];
         ~~~~~~~~~~~~~~
    'calendarEvents' is declared here.

src/modules/calendar-event/entity/calendar-event.entity.ts:81:3 - error TS2300: Duplicate identifier 'user'.

81   user: User;
     ~~~~

src/modules/comment/dto/comment.dto.ts:55:41 - error TS2551: Property 'comment' does not exist on type 'User'. Did you mean 'comments'?

55   @ManyToOne(() => User, (user) => user.comment)
                                           ~~~~~~~

  src/modules/user/entity/user.entity.ts:106:3
    106   comments: Comment[];
          ~~~~~~~~
    'comments' is declared here.

src/modules/comment/dto/response-comment.dto.ts:40:3 - error TS2300: Duplicate identifier 'comment'.

40   comment: Comment[];
     ~~~~~~~

src/modules/comment/dto/response-comment.dto.ts:40:3 - error TS2717: Subsequent property declarations must have the same type.  Property 'comment' must be of type 'Comment', but here has type 'Comment[]'.

40   comment: Comment[];
     ~~~~~~~

  src/modules/comment/dto/response-comment.dto.ts:37:3
    37   comment: Comment;
         ~~~~~~~
    'comment' was also declared here.

src/modules/comment/entity/comment.entity.ts:55:41 - error TS2551: Property 'comment' does not exist on type 'User'. Did you mean 'comments'?

55   @ManyToOne(() => User, (user) => user.comment)
                                           ~~~~~~~

  src/modules/user/entity/user.entity.ts:106:3
    106   comments: Comment[];
          ~~~~~~~~
    'comments' is declared here.

src/modules/custom-report/dto/custom-report.dto.ts:54:41 - error TS2551: Property 'customReport' does not exist on type 
'User'. Did you mean 'customReports'?

54   @ManyToOne(() => User, (user) => user.customReport)
                                           ~~~~~~~~~~~~

  src/modules/user/entity/user.entity.ts:110:3
    110   customReports: CustomReport[];
          ~~~~~~~~~~~~~
    'customReports' is declared here.

src/modules/custom-report/entity/custom-report.entity.ts:54:41 - error TS2551: Property 'customReport' does not exist on type 'User'. Did you mean 'customReports'?

54   @ManyToOne(() => User, (user) => user.customReport)
                                           ~~~~~~~~~~~~

  src/modules/user/entity/user.entity.ts:110:3
    110   customReports: CustomReport[];
          ~~~~~~~~~~~~~
    'customReports' is declared here.

src/modules/file/controller/file.controller.ts:41:5 - error TS2741: Property 'attachment' is missing in type 'File' but 
required in type 'ResponseFileDto'.

41     return await this.fileService.create(createFileDto);
       ~~~~~~

  src/modules/file/dto/response-file.dto.ts:34:3
    34   attachment: Attachment[];
         ~~~~~~~~~~
    'attachment' is declared here.

src/modules/file/controller/file.controller.ts:58:5 - error TS2322: Type 'File[]' is not assignable to type 'ResponseFileDto[]'.
  Property 'attachment' is missing in type 'File' but required in type 'ResponseFileDto'.

58     return await this.fileService.findAll();
       ~~~~~~

  src/modules/file/dto/response-file.dto.ts:34:3
    34   attachment: Attachment[];
         ~~~~~~~~~~
    'attachment' is declared here.

src/modules/file/dto/file.dto.ts:47:41 - error TS2551: Property 'file' does not exist on type 'User'. Did you mean 'files'?

47   @ManyToOne(() => User, (user) => user.file)
                                           ~~~~

  src/modules/user/entity/user.entity.ts:117:3
    117   files: File[];
          ~~~~~
    'files' is declared here.

src/modules/file/entity/file.entity.ts:47:41 - error TS2551: Property 'file' does not exist on type 'User'. Did you mean 'files'?

47   @ManyToOne(() => User, (user) => user.file)
                                           ~~~~

  src/modules/user/entity/user.entity.ts:117:3
    117   files: File[];
          ~~~~~
    'files' is declared here.

src/modules/integration/dto/integration.dto.ts:39:41 - error TS2551: Property 'integration' does not exist on type 'User'. Did you mean 'integrations'?

39   @ManyToOne(() => User, (user) => user.integration)
                                           ~~~~~~~~~~~

  src/modules/user/entity/user.entity.ts:121:3
    121   integrations: Integration[];
          ~~~~~~~~~~~~
    'integrations' is declared here.

src/modules/integration/entity/integration.entity.ts:39:41 - error TS2551: Property 'integration' does not exist on type 'User'. Did you mean 'integrations'?

39   @ManyToOne(() => User, (user) => user.integration)
                                           ~~~~~~~~~~~

  src/modules/user/entity/user.entity.ts:121:3
    121   integrations: Integration[];
          ~~~~~~~~~~~~
    'integrations' is declared here.

src/modules/invitation/dto/invitation.dto.ts:44:41 - error TS2551: Property 'invitation' does not exist on type 'User'. 
Did you mean 'invitations'?

44   @ManyToOne(() => User, (user) => user.invitation)
                                           ~~~~~~~~~~

  src/modules/user/entity/user.entity.ts:125:3
    125   invitations: Invitation[];
          ~~~~~~~~~~~
    'invitations' is declared here.

src/modules/invitation/entity/invitation.entity.ts:44:41 - error TS2551: Property 'invitation' does not exist on type 'User'. Did you mean 'invitations'?

44   @ManyToOne(() => User, (user) => user.invitation)
                                           ~~~~~~~~~~

  src/modules/user/entity/user.entity.ts:125:3
    125   invitations: Invitation[];
          ~~~~~~~~~~~
    'invitations' is declared here.

src/modules/label/dto/label.dto.ts:34:50 - error TS2551: Property 'label' does not exist on type 'Project'. Did you mean 'labels'?

34   @ManyToOne(() => Project, (project) => project.label)
                                                    ~~~~~

  src/modules/project/entity/project.entity.ts:100:3
    100   labels: Label[];
          ~~~~~~
    'labels' is declared here.

src/modules/label/dto/label.dto.ts:39:41 - error TS2551: Property 'label' does not exist on type 'User'. Did you mean 'labels'?

39   @ManyToOne(() => User, (user) => user.label)
                                           ~~~~~

  src/modules/user/entity/user.entity.ts:129:3
    129   labels: Label[];
          ~~~~~~
    'labels' is declared here.

src/modules/label/entity/label.entity.ts:34:50 - error TS2551: Property 'label' does not exist on type 'Project'. Did you mean 'labels'?

34   @ManyToOne(() => Project, (project) => project.label)
                                                    ~~~~~

  src/modules/project/entity/project.entity.ts:100:3
    100   labels: Label[];
          ~~~~~~
    'labels' is declared here.

src/modules/label/entity/label.entity.ts:39:41 - error TS2551: Property 'label' does not exist on type 'User'. Did you mean 'labels'?

39   @ManyToOne(() => User, (user) => user.label)
                                           ~~~~~

  src/modules/user/entity/user.entity.ts:129:3
    129   labels: Label[];
          ~~~~~~
    'labels' is declared here.

src/modules/milestone/dto/milestone.dto.ts:44:50 - error TS2551: Property 'milestone' does not exist on type 'Project'. 
Did you mean 'milestones'?

44   @ManyToOne(() => Project, (project) => project.milestone)
                                                    ~~~~~~~~~

  src/modules/project/entity/project.entity.ts:104:3
    104   milestones: Milestone[];
          ~~~~~~~~~~
    'milestones' is declared here.

src/modules/milestone/dto/milestone.dto.ts:49:41 - error TS2551: Property 'milestone' does not exist on type 'User'. Did you mean 'milestones'?

49   @ManyToOne(() => User, (user) => user.milestone)
                                           ~~~~~~~~~

  src/modules/user/entity/user.entity.ts:133:3
    133   milestones: Milestone[];
          ~~~~~~~~~~
    'milestones' is declared here.

src/modules/milestone/entity/milestone.entity.ts:44:50 - error TS2551: Property 'milestone' does not exist on type 'Project'. Did you mean 'milestones'?

44   @ManyToOne(() => Project, (project) => project.milestone)
                                                    ~~~~~~~~~

  src/modules/project/entity/project.entity.ts:104:3
    104   milestones: Milestone[];
          ~~~~~~~~~~
    'milestones' is declared here.

src/modules/milestone/entity/milestone.entity.ts:49:41 - error TS2551: Property 'milestone' does not exist on type 'User'. Did you mean 'milestones'?

49   @ManyToOne(() => User, (user) => user.milestone)
                                           ~~~~~~~~~

  src/modules/user/entity/user.entity.ts:133:3
    133   milestones: Milestone[];
          ~~~~~~~~~~
    'milestones' is declared here.

src/modules/notification/dto/notification.dto.ts:41:41 - error TS2551: Property 'notification' does not exist on type 'User'. Did you mean 'notifications'?

41   @ManyToOne(() => User, (user) => user.notification)
                                           ~~~~~~~~~~~~

  src/modules/user/entity/user.entity.ts:137:3
    137   notifications: Notification[];
          ~~~~~~~~~~~~~
    'notifications' is declared here.

src/modules/notification/entity/notification.entity.ts:41:41 - error TS2551: Property 'notification' does not exist on type 'User'. Did you mean 'notifications'?

41   @ManyToOne(() => User, (user) => user.notification)
                                           ~~~~~~~~~~~~

  src/modules/user/entity/user.entity.ts:137:3
    137   notifications: Notification[];
          ~~~~~~~~~~~~~
    'notifications' is declared here.

src/modules/project/controller/project.controller.ts:43:5 - error TS2740: Type 'Project' is missing the following properties from type 'ResponseProjectDto': activity, calendarEvent, label, milestone, and 2 more.

43     return await this.projectService.create(createProjectDto);
       ~~~~~~

src/modules/project/controller/project.controller.ts:60:5 - error TS2322: Type 'Project[]' is not assignable to type 'ResponseProjectDto[]'.
  Type 'Project' is missing the following properties from type 'ResponseProjectDto': activity, calendarEvent, label, milestone, and 2 more.

60     return await this.projectService.findAll();
       ~~~~~~

src/modules/project/dto/project.dto.ts:115:41 - error TS2551: Property 'project' does not exist on type 'User'. Did you 
mean 'projects'?

115   @ManyToOne(() => User, (user) => user.project)
                                            ~~~~~~~

  src/modules/user/entity/user.entity.ts:141:3
    141   projects: Project[];
          ~~~~~~~~
    'projects' is declared here.

src/modules/project/dto/project.dto.ts:120:41 - error TS2551: Property 'project' does not exist on type 'User'. Did you 
mean 'projects'?

120   @ManyToOne(() => User, (user) => user.project)
                                            ~~~~~~~

  src/modules/user/entity/user.entity.ts:141:3
    141   projects: Project[];
          ~~~~~~~~
    'projects' is declared here.

src/modules/project/dto/project.dto.ts:123:3 - error TS2300: Duplicate identifier 'user'.

123   user: User;
      ~~~~

src/modules/project/dto/project.dto.ts:125:41 - error TS2551: Property 'project' does not exist on type 'Team'. Did you 
mean 'projects'?

125   @ManyToOne(() => Team, (team) => team.project)
                                            ~~~~~~~

  src/modules/team/entity/team.entity.ts:41:3
    41   projects: Project[];
         ~~~~~~~~
    'projects' is declared here.

src/modules/project/dto/response-project.dto.ts:96:3 - error TS2300: Duplicate identifier 'project'.

96   project: Project[];
     ~~~~~~~

src/modules/project/dto/response-project.dto.ts:96:3 - error TS2717: Subsequent property declarations must have the same type.  Property 'project' must be of type 'Project', but here has type 'Project[]'.

96   project: Project[];
     ~~~~~~~

  src/modules/project/dto/response-project.dto.ts:93:3
    93   project: Project;
         ~~~~~~~
    'project' was also declared here.

src/modules/project/dto/response-project.dto.ts:102:3 - error TS2300: Duplicate identifier 'user'.

102   user: User;
      ~~~~

src/modules/project/entity/project.entity.ts:115:41 - error TS2551: Property 'project' does not exist on type 'User'. Did you mean 'projects'?

115   @ManyToOne(() => User, (user) => user.project)
                                            ~~~~~~~

  src/modules/user/entity/user.entity.ts:141:3
    141   projects: Project[];
          ~~~~~~~~
    'projects' is declared here.

src/modules/project/entity/project.entity.ts:120:41 - error TS2551: Property 'project' does not exist on type 'User'. Did you mean 'projects'?

120   @ManyToOne(() => User, (user) => user.project)
                                            ~~~~~~~

  src/modules/user/entity/user.entity.ts:141:3
    141   projects: Project[];
          ~~~~~~~~
    'projects' is declared here.

src/modules/project/entity/project.entity.ts:123:3 - error TS2300: Duplicate identifier 'user'.

123   user: User;
      ~~~~

src/modules/project/entity/project.entity.ts:125:41 - error TS2551: Property 'project' does not exist on type 'Team'. Did you mean 'projects'?

125   @ManyToOne(() => Team, (team) => team.project)
                                            ~~~~~~~

  src/modules/team/entity/team.entity.ts:41:3
    41   projects: Project[];
         ~~~~~~~~
    'projects' is declared here.

src/modules/task/controller/task.controller.ts:41:5 - error TS2739: Type 'Task' is missing the following properties from type 'ResponseTaskDto': calendarEvent, timeEntry

41     return await this.taskService.create(createTaskDto);
       ~~~~~~

src/modules/task/controller/task.controller.ts:58:5 - error TS2322: Type 'Task[]' is not assignable to type 'ResponseTaskDto[]'.
  Type 'Task' is missing the following properties from type 'ResponseTaskDto': calendarEvent, timeEntry

58     return await this.taskService.findAll();
       ~~~~~~

src/modules/task/dto/response-task.dto.ts:75:3 - error TS2300: Duplicate identifier 'task'.

75   task: Task[];
     ~~~~

src/modules/task/dto/response-task.dto.ts:75:3 - error TS2717: Subsequent property declarations must have the same type.  Property 'task' must be of type 'Task', but here has type 'Task[]'.

75   task: Task[];
     ~~~~

  src/modules/task/dto/response-task.dto.ts:72:3
    72   task: Task;
         ~~~~
    'task' was also declared here.

src/modules/task/dto/response-task.dto.ts:81:3 - error TS2300: Duplicate identifier 'user'.

81   user: User;
     ~~~~

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

src/modules/team/controller/team.controller.ts:41:5 - error TS2741: Property 'project' is missing in type 'Team' but required in type 'ResponseTeamDto'.

41     return await this.teamService.create(createTeamDto);
       ~~~~~~

  src/modules/team/dto/response-team.dto.ts:29:3
    29   project: Project[];
         ~~~~~~~
    'project' is declared here.

src/modules/team/controller/team.controller.ts:58:5 - error TS2322: Type 'Team[]' is not assignable to type 'ResponseTeamDto[]'.
  Property 'project' is missing in type 'Team' but required in type 'ResponseTeamDto'.

58     return await this.teamService.findAll();
       ~~~~~~

  src/modules/team/dto/response-team.dto.ts:29:3
    29   project: Project[];
         ~~~~~~~
    'project' is declared here.

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

src/modules/user/controller/user.controller.ts:41:5 - error TS2740: Type 'User' is missing the following properties from type 'ResponseUserDto': activity, attachment, calendarEvent, comment, and 13 more.

41     return await this.userService.create(createUserDto);
       ~~~~~~

src/modules/user/controller/user.controller.ts:58:5 - error TS2322: Type 'User[]' is not assignable to type 'ResponseUserDto[]'.
  Type 'User' is missing the following properties from type 'ResponseUserDto': activity, attachment, calendarEvent, comment, and 13 more.

58     return await this.userService.findAll();
       ~~~~~~

src/modules/user/dto/response-user.dto.ts:89:3 - error TS2300: Duplicate identifier 'calendarEvent'.

89   calendarEvent: CalendarEvent[];
     ~~~~~~~~~~~~~

src/modules/user/dto/response-user.dto.ts:122:3 - error TS2300: Duplicate identifier 'project'.

122   project: Project[];
      ~~~~~~~

src/modules/user/dto/response-user.dto.ts:131:3 - error TS2300: Duplicate identifier 'task'.

131   task: Task[];
      ~~~~

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

[22:05:17] Found 96 errors. Watching for file changes.


