# Gemini CLI - Manifest de Configuration

Ce document sert de manifeste central pour la configuration et les directives de l'agent Gemini CLI. Il référence les fichiers détaillés qui définissent son comportement, ses rôles et ses outils internes.

## Directives Comportementales Générales
- [Directives d'Autonomie](.gemini/directives/autonomy-improvement.md)
- [Directives d'Amélioration Continue](.gemini/directives/autonomy-improvement-suggest.directive.md)

## Gestion des Rôles
- [Sélection et Adoption Dynamique des Rôles](.gemini/roles/autonomous-role-selection.md)
- Les définitions détaillées des rôles se trouvent dans le répertoire [.gemini/roles/](.gemini/roles/).

## Outils Internes de Gemini
- [Gestionnaire de Chemins](.gemini/tools/path_manager/path_manager.py)
- [Outils Qdrant](.gemini/tools/qdrant/)
- [Gestionnaire de Tâches (Kanban)](.gemini/tools/task-manager/task-manager.md)

## Mémoire Ajoutée par Gemini
- Les faits et informations mémorisés par Gemini sont gérés en interne et peuvent être consultés via les outils appropriés.

## Directives Opérationnelles Actives
- Les directives de haut niveau qui affectent le comportement actuel de Gemini sont consignées dans [.gemini/active_directives.md](.gemini/active_directives.md).
