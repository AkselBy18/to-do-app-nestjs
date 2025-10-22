import { CreateTaskDto } from "src/modules/v1/tasks/dto/create-task.dto";
import { UpdateTaskDto } from "src/modules/v1/tasks/dto/update-task.dto";

export const CreateTaskSample = {
    type: CreateTaskDto,
    description: 'Data required to create a new task',
    examples: {
        example1: {
            summary: 'Basic sample',
            value: {
                name: "My task 3",
                priority: "medium",
                done: true
            }
        }
    }
}

export const UpdateTaskSample = {
    type: UpdateTaskDto,
    description: 'Data required to update data task',
    examples: {
        example1: {
            summary: 'Basic sample',
            value: {
                name: "My task 3",
                priority: "medium",
                done: true
            }
        }
    }
}

export const CreateTaskResponse = {
    example: {
        data: {
            pk_task: 5,
            name: "My task 3",
            priority: "medium",
            done: true,
            date_creation: "2025-10-22T16:20:07.000Z",
            date_update: "2025-10-22T16:20:07.000Z",
            fk_user: 1
        },
        message: "Success request create todo",
        success: true,
        statusCode: 200
    }
}

export const UpdateTaskResponse = {
    example: {
        data: {
            pk_task: 4,
            name: "update task 22",
            priority: "medium",
            done: false,
            date_creation: "2025-10-22T12:03:45.000Z",
            date_update: "2025-10-22T15:34:56.000Z",
            fk_user: 1
        },
        message: "Success request update todo",
        success: true,
        statusCode: 200
    }
}

export const GetListTasksResponse = {
    example: {
        data: [
            {
                pk_task: 1,
                name: "My task 5",
                priority: "medium",
                done: true,
                date_creation: "2025-10-22T12:00:37.000Z",
                date_update: "2025-10-22T12:00:37.000Z",
                fk_user: 1
            },
            {
                pk_task: 2,
                name: "My task 1",
                priority: "medium",
                done: true,
                date_creation: "2025-10-22T12:00:41.000Z",
                date_update: "2025-10-22T12:00:41.000Z",
                fk_user: 1
            },
            {
                pk_task: 4,
                name: "update task 22",
                priority: "medium",
                done: false,
                date_creation: "2025-10-22T12:03:45.000Z",
                date_update: "2025-10-22T15:34:56.000Z",
                fk_user: 1
            },
            {
                pk_task: 5,
                name: "My task 3",
                priority: "medium",
                done: true,
                date_creation: "2025-10-22T16:20:07.000Z",
                date_update: "2025-10-22T16:20:07.000Z",
                fk_user: 1
            }
        ],
        "message": "Success request get all",
        "success": true,
        "statusCode": 200
    }
}

export const GetOneTaskResponse = {
    example: {
        data: {
            pk_task: 4,
            name: "update task 22",
            priority: "medium",
            done: false,
            date_creation: "2025-10-22T12:03:45.000Z",
            date_update: "2025-10-22T15:34:56.000Z",
            fk_user: 1
        },
        message: "Success request get todo",
        success: true,
        statusCode: 200
    }
}

export const DeleteTaskResponse = {
    example: {
        data: {
           name: "My task 1",
           priority: "medium",
           done: true,
           date_creation: "2025-10-22T12:00:41.000Z",
           date_update: "2025-10-22T12:00:41.000Z",
           fk_user: 1
        },
        message: "Success request delete Todo",
        success: true,
        statusCode: 200
    }
}