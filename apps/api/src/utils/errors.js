export class ApiError extends Error {
    constructor(message, status = 500) {
        super(message);
        this.status = status;
    }
}

export class BadRequestError extends ApiError {
    constructor(message = "Bad Request") {
        super(message, 400);
    }
}

export class UnauthorizedError extends ApiError {
    constructor(message = "Unauthorized") {
        super(message, 401);
    }
}

export class ForbiddenError extends ApiError {
    constructor(message = "Forbidden") {
        super(message, 403);
    }
}

export class NotFoundError extends ApiError {
    constructor(message = "Not Found") {
        super(message, 404);
    }
}

export class ConflictError extends ApiError {
    constructor(message = "Conflict") {
        super(message, 409);
    }
}