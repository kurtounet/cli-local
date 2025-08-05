src/app.module.ts:5:28 - error TS2307: Cannot find module './auth/auth.module' or its corresponding type declarations.

5 import { AuthModule } from './auth/auth.module';
                             ~~~~~~~~~~~~~~~~~~~~
src/app.module.ts:6:31 - error TS2307: Cannot find module 'src/modules/account/account.module' or its corresponding type declarations.

6 import { AccountModule } from 'src/modules/account/account.module';
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/modules/activities/dto/activities.dto.ts:48:44 - error TS2551: Property 'activities' does not exist on type 'Users'. Did you mean 'activitiess'?

48   @ManyToOne(() => Users, (users) => users.activities)
                                              ~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:90:3
    90   activitiess: Activities[];
         ~~~~~~~~~~~
    'activitiess' is declared here.
src/modules/activities/dto/activities.dto.ts:53:53 - error TS2551: Property 'activities' does not exist on type 'Projects'. Did you mean 'activitiess'?

53   @ManyToOne(() => Projects, (projects) => projects.activities)
                                                       ~~~~~~~~~~

  src/modules/projects/entity/projects.entity.ts:92:3
    92   activitiess: Activities[];
         ~~~~~~~~~~~
    'activitiess' is declared here.
src/modules/activities/entity/activities.entity.ts:48:44 - error TS2551: Property 'activities' does not exist on type 'Users'. Did you mean 'activitiess'?

48   @ManyToOne(() => Users, (users) => users.activities)
                                              ~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:90:3
    90   activitiess: Activities[];
         ~~~~~~~~~~~
    'activitiess' is declared here.
src/modules/activities/entity/activities.entity.ts:53:53 - error TS2551: Property 'activities' does not exist on type 'Projects'. Did you mean 'activitiess'?

53   @ManyToOne(() => Projects, (projects) => projects.activities)
                                                       ~~~~~~~~~~

  src/modules/projects/entity/projects.entity.ts:92:3
    92   activitiess: Activities[];
         ~~~~~~~~~~~
    'activitiess' is declared here.
src/modules/attachments/dto/attachments.dto.ts:32:44 - error TS2551: Property 'attachments' does not exist on type 'Files'. Did you mean 'attachmentss'?

32   @ManyToOne(() => Files, (files) => files.attachments)
                                              ~~~~~~~~~~~

  src/modules/files/entity/files.entity.ts:45:3
    45   attachmentss: Attachments[];
         ~~~~~~~~~~~~
    'attachmentss' is declared here.
src/modules/attachments/dto/attachments.dto.ts:37:44 - error TS2551: Property 'attachments' does not exist on type 'Users'. Did you mean 'attachmentss'?

37   @ManyToOne(() => Users, (users) => users.attachments)
                                              ~~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:94:3
    94   attachmentss: Attachments[];
         ~~~~~~~~~~~~
    'attachmentss' is declared here.
src/modules/attachments/entity/attachments.entity.ts:32:44 - error TS2551: Property 'attachments' does not exist on type 'Files'. Did you mean 'attachmentss'?

32   @ManyToOne(() => Files, (files) => files.attachments)
                                              ~~~~~~~~~~~

  src/modules/files/entity/files.entity.ts:45:3
    45   attachmentss: Attachments[];
         ~~~~~~~~~~~~
    'attachmentss' is declared here.
src/modules/attachments/entity/attachments.entity.ts:37:44 - error TS2551: Property 'attachments' does not exist on type 'Users'. Did you mean 'attachmentss'?

37   @ManyToOne(() => Users, (users) => users.attachments)
                                              ~~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:94:3
    94   attachmentss: Attachments[];
         ~~~~~~~~~~~~
    'attachmentss' is declared here.
src/modules/calendar-events/dto/calendar-events.dto.ts:63:53 - error TS2551: Property 'calendarEvents' does not exist on type 'Projects'. Did you mean 'calendarEventss'?     

63   @ManyToOne(() => Projects, (projects) => projects.calendarEvents)
                                                       ~~~~~~~~~~~~~~

  src/modules/projects/entity/projects.entity.ts:96:3
    96   calendarEventss: CalendarEvents[];
         ~~~~~~~~~~~~~~~
    'calendarEventss' is declared here.
src/modules/calendar-events/dto/calendar-events.dto.ts:68:44 - error TS2551: Property 'calendarEvents' does not exist on type 'Tasks'. Did you mean 'calendarEventss'?        

68   @ManyToOne(() => Tasks, (tasks) => tasks.calendarEvents)
                                              ~~~~~~~~~~~~~~

  src/modules/tasks/entity/tasks.entity.ts:77:3
    77   calendarEventss: CalendarEvents[];
         ~~~~~~~~~~~~~~~
    'calendarEventss' is declared here.
src/modules/calendar-events/dto/calendar-events.dto.ts:73:44 - error TS2551: Property 'calendarEvents' does not exist on type 'Users'. Did you mean 'calendarEventss'?        

73   @ManyToOne(() => Users, (users) => users.calendarEvents)
                                              ~~~~~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:98:3
    98   calendarEventss: CalendarEvents[];
         ~~~~~~~~~~~~~~~
    'calendarEventss' is declared here.
src/modules/calendar-events/dto/calendar-events.dto.ts:78:44 - error TS2551: Property 'calendarEvents' does not exist on type 'Users'. Did you mean 'calendarEventss'?        

78   @ManyToOne(() => Users, (users) => users.calendarEvents)
                                              ~~~~~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:98:3
    98   calendarEventss: CalendarEvents[];
         ~~~~~~~~~~~~~~~
    'calendarEventss' is declared here.
src/modules/calendar-events/dto/calendar-events.dto.ts:81:3 - error TS2300: Duplicate identifier 'users'.

81   users: Users;
     ~~~~~
src/modules/calendar-events/dto/response-calendar-events.dto.ts:63:3 - error TS2300: Duplicate identifier 'users'.

63   users: Users;
     ~~~~~
src/modules/calendar-events/entity/calendar-events.entity.ts:63:53 - error TS2551: Property 'calendarEvents' does not exist on type 'Projects'. Did you mean 'calendarEventss'?

63   @ManyToOne(() => Projects, (projects) => projects.calendarEvents)
                                                       ~~~~~~~~~~~~~~

  src/modules/projects/entity/projects.entity.ts:96:3
    96   calendarEventss: CalendarEvents[];
         ~~~~~~~~~~~~~~~
    'calendarEventss' is declared here.
src/modules/calendar-events/entity/calendar-events.entity.ts:68:44 - error TS2551: Property 'calendarEvents' does not exist on type 'Tasks'. Did you mean 'calendarEventss'?  

68   @ManyToOne(() => Tasks, (tasks) => tasks.calendarEvents)
                                              ~~~~~~~~~~~~~~

  src/modules/tasks/entity/tasks.entity.ts:77:3
    77   calendarEventss: CalendarEvents[];
         ~~~~~~~~~~~~~~~
    'calendarEventss' is declared here.
src/modules/calendar-events/entity/calendar-events.entity.ts:73:44 - error TS2551: Property 'calendarEvents' does not exist on type 'Users'. Did you mean 'calendarEventss'?  

73   @ManyToOne(() => Users, (users) => users.calendarEvents)
                                              ~~~~~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:98:3
    98   calendarEventss: CalendarEvents[];
         ~~~~~~~~~~~~~~~
    'calendarEventss' is declared here.
src/modules/calendar-events/entity/calendar-events.entity.ts:78:44 - error TS2551: Property 'calendarEvents' does not exist on type 'Users'. Did you mean 'calendarEventss'?  

78   @ManyToOne(() => Users, (users) => users.calendarEvents)
                                              ~~~~~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:98:3
    98   calendarEventss: CalendarEvents[];
         ~~~~~~~~~~~~~~~
    'calendarEventss' is declared here.
src/modules/calendar-events/entity/calendar-events.entity.ts:81:3 - error TS2300: Duplicate identifier 'users'.

81   users: Users;
     ~~~~~
src/modules/comments/dto/comments.dto.ts:55:44 - error TS2551: Property 'comments' does not exist on type 'Users'. Did you mean 'commentss'?

55   @ManyToOne(() => Users, (users) => users.comments)
                                              ~~~~~~~~

  src/modules/users/entity/users.entity.ts:106:3
    106   commentss: Comments[];
          ~~~~~~~~~
    'commentss' is declared here.
src/modules/comments/dto/response-comments.dto.ts:40:3 - error TS2300: Duplicate identifier 'comments'.

40   comments: Comments[];
     ~~~~~~~~
src/modules/comments/dto/response-comments.dto.ts:40:3 - error TS2717: Subsequent property declarations must have the same type.  Property 'comments' must be of type 'Comments', but here has type 'Comments[]'.

40   comments: Comments[];
     ~~~~~~~~

  src/modules/comments/dto/response-comments.dto.ts:37:3
    37   comments: Comments;
         ~~~~~~~~
    'comments' was also declared here.
src/modules/comments/entity/comments.entity.ts:55:44 - error TS2551: Property 'comments' does not exist on type 'Users'. Did you mean 'commentss'?

55   @ManyToOne(() => Users, (users) => users.comments)
                                              ~~~~~~~~

  src/modules/users/entity/users.entity.ts:106:3
    106   commentss: Comments[];
          ~~~~~~~~~
    'commentss' is declared here.
src/modules/custom-reports/dto/custom-reports.dto.ts:54:44 - error TS2551: Property 'customReports' does not exist on type 'Users'. Did you mean 'customReportss'?

54   @ManyToOne(() => Users, (users) => users.customReports)
                                              ~~~~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:110:3
    110   customReportss: CustomReports[];
          ~~~~~~~~~~~~~~
    'customReportss' is declared here.
src/modules/custom-reports/entity/custom-reports.entity.ts:54:44 - error TS2551: Property 'customReports' does not exist on type 'Users'. Did you mean 'customReportss'?      

54   @ManyToOne(() => Users, (users) => users.customReports)
                                              ~~~~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:110:3
    110   customReportss: CustomReports[];
          ~~~~~~~~~~~~~~
    'customReportss' is declared here.
src/modules/files/controller/files.controller.ts:43:5 - error TS2741: Property 'attachments' is missing in type 'Files' but required in type 'ResponseFilesDto'.

43     return await this.filesService.create(createFilesDto);
       ~~~~~~

  src/modules/files/dto/response-files.dto.ts:34:3
    34   attachments: Attachments[];
         ~~~~~~~~~~~
    'attachments' is declared here.
src/modules/files/controller/files.controller.ts:60:5 - error TS2322: Type 'Files[]' is not assignable to type 'ResponseFilesDto[]'.
  Property 'attachments' is missing in type 'Files' but required in type 'ResponseFilesDto'.

60     return await this.filesService.findAll();
       ~~~~~~

  src/modules/files/dto/response-files.dto.ts:34:3
    34   attachments: Attachments[];
         ~~~~~~~~~~~
    'attachments' is declared here.
src/modules/files/dto/files.dto.ts:47:44 - error TS2551: Property 'files' does not exist on type 'Users'. Did you mean 'filess'?

47   @ManyToOne(() => Users, (users) => users.files)
                                              ~~~~~

  src/modules/users/entity/users.entity.ts:117:3
    117   filess: Files[];
          ~~~~~~
    'filess' is declared here.
src/modules/files/entity/files.entity.ts:47:44 - error TS2551: Property 'files' does not exist on type 'Users'. Did you mean 'filess'?

47   @ManyToOne(() => Users, (users) => users.files)
                                              ~~~~~

  src/modules/users/entity/users.entity.ts:117:3
    117   filess: Files[];
          ~~~~~~
    'filess' is declared here.
src/modules/integrations/dto/integrations.dto.ts:39:44 - error TS2551: Property 'integrations' does not exist on type 'Users'. Did you mean 'integrationss'?

39   @ManyToOne(() => Users, (users) => users.integrations)
                                              ~~~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:121:3
    121   integrationss: Integrations[];
          ~~~~~~~~~~~~~
    'integrationss' is declared here.
src/modules/integrations/entity/integrations.entity.ts:39:44 - error TS2551: Property 'integrations' does not exist on type 'Users'. Did you mean 'integrationss'?

39   @ManyToOne(() => Users, (users) => users.integrations)
                                              ~~~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:121:3
    121   integrationss: Integrations[];
          ~~~~~~~~~~~~~
    'integrationss' is declared here.
src/modules/invitations/dto/invitations.dto.ts:44:44 - error TS2551: Property 'invitations' does not exist on type 'Users'. Did you mean 'invitationss'?

44   @ManyToOne(() => Users, (users) => users.invitations)
                                              ~~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:125:3
    125   invitationss: Invitations[];
          ~~~~~~~~~~~~
    'invitationss' is declared here.
src/modules/invitations/entity/invitations.entity.ts:44:44 - error TS2551: Property 'invitations' does not exist on type 'Users'. Did you mean 'invitationss'?

44   @ManyToOne(() => Users, (users) => users.invitations)
                                              ~~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:125:3
    125   invitationss: Invitations[];
          ~~~~~~~~~~~~
    'invitationss' is declared here.
src/modules/labels/dto/labels.dto.ts:34:53 - error TS2551: Property 'labels' does not exist on type 'Projects'. Did you mean 'labelss'?

34   @ManyToOne(() => Projects, (projects) => projects.labels)
                                                       ~~~~~~

  src/modules/projects/entity/projects.entity.ts:100:3
    100   labelss: Labels[];
          ~~~~~~~
    'labelss' is declared here.
src/modules/labels/dto/labels.dto.ts:39:44 - error TS2551: Property 'labels' does not exist on type 'Users'. Did you mean 'labelss'?

39   @ManyToOne(() => Users, (users) => users.labels)
                                              ~~~~~~

  src/modules/users/entity/users.entity.ts:129:3
    129   labelss: Labels[];
          ~~~~~~~
    'labelss' is declared here.
src/modules/labels/entity/labels.entity.ts:34:53 - error TS2551: Property 'labels' does not exist on type 'Projects'. Did you mean 'labelss'?

34   @ManyToOne(() => Projects, (projects) => projects.labels)
                                                       ~~~~~~

  src/modules/projects/entity/projects.entity.ts:100:3
    100   labelss: Labels[];
          ~~~~~~~
    'labelss' is declared here.
src/modules/labels/entity/labels.entity.ts:39:44 - error TS2551: Property 'labels' does not exist on type 'Users'. Did you mean 'labelss'?

39   @ManyToOne(() => Users, (users) => users.labels)
                                              ~~~~~~

  src/modules/users/entity/users.entity.ts:129:3
    129   labelss: Labels[];
          ~~~~~~~
    'labelss' is declared here.
src/modules/milestones/dto/milestones.dto.ts:44:53 - error TS2551: Property 'milestones' does not exist on type 'Projects'. Did you mean 'milestoness'?

44   @ManyToOne(() => Projects, (projects) => projects.milestones)
                                                       ~~~~~~~~~~

  src/modules/projects/entity/projects.entity.ts:104:3
    104   milestoness: Milestones[];
          ~~~~~~~~~~~
    'milestoness' is declared here.
src/modules/milestones/dto/milestones.dto.ts:49:44 - error TS2551: Property 'milestones' does not exist on type 'Users'. Did you mean 'milestoness'?

49   @ManyToOne(() => Users, (users) => users.milestones)
                                              ~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:133:3
    133   milestoness: Milestones[];
          ~~~~~~~~~~~
    'milestoness' is declared here.
src/modules/milestones/entity/milestones.entity.ts:44:53 - error TS2551: Property 'milestones' does not exist on type 'Projects'. Did you mean 'milestoness'?

44   @ManyToOne(() => Projects, (projects) => projects.milestones)
                                                       ~~~~~~~~~~

  src/modules/projects/entity/projects.entity.ts:104:3
    104   milestoness: Milestones[];
          ~~~~~~~~~~~
    'milestoness' is declared here.
src/modules/milestones/entity/milestones.entity.ts:49:44 - error TS2551: Property 'milestones' does not exist on type 'Users'. Did you mean 'milestoness'?

49   @ManyToOne(() => Users, (users) => users.milestones)
                                              ~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:133:3
    133   milestoness: Milestones[];
          ~~~~~~~~~~~
    'milestoness' is declared here.
src/modules/notifications/dto/notifications.dto.ts:41:44 - error TS2551: Property 'notifications' does not exist on type 'Users'. Did you mean 'notificationss'?

41   @ManyToOne(() => Users, (users) => users.notifications)
                                              ~~~~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:137:3
    137   notificationss: Notifications[];
          ~~~~~~~~~~~~~~
    'notificationss' is declared here.
src/modules/notifications/entity/notifications.entity.ts:41:44 - error TS2551: Property 'notifications' does not exist on type 'Users'. Did you mean 'notificationss'?        

41   @ManyToOne(() => Users, (users) => users.notifications)
                                              ~~~~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:137:3
    137   notificationss: Notifications[];
          ~~~~~~~~~~~~~~
    'notificationss' is declared here.
src/modules/project-stats/controller/project-stats.controller.ts:43:5 - error TS2741: Property 'id' is missing in type 'ProjectStats' but required in type 'ResponseProjectStatsDto'.

43     return await this.projectStatsService.create(createProjectStatsDto);
       ~~~~~~

  src/modules/project-stats/dto/response-project-stats.dto.ts:5:3
    5   id!: number; // Assuming all entities have an 'id' primary key
        ~~
    'id' is declared here.
src/modules/project-stats/controller/project-stats.controller.ts:60:5 - error TS2322: Type 'ProjectStats[]' is not assignable to type 'ResponseProjectStatsDto[]'.
  Property 'id' is missing in type 'ProjectStats' but required in type 'ResponseProjectStatsDto'.

60     return await this.projectStatsService.findAll();
       ~~~~~~

  src/modules/project-stats/dto/response-project-stats.dto.ts:5:3
    5   id!: number; // Assuming all entities have an 'id' primary key
        ~~
    'id' is declared here.
src/modules/project-stats/service/project-stats.service.ts:32:16 - error TS2353: Object literal may only specify known properties, and 'id' does not exist in type 'FindOptionsWhere<ProjectStats> | FindOptionsWhere<ProjectStats>[]'.

32       where: { id },
                  ~~

  node_modules/typeorm/find-options/FindOneOptions.d.ts:23:5
    23     where?: FindOptionsWhere<Entity>[] | FindOptionsWhere<Entity>;
           ~~~~~
    The expected type comes from property 'where' which is declared here on type 'FindOneOptions<ProjectStats>'
src/modules/project-stats/service/project-stats.service.ts:47:16 - error TS2353: Object literal may only specify known properties, and 'id' does not exist in type 'FindOptionsWhere<ProjectStats> | FindOptionsWhere<ProjectStats>[]'.

47       where: { id },
                  ~~

  node_modules/typeorm/find-options/FindOneOptions.d.ts:23:5
    23     where?: FindOptionsWhere<Entity>[] | FindOptionsWhere<Entity>;
           ~~~~~
    The expected type comes from property 'where' which is declared here on type 'FindOneOptions<ProjectStats>'
src/modules/projects/controller/projects.controller.ts:43:5 - error TS2740: Type 'Projects' is missing the following properties from type 'ResponseProjectsDto': activities, calendarEvents, labels, milestones, and 2 more.

43     return await this.projectsService.create(createProjectsDto);
       ~~~~~~
src/modules/projects/controller/projects.controller.ts:60:5 - error TS2322: Type 'Projects[]' is not assignable to type 'ResponseProjectsDto[]'.
  Type 'Projects' is missing the following properties from type 'ResponseProjectsDto': activities, calendarEvents, labels, milestones, and 2 more.

60     return await this.projectsService.findAll();
       ~~~~~~
src/modules/projects/dto/projects.dto.ts:118:44 - error TS2551: Property 'projects' does not exist on type 'Users'. Did you mean 'projectss'?

118   @ManyToOne(() => Users, (users) => users.projects)
                                               ~~~~~~~~

  src/modules/users/entity/users.entity.ts:144:3
    144   projectss: Projects[];
          ~~~~~~~~~
    'projectss' is declared here.
src/modules/projects/dto/projects.dto.ts:123:44 - error TS2551: Property 'projects' does not exist on type 'Users'. Did you mean 'projectss'?

123   @ManyToOne(() => Users, (users) => users.projects)
                                               ~~~~~~~~

  src/modules/users/entity/users.entity.ts:144:3
    144   projectss: Projects[];
          ~~~~~~~~~
    'projectss' is declared here.
src/modules/projects/dto/projects.dto.ts:126:3 - error TS2300: Duplicate identifier 'users'.

126   users: Users;
      ~~~~~
src/modules/projects/dto/projects.dto.ts:128:44 - error TS2551: Property 'projects' does not exist on type 'Teams'. Did you mean 'projectss'?

128   @ManyToOne(() => Teams, (teams) => teams.projects)
                                               ~~~~~~~~

  src/modules/teams/entity/teams.entity.ts:41:3
    41   projectss: Projects[];
         ~~~~~~~~~
    'projectss' is declared here.
src/modules/projects/dto/response-projects.dto.ts:99:3 - error TS2300: Duplicate identifier 'projects'.

99   projects: Projects[];
     ~~~~~~~~
src/modules/projects/dto/response-projects.dto.ts:99:3 - error TS2717: Subsequent property declarations must have the same type.  Property 'projects' must be of type 'Projects', but here has type 'Projects[]'.

99   projects: Projects[];
     ~~~~~~~~

  src/modules/projects/dto/response-projects.dto.ts:96:3
    96   projects: Projects;
         ~~~~~~~~
    'projects' was also declared here.
src/modules/projects/dto/response-projects.dto.ts:105:3 - error TS2300: Duplicate identifier 'users'.

105   users: Users;
      ~~~~~
src/modules/projects/entity/projects.entity.ts:118:44 - error TS2551: Property 'projects' does not exist on type 'Users'. Did you mean 'projectss'?

118   @ManyToOne(() => Users, (users) => users.projects)
                                               ~~~~~~~~

  src/modules/users/entity/users.entity.ts:144:3
    144   projectss: Projects[];
          ~~~~~~~~~
    'projectss' is declared here.
src/modules/projects/entity/projects.entity.ts:123:44 - error TS2551: Property 'projects' does not exist on type 'Users'. Did you mean 'projectss'?

123   @ManyToOne(() => Users, (users) => users.projects)
                                               ~~~~~~~~

  src/modules/users/entity/users.entity.ts:144:3
    144   projectss: Projects[];
          ~~~~~~~~~
    'projectss' is declared here.
src/modules/projects/entity/projects.entity.ts:126:3 - error TS2300: Duplicate identifier 'users'.

126   users: Users;
      ~~~~~
src/modules/projects/entity/projects.entity.ts:128:44 - error TS2551: Property 'projects' does not exist on type 'Teams'. Did you mean 'projectss'?

128   @ManyToOne(() => Teams, (teams) => teams.projects)
                                               ~~~~~~~~

  src/modules/teams/entity/teams.entity.ts:41:3
    41   projectss: Projects[];
         ~~~~~~~~~
    'projectss' is declared here.
src/modules/task-details/dto/response-task-details.dto.ts:8:3 - error TS2300: Duplicate identifier 'id'.

8   id!: number;
    ~~
src/modules/tasks/controller/tasks.controller.ts:43:5 - error TS2739: Type 'Tasks' is missing the following properties from type 'ResponseTasksDto': calendarEvents, timeEntries

43     return await this.tasksService.create(createTasksDto);
       ~~~~~~
src/modules/tasks/controller/tasks.controller.ts:60:5 - error TS2322: Type 'Tasks[]' is not assignable to type 'ResponseTasksDto[]'.
  Type 'Tasks' is missing the following properties from type 'ResponseTasksDto': calendarEvents, timeEntries

60     return await this.tasksService.findAll();
       ~~~~~~
src/modules/tasks/dto/response-tasks.dto.ts:81:3 - error TS2300: Duplicate identifier 'tasks'.

81   tasks: Tasks[];
     ~~~~~
src/modules/tasks/dto/response-tasks.dto.ts:81:3 - error TS2717: Subsequent property declarations must have the same type.  Property 'tasks' must be of type 'Tasks', but here has type 'Tasks[]'.

81   tasks: Tasks[];
     ~~~~~

  src/modules/tasks/dto/response-tasks.dto.ts:78:3
    78   tasks: Tasks;
         ~~~~~
    'tasks' was also declared here.
src/modules/tasks/dto/response-tasks.dto.ts:87:3 - error TS2300: Duplicate identifier 'users'.

87   users: Users;
     ~~~~~
src/modules/tasks/dto/tasks.dto.ts:85:53 - error TS2551: Property 'tasks' does not exist on type 'Projects'. Did you mean 'taskss'?

85   @ManyToOne(() => Projects, (projects) => projects.tasks)
                                                       ~~~~~

  src/modules/projects/entity/projects.entity.ts:135:3
    135   taskss: Tasks[];
          ~~~~~~
    'taskss' is declared here.
src/modules/tasks/dto/tasks.dto.ts:99:44 - error TS2551: Property 'tasks' does not exist on type 'Users'. Did you mean 'taskss'?

99   @ManyToOne(() => Users, (users) => users.tasks)
                                              ~~~~~

  src/modules/users/entity/users.entity.ts:152:3
    152   taskss: Tasks[];
          ~~~~~~
    'taskss' is declared here.
src/modules/tasks/dto/tasks.dto.ts:104:44 - error TS2551: Property 'tasks' does not exist on type 'Users'. Did you mean 'taskss'?

104   @ManyToOne(() => Users, (users) => users.tasks)
                                               ~~~~~

  src/modules/users/entity/users.entity.ts:152:3
    152   taskss: Tasks[];
          ~~~~~~
    'taskss' is declared here.
src/modules/tasks/dto/tasks.dto.ts:107:3 - error TS2300: Duplicate identifier 'users'.

107   users: Users;
      ~~~~~
src/modules/tasks/entity/tasks.entity.ts:85:53 - error TS2551: Property 'tasks' does not exist on type 'Projects'. Did you mean 'taskss'?

85   @ManyToOne(() => Projects, (projects) => projects.tasks)
                                                       ~~~~~

  src/modules/projects/entity/projects.entity.ts:135:3
    135   taskss: Tasks[];
          ~~~~~~
    'taskss' is declared here.
src/modules/tasks/entity/tasks.entity.ts:99:44 - error TS2551: Property 'tasks' does not exist on type 'Users'. Did you mean 'taskss'?

99   @ManyToOne(() => Users, (users) => users.tasks)
                                              ~~~~~

  src/modules/users/entity/users.entity.ts:152:3
    152   taskss: Tasks[];
          ~~~~~~
    'taskss' is declared here.
src/modules/tasks/entity/tasks.entity.ts:104:44 - error TS2551: Property 'tasks' does not exist on type 'Users'. Did you mean 'taskss'?

104   @ManyToOne(() => Users, (users) => users.tasks)
                                               ~~~~~

  src/modules/users/entity/users.entity.ts:152:3
    152   taskss: Tasks[];
          ~~~~~~
    'taskss' is declared here.
src/modules/tasks/entity/tasks.entity.ts:107:3 - error TS2300: Duplicate identifier 'users'.

107   users: Users;
      ~~~~~
src/modules/teams/controller/teams.controller.ts:43:5 - error TS2741: Property 'projects' is missing in type 'Teams' but required in type 'ResponseTeamsDto'.

43     return await this.teamsService.create(createTeamsDto);
       ~~~~~~

  src/modules/teams/dto/response-teams.dto.ts:29:3
    29   projects: Projects[];
         ~~~~~~~~
    'projects' is declared here.
src/modules/teams/controller/teams.controller.ts:60:5 - error TS2322: Type 'Teams[]' is not assignable to type 'ResponseTeamsDto[]'.
  Property 'projects' is missing in type 'Teams' but required in type 'ResponseTeamsDto'.

60     return await this.teamsService.findAll();
       ~~~~~~

  src/modules/teams/dto/response-teams.dto.ts:29:3
    29   projects: Projects[];
         ~~~~~~~~
    'projects' is declared here.
src/modules/teams/dto/teams.dto.ts:46:44 - error TS2551: Property 'teams' does not exist on type 'Users'. Did you mean 'teamss'?

46   @ManyToOne(() => Users, (users) => users.teams)
                                              ~~~~~

  src/modules/users/entity/users.entity.ts:163:3
    163   teamss: Teams[];
          ~~~~~~
    'teamss' is declared here.
src/modules/teams/entity/teams.entity.ts:46:44 - error TS2551: Property 'teams' does not exist on type 'Users'. Did you mean 'teamss'?

46   @ManyToOne(() => Users, (users) => users.teams)
                                              ~~~~~

  src/modules/users/entity/users.entity.ts:163:3
    163   teamss: Teams[];
          ~~~~~~
    'teamss' is declared here.
src/modules/time-entries/dto/time-entries.dto.ts:52:44 - error TS2551: Property 'timeEntries' does not exist on type 'Tasks'. Did you mean 'timeEntriess'?

52   @ManyToOne(() => Tasks, (tasks) => tasks.timeEntries)
                                              ~~~~~~~~~~~

  src/modules/tasks/entity/tasks.entity.ts:111:3
    111   timeEntriess: TimeEntries[];
          ~~~~~~~~~~~~
    'timeEntriess' is declared here.
src/modules/time-entries/dto/time-entries.dto.ts:57:44 - error TS2551: Property 'timeEntries' does not exist on type 'Users'. Did you mean 'timeEntriess'?

57   @ManyToOne(() => Users, (users) => users.timeEntries)
                                              ~~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:167:3
    167   timeEntriess: TimeEntries[];
          ~~~~~~~~~~~~
    'timeEntriess' is declared here.
src/modules/time-entries/entity/time-entries.entity.ts:52:44 - error TS2551: Property 'timeEntries' does not exist on type 'Tasks'. Did you mean 'timeEntriess'?

52   @ManyToOne(() => Tasks, (tasks) => tasks.timeEntries)
                                              ~~~~~~~~~~~

  src/modules/tasks/entity/tasks.entity.ts:111:3
    111   timeEntriess: TimeEntries[];
          ~~~~~~~~~~~~
    'timeEntriess' is declared here.
src/modules/time-entries/entity/time-entries.entity.ts:57:44 - error TS2551: Property 'timeEntries' does not exist on type 'Users'. Did you mean 'timeEntriess'?

57   @ManyToOne(() => Users, (users) => users.timeEntries)
                                              ~~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:167:3
    167   timeEntriess: TimeEntries[];
          ~~~~~~~~~~~~
    'timeEntriess' is declared here.
src/modules/user-sessions/dto/user-sessions.dto.ts:35:44 - error TS2551: Property 'userSessions' does not exist on type 'Users'. Did you mean 'userSessionss'?

35   @ManyToOne(() => Users, (users) => users.userSessions)
                                              ~~~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:171:3
    171   userSessionss: UserSessions[];
          ~~~~~~~~~~~~~
    'userSessionss' is declared here.
src/modules/user-sessions/entity/user-sessions.entity.ts:35:44 - error TS2551: Property 'userSessions' does not exist on type 'Users'. Did you mean 'userSessionss'?

35   @ManyToOne(() => Users, (users) => users.userSessions)
                                              ~~~~~~~~~~~~

  src/modules/users/entity/users.entity.ts:171:3
    171   userSessionss: UserSessions[];
          ~~~~~~~~~~~~~
    'userSessionss' is declared here.
src/modules/users/controller/users.controller.ts:43:5 - error TS2740: Type 'Users' is missing the following properties from type 'ResponseUsersDto': activities, attachments, 
calendarEvents, comments, and 13 more.

43     return await this.usersService.create(createUsersDto);
       ~~~~~~
src/modules/users/controller/users.controller.ts:60:5 - error TS2322: Type 'Users[]' is not assignable to type 'ResponseUsersDto[]'.
  Type 'Users' is missing the following properties from type 'ResponseUsersDto': activities, attachments, calendarEvents, comments, and 13 more.

60     return await this.usersService.findAll();
       ~~~~~~
src/modules/users/dto/response-users.dto.ts:89:3 - error TS2300: Duplicate identifier 'calendarEvents'.

89   calendarEvents: CalendarEvents[];
     ~~~~~~~~~~~~~~
src/modules/users/dto/response-users.dto.ts:125:3 - error TS2300: Duplicate identifier 'projects'.

125   projects: Projects[];
      ~~~~~~~~
src/modules/users/dto/response-users.dto.ts:131:3 - error TS2300: Duplicate identifier 'tasks'.

131   tasks: Tasks[];
      ~~~~~
src/modules/users/dto/users.dto.ts:102:3 - error TS2300: Duplicate identifier 'calendarEventss'.

102   calendarEventss: CalendarEvents[];
      ~~~~~~~~~~~~~~~
src/modules/users/dto/users.dto.ts:148:3 - error TS2300: Duplicate identifier 'projectss'.

148   projectss: Projects[];
      ~~~~~~~~~
src/modules/users/dto/users.dto.ts:156:3 - error TS2300: Duplicate identifier 'taskss'.

156   taskss: Tasks[];
      ~~~~~~
src/modules/users/entity/users.entity.ts:102:3 - error TS2300: Duplicate identifier 'calendarEventss'.

102   calendarEventss: CalendarEvents[];
      ~~~~~~~~~~~~~~~
src/modules/users/entity/users.entity.ts:148:3 - error TS2300: Duplicate identifier 'projectss'.

148   projectss: Projects[];
      ~~~~~~~~~
src/modules/users/entity/users.entity.ts:156:3 - error TS2300: Duplicate identifier 'taskss'.

156   taskss: Tasks[];
      ~~~~~~
src/modules/webhooks/dto/webhooks.dto.ts:46:53 - error TS2551: Property 'webhooks' does not exist on type 'Projects'. Did you mean 'webhookss'?

46   @ManyToOne(() => Projects, (projects) => projects.webhooks)
                                                       ~~~~~~~~

  src/modules/projects/entity/projects.entity.ts:139:3
    139   webhookss: Webhooks[];
          ~~~~~~~~~
    'webhookss' is declared here.
src/modules/webhooks/dto/webhooks.dto.ts:51:44 - error TS2551: Property 'webhooks' does not exist on type 'Users'. Did you mean 'webhookss'?

51   @ManyToOne(() => Users, (users) => users.webhooks)
                                              ~~~~~~~~

  src/modules/users/entity/users.entity.ts:178:3
    178   webhookss: Webhooks[];
          ~~~~~~~~~
    'webhookss' is declared here.
src/modules/webhooks/entity/webhooks.entity.ts:46:53 - error TS2551: Property 'webhooks' does not exist on type 'Projects'. Did you mean 'webhookss'?

46   @ManyToOne(() => Projects, (projects) => projects.webhooks)
                                                       ~~~~~~~~

  src/modules/projects/entity/projects.entity.ts:139:3
    139   webhookss: Webhooks[];
          ~~~~~~~~~
    'webhookss' is declared here.
src/modules/webhooks/entity/webhooks.entity.ts:51:44 - error TS2551: Property 'webhooks' does not exist on type 'Users'. Did you mean 'webhookss'?

51   @ManyToOne(() => Users, (users) => users.webhooks)
                                              ~~~~~~~~

  src/modules/users/entity/users.entity.ts:178:3
    178   webhookss: Webhooks[];
          ~~~~~~~~~
    'webhookss' is declared here.

Found 101 error(s).