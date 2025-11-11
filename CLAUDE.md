# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a project directory (`/var/www/html/hometurf`) within a WordPress installation environment. The directory has been configured with a complete spec-driven development workflow using Claude Code custom commands and agents.

## Development Workflow

This project uses a **spec-driven development approach** with a structured workflow for creating features and fixing bugs. All development should follow the established phases.

### Feature Development Commands

Use these commands to create and manage feature specifications:

- `/spec-create <feature-name> [description]` - Start a new feature specification through the complete workflow
- `/spec-execute <spec-name> [task-number]` - Execute implementation tasks from a completed spec
- `/spec-status <spec-name>` - Check progress on a specification
- `/spec-list` - View all specifications

### Bug Management Commands

Use these commands for structured bug tracking and fixes:

- `/bug-create` - Create a new bug report with proper analysis
- `/bug-analyze <bug-name>` - Analyze an existing bug in detail
- `/bug-fix <bug-name>` - Fix a bug using structured approach
- `/bug-verify <bug-name>` - Verify that a bug has been properly fixed
- `/bug-status [bug-name]` - Check status of bugs

### Spec-Driven Development Workflow

When creating features, follow this exact sequence:

1. **Requirements Phase**: Create requirements.md with user stories and acceptance criteria
   - Must be explicitly approved before proceeding
   - Uses requirements-template.md structure
   - Automatically validated by spec-requirements-validator agent

2. **Design Phase**: Create design.md with architecture and technical design
   - Must be explicitly approved before proceeding
   - Uses design-template.md structure
   - Automatically validated by spec-design-validator agent

3. **Tasks Phase**: Create tasks.md with atomic, agent-friendly tasks
   - Must be explicitly approved before proceeding
   - Uses tasks-template.md structure
   - Automatically validated by spec-task-validator agent
   - Each task should touch 1-3 files maximum and be completable in 15-30 minutes

4. **Implementation Phase**: Execute tasks using generated commands or spec-execute

**Critical Rules:**
- Never skip phases or proceed without explicit user approval
- Always analyze existing codebase before starting any phase
- Follow exact template structures from `.claude/templates/`
- Create only ONE spec at a time
- Use kebab-case for all feature names

## Directory Structure

```
.claude/
├── specs/           # Feature specifications (requirements.md, design.md, tasks.md)
├── bugs/            # Bug reports and analysis
├── steering/        # Project steering documents (product.md, tech.md, structure.md)
├── templates/       # Specification templates
├── commands/        # Custom slash command definitions
└── agents/          # Specialized validation agents
```

## Steering Documents

The `.claude/steering/` directory can contain these optional documents to guide development:

- **product.md**: Product vision, goals, and user personas
- **tech.md**: Technical standards, architecture patterns, and technology choices
- **structure.md**: Project file organization and naming conventions

These documents are referenced during spec creation to ensure alignment with project standards.

## Atomicity Requirements

All tasks must be **atomic and agent-friendly**:

- **File Scope**: Touch 1-3 related files maximum
- **Time Boxing**: Completable in 15-30 minutes
- **Single Purpose**: One testable outcome per task
- **Specific Files**: Must specify exact files to create/modify
- **Requirement References**: Each task references specific requirements

## Permissions

Pre-approved tool permissions include:
- Python execution and pip3 installs
- Node.js execution
- Web searches and fetches (toronto.ca, tdsb.on.ca, realtor.ca, OpenStreetMap)
- File operations with sed, awk, cp
- Reading files in /tmp and /var/www/html

## Environment

- **Working Directory**: `/var/www/html/on`
- **Parent Environment**: WordPress installation at `/var/www/html`
- **Platform**: Linux
- **Not a Git Repository**: Version control not yet initialized
