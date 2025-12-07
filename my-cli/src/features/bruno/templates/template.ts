export function brunoGenerateCollectionTemplate() {
  return `{
  "name": "Hello API Platform",
  "version": "1",
  "items": [
    {
      "type": "folder",
      "name": "CodeBase",
      "items": [
        {
          "type": "http",
          "name": "Creates a CodeBase resource-",
          "seq": 2,
          "request": {
            "url": "http://api/code_bases",
            "method": "POST",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Removes the CodeBase resource-",
          "seq": 4,
          "request": {
            "url": "http://api/code_bases/{id}",
            "method": "DELETE",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves a CodeBase resource-",
          "seq": 3,
          "request": {
            "url": "http://api/code_bases/{id}",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Updates the CodeBase resource-",
          "seq": 5,
          "request": {
            "url": "http://api/code_bases/{id}",
            "method": "PATCH",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves the collection of CodeBase resources-",
          "seq": 1,
          "request": {
            "url": "http://api/code_bases",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": [
              {
                "name": "page",
                "value": "",
                "enabled": false
              }
            ]
          }
        }
      ]
    },
    {
      "type": "folder",
      "name": "Comment",
      "items": [
        {
          "type": "http",
          "name": "Creates a Comment resource-",
          "seq": 2,
          "request": {
            "url": "http://api/comments",
            "method": "POST",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Removes the Comment resource-",
          "seq": 4,
          "request": {
            "url": "http://api/comments/{id}",
            "method": "DELETE",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves a Comment resource-",
          "seq": 3,
          "request": {
            "url": "http://api/comments/{id}",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves the collection of Comment resources-",
          "seq": 1,
          "request": {
            "url": "http://api/comments",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": [
              {
                "name": "page",
                "value": "",
                "enabled": false
              }
            ]
          }
        },
        {
          "type": "http",
          "name": "Updates the Comment resource-",
          "seq": 5,
          "request": {
            "url": "http://api/comments/{id}",
            "method": "PATCH",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        }
      ]
    },
    {
      "type": "folder",
      "name": "ContextStatus",
      "items": [
        {
          "type": "http",
          "name": "Creates a ContextStatus resource-",
          "seq": 2,
          "request": {
            "url": "http://api/context_statuses",
            "method": "POST",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Removes the ContextStatus resource-",
          "seq": 4,
          "request": {
            "url": "http://api/context_statuses/{id}",
            "method": "DELETE",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves a ContextStatus resource-",
          "seq": 3,
          "request": {
            "url": "http://api/context_statuses/{id}",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves the collection of ContextStatus resources-",
          "seq": 1,
          "request": {
            "url": "http://api/context_statuses",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": [
              {
                "name": "page",
                "value": "",
                "enabled": false
              }
            ]
          }
        },
        {
          "type": "http",
          "name": "Updates the ContextStatus resource-",
          "seq": 5,
          "request": {
            "url": "http://api/context_statuses/{id}",
            "method": "PATCH",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        }
      ]
    },
    {
      "type": "folder",
      "name": "Context",
      "items": [
        {
          "type": "http",
          "name": "Creates a Context resource-",
          "seq": 2,
          "request": {
            "url": "http://api/contexts",
            "method": "POST",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Removes the Context resource-",
          "seq": 4,
          "request": {
            "url": "http://api/contexts/{id}",
            "method": "DELETE",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves a Context resource-",
          "seq": 3,
          "request": {
            "url": "http://api/contexts/{id}",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves the collection of Context resources-",
          "seq": 1,
          "request": {
            "url": "http://api/contexts",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": [
              {
                "name": "page",
                "value": "",
                "enabled": false
              }
            ]
          }
        },
        {
          "type": "http",
          "name": "Updates the Context resource-",
          "seq": 5,
          "request": {
            "url": "http://api/contexts/{id}",
            "method": "PATCH",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        }
      ]
    },
    {
      "type": "folder",
      "name": "Feature",
      "items": [
        {
          "type": "http",
          "name": "Creates a Feature resource-",
          "seq": 2,
          "request": {
            "url": "http://api/features",
            "method": "POST",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Removes the Feature resource-",
          "seq": 4,
          "request": {
            "url": "http://api/features/{id}",
            "method": "DELETE",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves a Feature resource-",
          "seq": 3,
          "request": {
            "url": "http://api/features/{id}",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves the collection of Feature resources-",
          "seq": 1,
          "request": {
            "url": "http://api/features",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": [
              {
                "name": "page",
                "value": "",
                "enabled": false
              }
            ]
          }
        },
        {
          "type": "http",
          "name": "Updates the Feature resource-",
          "seq": 5,
          "request": {
            "url": "http://api/features/{id}",
            "method": "PATCH",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        }
      ]
    },
    {
      "type": "folder",
      "name": "Notification",
      "items": [
        {
          "type": "http",
          "name": "Creates a Notification resource-",
          "seq": 2,
          "request": {
            "url": "http://api/notifications",
            "method": "POST",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Removes the Notification resource-",
          "seq": 4,
          "request": {
            "url": "http://api/notifications/{id}",
            "method": "DELETE",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves a Notification resource-",
          "seq": 3,
          "request": {
            "url": "http://api/notifications/{id}",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves the collection of Notification resources-",
          "seq": 1,
          "request": {
            "url": "http://api/notifications",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": [
              {
                "name": "page",
                "value": "",
                "enabled": false
              }
            ]
          }
        },
        {
          "type": "http",
          "name": "Updates the Notification resource-",
          "seq": 5,
          "request": {
            "url": "http://api/notifications/{id}",
            "method": "PATCH",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        }
      ]
    },
    {
      "type": "folder",
      "name": "ProjectTemplate",
      "items": [
        {
          "type": "http",
          "name": "Creates a ProjectTemplate resource-",
          "seq": 2,
          "request": {
            "url": "http://api/project_templates",
            "method": "POST",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Removes the ProjectTemplate resource-",
          "seq": 4,
          "request": {
            "url": "http://api/project_templates/{id}",
            "method": "DELETE",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves a ProjectTemplate resource-",
          "seq": 3,
          "request": {
            "url": "http://api/project_templates/{id}",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves the collection of ProjectTemplate resources-",
          "seq": 1,
          "request": {
            "url": "http://api/project_templates",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": [
              {
                "name": "page",
                "value": "",
                "enabled": false
              }
            ]
          }
        },
        {
          "type": "http",
          "name": "Updates the ProjectTemplate resource-",
          "seq": 5,
          "request": {
            "url": "http://api/project_templates/{id}",
            "method": "PATCH",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        }
      ]
    },
    {
      "type": "folder",
      "name": "ProjectInstance",
      "items": [
        {
          "type": "http",
          "name": "Creates a ProjectInstance resource-",
          "seq": 2,
          "request": {
            "url": "http://api/project_instances",
            "method": "POST",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Removes the ProjectInstance resource-",
          "seq": 4,
          "request": {
            "url": "http://api/project_instances/{id}",
            "method": "DELETE",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves a ProjectInstance resource-",
          "seq": 3,
          "request": {
            "url": "http://api/project_instances/{id}",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves the collection of ProjectInstance resources-",
          "seq": 1,
          "request": {
            "url": "http://api/project_instances",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": [
              {
                "name": "page",
                "value": "",
                "enabled": false
              }
            ]
          }
        },
        {
          "type": "http",
          "name": "Updates the ProjectInstance resource-",
          "seq": 5,
          "request": {
            "url": "http://api/project_instances/{id}",
            "method": "PATCH",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        }
      ]
    },
    {
      "type": "folder",
      "name": "File",
      "items": [
        {
          "type": "http",
          "name": "Creates a File resource-",
          "seq": 2,
          "request": {
            "url": "http://api/files",
            "method": "POST",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Removes the File resource-",
          "seq": 4,
          "request": {
            "url": "http://api/files/{id}",
            "method": "DELETE",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves a File resource-",
          "seq": 3,
          "request": {
            "url": "http://api/files/{id}",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves the collection of File resources-",
          "seq": 1,
          "request": {
            "url": "http://api/files",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": [
              {
                "name": "page",
                "value": "",
                "enabled": false
              }
            ]
          }
        },
        {
          "type": "http",
          "name": "Updates the File resource-",
          "seq": 5,
          "request": {
            "url": "http://api/files/{id}",
            "method": "PATCH",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        }
      ]
    },
    {
      "type": "folder",
      "name": "Priority",
      "items": [
        {
          "type": "http",
          "name": "Creates a Priority resource-",
          "seq": 2,
          "request": {
            "url": "http://api/priorities",
            "method": "POST",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Removes the Priority resource-",
          "seq": 4,
          "request": {
            "url": "http://api/priorities/{id}",
            "method": "DELETE",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves a Priority resource-",
          "seq": 3,
          "request": {
            "url": "http://api/priorities/{id}",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves the collection of Priority resources-",
          "seq": 1,
          "request": {
            "url": "http://api/priorities",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": [
              {
                "name": "page",
                "value": "",
                "enabled": false
              }
            ]
          }
        },
        {
          "type": "http",
          "name": "Updates the Priority resource-",
          "seq": 5,
          "request": {
            "url": "http://api/priorities/{id}",
            "method": "PATCH",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        }
      ]
    },
    {
      "type": "folder",
      "name": "SprintInstance",
      "items": [
        {
          "type": "http",
          "name": "Creates a SprintInstance resource-",
          "seq": 2,
          "request": {
            "url": "http://api/sprint_instances",
            "method": "POST",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Removes the SprintInstance resource-",
          "seq": 4,
          "request": {
            "url": "http://api/sprint_instances/{id}",
            "method": "DELETE",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves a SprintInstance resource-",
          "seq": 3,
          "request": {
            "url": "http://api/sprint_instances/{id}",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves the collection of SprintInstance resources-",
          "seq": 1,
          "request": {
            "url": "http://api/sprint_instances",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": [
              {
                "name": "page",
                "value": "",
                "enabled": false
              }
            ]
          }
        },
        {
          "type": "http",
          "name": "Updates the SprintInstance resource-",
          "seq": 5,
          "request": {
            "url": "http://api/sprint_instances/{id}",
            "method": "PATCH",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        }
      ]
    },
    {
      "type": "folder",
      "name": "SprintTask",
      "items": [
        {
          "type": "http",
          "name": "Creates a SprintTask resource-",
          "seq": 2,
          "request": {
            "url": "http://api/sprint_tasks",
            "method": "POST",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Removes the SprintTask resource-",
          "seq": 4,
          "request": {
            "url": "http://api/sprint_tasks/{id}",
            "method": "DELETE",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves a SprintTask resource-",
          "seq": 3,
          "request": {
            "url": "http://api/sprint_tasks/{id}",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves the collection of SprintTask resources-",
          "seq": 1,
          "request": {
            "url": "http://api/sprint_tasks",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": [
              {
                "name": "page",
                "value": "",
                "enabled": false
              }
            ]
          }
        },
        {
          "type": "http",
          "name": "Updates the SprintTask resource-",
          "seq": 5,
          "request": {
            "url": "http://api/sprint_tasks/{id}",
            "method": "PATCH",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        }
      ]
    },
    {
      "type": "folder",
      "name": "TaskInstance",
      "items": [
        {
          "type": "http",
          "name": "Creates a TaskInstance resource-",
          "seq": 2,
          "request": {
            "url": "http://api/task_instances",
            "method": "POST",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Removes the TaskInstance resource-",
          "seq": 4,
          "request": {
            "url": "http://api/task_instances/{id}",
            "method": "DELETE",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves a TaskInstance resource-",
          "seq": 3,
          "request": {
            "url": "http://api/task_instances/{id}",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves the collection of TaskInstance resources-",
          "seq": 1,
          "request": {
            "url": "http://api/task_instances",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": [
              {
                "name": "page",
                "value": "",
                "enabled": false
              }
            ]
          }
        },
        {
          "type": "http",
          "name": "Updates the TaskInstance resource-",
          "seq": 5,
          "request": {
            "url": "http://api/task_instances/{id}",
            "method": "PATCH",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        }
      ]
    },
    {
      "type": "folder",
      "name": "Status",
      "items": [
        {
          "type": "http",
          "name": "Creates a Status resource-",
          "seq": 2,
          "request": {
            "url": "http://api/statuses",
            "method": "POST",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Removes the Status resource-",
          "seq": 4,
          "request": {
            "url": "http://api/statuses/{id}",
            "method": "DELETE",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves a Status resource-",
          "seq": 3,
          "request": {
            "url": "http://api/statuses/{id}",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves the collection of Status resources-",
          "seq": 1,
          "request": {
            "url": "http://api/statuses",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": [
              {
                "name": "page",
                "value": "",
                "enabled": false
              }
            ]
          }
        },
        {
          "type": "http",
          "name": "Updates the Status resource-",
          "seq": 5,
          "request": {
            "url": "http://api/statuses/{id}",
            "method": "PATCH",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        }
      ]
    },
    {
      "type": "folder",
      "name": "SprintTemplate",
      "items": [
        {
          "type": "http",
          "name": "Creates a SprintTemplate resource-",
          "seq": 2,
          "request": {
            "url": "http://api/sprint_templates",
            "method": "POST",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Removes the SprintTemplate resource-",
          "seq": 4,
          "request": {
            "url": "http://api/sprint_templates/{id}",
            "method": "DELETE",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves a SprintTemplate resource-",
          "seq": 3,
          "request": {
            "url": "http://api/sprint_templates/{id}",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves the collection of SprintTemplate resources-",
          "seq": 1,
          "request": {
            "url": "http://api/sprint_templates",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": [
              {
                "name": "page",
                "value": "",
                "enabled": false
              }
            ]
          }
        },
        {
          "type": "http",
          "name": "Updates the SprintTemplate resource-",
          "seq": 5,
          "request": {
            "url": "http://api/sprint_templates/{id}",
            "method": "PATCH",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        }
      ]
    },
    {
      "type": "folder",
      "name": "Technologie",
      "items": [
        {
          "type": "http",
          "name": "Creates a Technologie resource-",
          "seq": 2,
          "request": {
            "url": "http://api/technologies",
            "method": "POST",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Removes the Technologie resource-",
          "seq": 4,
          "request": {
            "url": "http://api/technologies/{id}",
            "method": "DELETE",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves a Technologie resource-",
          "seq": 3,
          "request": {
            "url": "http://api/technologies/{id}",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves the collection of Technologie resources-",
          "seq": 1,
          "request": {
            "url": "http://api/technologies",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": [
              {
                "name": "page",
                "value": "",
                "enabled": false
              }
            ]
          }
        },
        {
          "type": "http",
          "name": "Updates the Technologie resource-",
          "seq": 5,
          "request": {
            "url": "http://api/technologies/{id}",
            "method": "PATCH",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        }
      ]
    },
    {
      "type": "folder",
      "name": "TaskTemplate",
      "items": [
        {
          "type": "http",
          "name": "Creates a TaskTemplate resource-",
          "seq": 2,
          "request": {
            "url": "http://api/task_templates",
            "method": "POST",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Removes the TaskTemplate resource-",
          "seq": 4,
          "request": {
            "url": "http://api/task_templates/{id}",
            "method": "DELETE",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves a TaskTemplate resource-",
          "seq": 3,
          "request": {
            "url": "http://api/task_templates/{id}",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves the collection of TaskTemplate resources-",
          "seq": 1,
          "request": {
            "url": "http://api/task_templates",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": [
              {
                "name": "page",
                "value": "",
                "enabled": false
              }
            ]
          }
        },
        {
          "type": "http",
          "name": "Updates the TaskTemplate resource-",
          "seq": 5,
          "request": {
            "url": "http://api/task_templates/{id}",
            "method": "PATCH",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        }
      ]
    },
    {
      "type": "folder",
      "name": "TypeTask",
      "items": [
        {
          "type": "http",
          "name": "Creates a TypeTask resource-",
          "seq": 2,
          "request": {
            "url": "http://api/type_tasks",
            "method": "POST",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Removes the TypeTask resource-",
          "seq": 4,
          "request": {
            "url": "http://api/type_tasks/{id}",
            "method": "DELETE",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves a TypeTask resource-",
          "seq": 3,
          "request": {
            "url": "http://api/type_tasks/{id}",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        },
        {
          "type": "http",
          "name": "Retrieves the collection of TypeTask resources-",
          "seq": 1,
          "request": {
            "url": "http://api/type_tasks",
            "method": "GET",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": [
              {
                "name": "page",
                "value": "",
                "enabled": false
              }
            ]
          }
        },
        {
          "type": "http",
          "name": "Updates the TypeTask resource-",
          "seq": 5,
          "request": {
            "url": "http://api/type_tasks/{id}",
            "method": "PATCH",
            "headers": [],
            "body": {
              "mode": "none",
              "formUrlEncoded": [],
              "multipartForm": []
            },
            "script": {},
            "vars": {},
            "assertions": [],
            "tests": "",
            "auth": {
              "mode": "none"
            },
            "query": []
          }
        }
      ]
    }
  ],
  "environments": [],
  "brunoConfig": {
    "version": "1",
    "name": "Hello API Platform",
    "type": "collection",
    "ignore": [
      "node_modules",
      ".git"
    ]
  }
}`;
}
